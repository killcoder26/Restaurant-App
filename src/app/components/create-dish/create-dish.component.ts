import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IMenu from 'src/app/model/menu';
import ICategory from 'src/app/model/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDishCreate } from 'src/app/model/dishCreate';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent implements OnInit {


  public menuList: IMenu[] | any;
  public categoryList: ICategory[] | any;


  dishForm: IDishCreate = {
    dishName: "",
    dishDesc: "",
    dishPrice: 0,
    menuName: "",
    categoryName: "",
    dishNature: "",
    dishImage: ""
  }




  constructor(private dataservice: DataService, private myRouter: Router, private Ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataservice.getAllMenus().subscribe((menus: IMenu[]) => {
      this.menuList = menus;
    })
    this.dataservice.getAllCategories().subscribe((cat: ICategory[]) => {
      this.categoryList = cat;
    })
  }



  formSubmit() {
    this.dataservice.createDish(this.dishForm).subscribe(
      {
        next(data) {
          console.log(data);

        },
        error(err) {
          console.log(err);
        }
      }
    )
    this.myRouter.navigate(['/dish']);
  }

}
