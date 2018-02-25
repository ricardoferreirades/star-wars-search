import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!args) { return value; }

    const result = value.filter(v => {
      return v['name'].toLowerCase().indexOf(args.toLowerCase()) !== -1;
    });

    return result;
  }

}
