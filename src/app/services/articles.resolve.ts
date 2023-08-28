import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { newsApiService } from "./newsApi.service";

@Injectable({
  providedIn: 'root',
})
export class resolvearticles implements Resolve<any>{

  constructor(public apiService: newsApiService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     return this.apiService.getTopHeadlinesOnHomepage().subscribe(data => {
      return data.articles;
    })
  }

}
