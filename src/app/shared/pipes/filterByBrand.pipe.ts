import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterByBrand",
})
export class FilterByBrandPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== "All") {
      return select
        ? items.filter(
            (item: { productName: any }) => item.productName === select
          )
        : items;
    } else {
      return items;
    }
  }
}
