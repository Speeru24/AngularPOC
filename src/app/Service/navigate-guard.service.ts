import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Observable } from "../../../node_modules/rxjs";
// import { Observable } from 'rxjs/Observable';

export class NavigateGuard implements CanActivate{
    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot): Observable<boolean> | Promise<boolean>|boolean{
                    if(confirm("Do you want to add new Patient?")){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
}