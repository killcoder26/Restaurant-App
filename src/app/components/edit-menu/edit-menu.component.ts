import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IMenu from 'src/app/model/menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  public id: number = 0;

  menuForm: IMenu = {
    menuName: "",
    menuDescription: "",
    menuImage: "",
    menuId: 0
  }
  constructor(private dataservice: DataService, private router: ActivatedRoute, private route: Router) { }


  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    console.log("ID=" + this.id);
    this.dataservice.getMenusByID(this.id).subscribe((menus) => {
      this.menuForm = menus;
    })
    this.menuForm.menuId = this.id;
  }
  formSubmit() {
    console.log(this.menuForm)
    this.dataservice.editMenu(this.id, this.menuForm).subscribe(
      {
        next(data) {
          console.log(data)
        },
        error(err) {
          console.log(err)
        },
      }
    )
  }

}
