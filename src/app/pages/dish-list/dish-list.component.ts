import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IDish from 'src/app/model/dish';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  public dishList: IDish[] | any;
  public enableRestore: boolean | any = false;

  public constructor(private dataservice: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  public showDeleted: boolean = false;
  ngOnInit(): void {
    this.dataservice.getAllDishes().subscribe((dishes: IDish[]) => {
      this.dishList = dishes;
    })
  }

  fetchDeleted(): void {
    console.log(this.showDeleted);
    if (this.showDeleted) {
      this.dataservice.getDeletedDishes().subscribe((dishes: IDish[]) => {
        this.dishList = dishes;
        this.enableRestore = true;
      })
    }
    else {
      this.dataservice.getAllDishes().subscribe((dishes: IDish[]) => {
        this.dishList = dishes;
        this.enableRestore = false;
      })
    }

  }

  deleteItem(id: number) {
    this.dataservice.deleteDish(id).subscribe({
      next(data) {
        console.log(data);
      },
      error(err) {
        console.log(err);

      }
    })

    window.location.reload();
  }


  dishRestore(id: number) {
    this.dataservice.restoreDeletedDishes(id).subscribe(
      {
        next(data) {
          console.log(data);
        },
        error(err) {
          console.log(err);
        }
      }
    )
  }


}

