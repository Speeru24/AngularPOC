import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";

@Pipe({
    name: 'sortAge',
    pure: false
})
export class SortAgeAsc implements PipeTransform {
    transform(records: Array<any>, args?: any): any {
        return records.sort(function(a, b){
            if(a['age'] < b['age']){
                return -1 * args.direction;
            }
            else if( a['age'] > b['age']){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
    };
}