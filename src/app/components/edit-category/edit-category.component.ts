import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import ICategory from 'src/app/model/category';
import ICategoryCreate from 'src/app/model/categoryCreate';
import IMenu from 'src/app/model/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  public menuList: IMenu[] | any;
  public id = 0;


  categoryForm: ICategoryCreate = {
    categoryName: "",
    categoryDesc: "",
    categoryImage: "",
    menuName: ""
  }
  categoryDetails: ICategory = {
    categoryName: "",
    categoryDesc: "",
    categoryImage: "",
    categoryId: 0
  }

  constructor(private dataservice: DataService, private router: ActivatedRoute, private route: Router) {

  }
  getByID(id: number) {
    this.dataservice.getCategoryByID(id).subscribe(cat => {
      this.categoryDetails = cat;
    })
  }

  ngOnInit() {
    this.dataservice.getAllMenus().subscribe((menus: IMenu[]) => {
      this.menuList = menus;
    })
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getByID(this.id);
    console.log("ID=" + this.id);
    this.dataservice.getCategoryByID(this.id).subscribe((cat) => {
      this.categoryDetails = cat;
    })
    this.categoryDetails.categoryId = this.id;
  }


  formSubmit() {
    console.log(this.categoryForm);

    this.dataservice.editCategory(this.id, this.categoryDetails).subscribe(
      {
        next(data) {
          console.log(data);
          console.log("CATEGORY EDITED!!")
        },
        error(err) {
          console.log(err);
        }

      }
    )
    this.route.navigate(["/category"])
  }

}
