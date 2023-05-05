import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ICategory from 'src/app/model/category';
import IMenu from 'src/app/model/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categoryList: ICategory[] | any;

  public constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataservice.getAllCategories().subscribe((cat: ICategory[]) => {
      this.categoryList = cat;
    })
    console.timeStamp
    console.log(this.categoryList);
  }

}
