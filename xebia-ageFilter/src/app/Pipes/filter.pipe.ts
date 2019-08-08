import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredNumber: number): any {
    if(value.length === 0 || filteredNumber === 0) {
      return value;
    }
    const resultArray = [];
    if(filteredNumber === 1) {
      for(const item of value) {
        if(item["empAge"] < 20) {
          resultArray.push(item);
        }
      }
    } else if(filteredNumber === 2) {
      for(const item of value) {
        if(item["empAge"] >= 20 && item["empAge"] <= 40) {
          resultArray.push(item);
        }
      }
    } else if(filteredNumber === 3) {
      for(const item of value) {
        if(item["empAge"] > 40 && item["empAge"] <= 60) {
          resultArray.push(item);
        }
      }
    } else if(filteredNumber === 4) {
      for(const item of value) {
        if(item["empAge"] > 60) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

}
