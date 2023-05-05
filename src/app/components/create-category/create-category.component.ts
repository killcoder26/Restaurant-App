import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ICategoryCreate from 'src/app/model/categoryCreate';
import IMenu from 'src/app/model/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  public menuList: IMenu[] | any;
  ngOnInit() {
    this.dataservice.getAllMenus().subscribe((menus: IMenu[]) => {
      this.menuList = menus;
    })
  }
  categoryForm: ICategoryCreate = {
    categoryName: "",
    categoryDesc: "",
    categoryImage: "",
    menuName: ""
  }
  constructor(private dataservice: DataService, private router: Router) {

  }

  formSubmit() {
    console.log(this.categoryForm);

    this.dataservice.createCategory(this.categoryForm).subscribe(
      {
        next(data) {
          console.log(data);
          console.log("CATEGORY ADDED!!")
        },
        error(err) {
          console.log(err);
        }

      }
    )
    this.router.navigate(["/category"])
  }

}
