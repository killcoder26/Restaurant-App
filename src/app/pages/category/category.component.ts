import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ICategory from 'src/app/model/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryList: ICategory[] | any;

  public constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router) { }




  ngOnInit(): void {
    var menuName = this.route.snapshot.paramMap.get('menuName')
    if (menuName == null) {
      menuName = "breakfast";
    }
    this.dataservice.getCategoryByMenuName(menuName).subscribe((cat: ICategory[]) => {
      this.categoryList = cat;
    })
  }

  goToDishes(categoryName: string) {
    this.router.navigate([`/dish/`, categoryName])
  }


}
