import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import IMenu from '../model/menu';
import ICategory from '../model/category';
import IDish from '../model/dish';
import { IDishCreate } from '../model/dishCreate';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: ActivatedRoute, private route: Router) { }

  public getAllMenus(): Observable<IMenu[]> {
    return this.http.get<IMenu[]>(`https://localhost:7046/api/menu`);
  }
  public getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`https://localhost:7046/api/category`);
  }
  public getAllDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(`https://localhost:7046/api/dish`);
  }
  public getCategoryByMenuName(menuName: string): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`https://localhost:7046/api/category/catbymenu/${menuName}`);
  }

  public getDishesByCategoryName(categoryName: string): Observable<IDish[]> {
    return this.http.get<IDish[]>(`https://localhost:7046/api/dish/dishbycat/${categoryName}`);
  }

  public createDish(dishDetails: IDishCreate): Observable<any> {
    var data = {
      dishName: dishDetails.dishName,
      dishDescription: dishDetails.dishDesc,
      dishPrice: dishDetails.dishPrice,
      dishImage: dishDetails.dishImage,
      dishNature: dishDetails.dishNature,
      isDeleted: false
    }
    return this.http.post<IDish>(`https://localhost:7046/api/dish/${dishDetails.menuName}/${dishDetails.categoryName}`, data)
      .pipe(map((res: any) => {
        res.statusCode = 200;
        return res;
      }))
  }

  public createMenu(menuDetails: any): Observable<any> {
    return this.http.post<IMenu>(`https://localhost:7046/api/menu`, menuDetails)
      .pipe(map((res: any) => {
        res.statusCode = 200;
        return res;
      }))
  }

  public createCategory(categoryDetails: any): Observable<any> {
    var data = {
      categoryName: categoryDetails.categoryName,
      categoryDesc: categoryDetails.categoryDesc,
      categoryImage: categoryDetails.categoryImage
    }
    return this.http.post<ICategory>(`https://localhost:7046/api/category/${categoryDetails.menuName}`, data)
      .pipe(map((res: any) => {
        res.statusCode = 200;
        return res;
      }))
  }

  public getDishesByID(id: number): Observable<IDish> {
    return this.http.get<IDish>(`https://localhost:7046/api/dish/${id}`);
  }
  public getMenusByID(id: number): Observable<IMenu> {
    return this.http.get<IMenu>(`https://localhost:7046/api/menu/${id}`);
  }
  public getCategoryByID(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`https://localhost:7046/api/category/${id}`);
  }

  public editDish(id: number, dishDetails: IDish) {
    return this.http.put<IDish>(`https://localhost:7046/api/dish/${id}`, dishDetails);
  }

  public editMenu(id: number, menuDetails: IMenu) {
    return this.http.put<IMenu>(`https://localhost:7046/api/menu/${id}`, menuDetails);
  }
  public editCategory(id: number, categoryDetails: ICategory) {
    return this.http.put<ICategory>(`https://localhost:7046/api/category/${id}`, categoryDetails);
  }

  public deleteDish(id: number) {
    return this.http.delete<IDish>(`https://localhost:7046/api/dish/${id}`);
  }

  public getDeletedDishes() {
    return this.http.get<IDish[]>(`https://localhost:7046/api/dish/deleted`);
  }

  public restoreDeletedDishes(id: number) {
    return this.http.put<any>(` https://localhost:7046/restore/${id}`, id);
  }


}
