import { Pipe, PipeTransform } from '@angular/core';
import IDish from './model/dish';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchString: string): any[] {
    if (!value || !searchString) {
      return value;
    }
    else {
      searchString = searchString.toLowerCase();
      return value.filter(item => {
        return item.dishName.toLowerCase().includes(searchString);
      });
    }
  }

}
