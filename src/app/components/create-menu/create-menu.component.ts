import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import IMenu from 'src/app/model/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menuForm = {
    menuName: "",
    menuDescription: "",
    menuImage: ""
  }
  constructor(private dataservice: DataService, private router: Router) { }


  ngOnInit(): void {

  }
  formSubmit() {
    console.log(this.menuForm)
    this.dataservice.createMenu(this.menuForm).subscribe(
      {
        next(data) {
          console.log(data);
        },
        error(err) {
          console.log(err);
        }
      }
    )
    this.router.navigate(['/menu'])
  }

}
