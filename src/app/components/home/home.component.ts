import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import IMenu from 'src/app/model/menu';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menuList: IMenu[] | any;

  public constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataservice.getAllMenus().subscribe((menus: IMenu[]) => {
      this.menuList = menus;
    })
    console.log(this.menuList);
  }

  goToCategory(menuName: string) {
    this.router.navigate([`/category/`, menuName]);
  }
}
