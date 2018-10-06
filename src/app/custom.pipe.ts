import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'customPipe'
})

export class customPipe implements PipeTransform{
 
  transform(input:string):string{
    let name = '';

    for(let i = input.length-1; i>=0; i--){
      name += input.charAt(i);
    }
    return name;
  }

}