import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ICategory from 'src/app/model/category';
import IDish from 'src/app/model/dish';
import { IDishCreate } from 'src/app/model/dishCreate';
import IMenu from 'src/app/model/menu';
import { DataService } from 'src/app/services/data.service';
import { LottiePlayer } from 'lottie-web';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css']
})
export class EditDishComponent implements OnInit {
  constructor(private dataservice: DataService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  public menuList: IMenu[] | any;
  public categoryList: ICategory[] | any;


  public menuName = "";
  public categoryName = "";
  public id = 0;

  dishDetails: IDish = {
    dishID: 0,
    dishName: "",
    dishDescription: "",
    dishPrice: 0,
    dishImage: "",
    dishNature: "",
    isDeleted: false,
    dishCategory: null
  }
  getByID(id: number) {
    this.dataservice.getDishesByID(id).subscribe(dish => {
      this.dishDetails = dish;
    })
  }

  ngOnInit() {

    this.dataservice.getAllMenus().subscribe((menus: IMenu[]) => {
      this.menuList = menus;
    })
    this.dataservice.getAllCategories().subscribe((cat: ICategory[]) => {
      this.categoryList = cat;
    })
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getByID(this.id);
    console.log("ID=" + this.id);
    console.log(this.dishDetails);
    this.dishDetails.dishID = this.id;

  }

  formSubmit() {
    this.dataservice.editDish(this.id, this.dishDetails).subscribe({
      next(data) {
        console.log(data);
      },
      error(err) {
        console.log(err);
      }
    })
    this.route.navigate(['/dish']);
    window.location.reload();
  }

}
