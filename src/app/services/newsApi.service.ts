import { HttpClient } from "@angular/common/http";
import { EventEmitter, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class newsApiService {


  constructor(private http: HttpClient){
  }

  emitFilterArts = new EventEmitter();


  BASE_URL_Topheadlines = 'https://newsapi.org/v2/top-headlines/';
  BASE_URL_Everything = 'https://newsapi.org/v2/everything/'

  API_kEY = 'f5f164f83d0d4da9ac50d9991810aa58'



  getTopHeadlinesOnHomepage() : Observable<any>{
    return this.http.get<any>(`${this.BASE_URL_Topheadlines}?country=in&apiKey=${this.API_kEY}`)
  }

  getAllSources() : Observable<any>{
    return this.http.get<any>(`${this.BASE_URL_Topheadlines}/sources?apiKey=${this.API_kEY}`)
  }

  getSourcesByFilterSearch(cat: string,con: string,lan : string,fromD: string,toD: string,sortBy: string){
    return this.http.get<any>(`${this.BASE_URL_Topheadlines}?category=${cat}&country=${con}&language=${lan}&from=${fromD}&to${toD}&sortBy${sortBy}&apiKey=${this.API_kEY}`)
  }

  getsourceResults(source : any) : Observable<any>{
    return this.http.get<any>(`${this.BASE_URL_Topheadlines}?sources=${source}&apiKey=${this.API_kEY}`)
  }

  getSearchResults(searchKey : any) : Observable<any>{
    return this.http.get<any>(`${this.BASE_URL_Everything}?q=${searchKey}&apiKey=${this.API_kEY}`)
  }


  emitFilterArticles(filterArts : any) {
    this.emitFilterArts.emit(filterArts)

  }


}
