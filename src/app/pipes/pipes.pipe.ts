import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
    //needs to take in value from click event and return category which matches. eg category = home
    //get value from click if value === category.value then return that.

    //might help: https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
  }

}
