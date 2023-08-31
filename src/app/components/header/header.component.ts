import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog'
import { FilterSearchComponent } from 'src/app/Pages/filter-search/filter-search.component';
import { newsApiService } from 'src/app/services/newsApi.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sourcesNames: any;

  searchText !: string;

  constructor(private dialog : MatDialog, private apiService : newsApiService){

  }

  ngOnInit(): void {

    window.onclick = function(event : any) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    this.getAllSources();

  }

  reload(){
    window.location.reload();
  }

  getAllSources(){
    this.apiService.getAllSources().subscribe(data => {
     let sourceNames = data.sources.map((source: any) => {
        return source.name
      })
        this.sourcesNames = sourceNames;
        console.log(this.sourcesNames);

    });
  }

  openDialog() {
    this.dialog.open(FilterSearchComponent);
  }

   myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  onSourceClick(source : any){
    this.apiService.getsourceResults(source).subscribe(results =>{

      this.apiService.emitFilterArticles(results.articles)
      console.log(results.articles);

    })

    const element : any = document.getElementById("mySidenav")
    element.style.width = "0";

  }

  onSearchClick(){
    this.apiService.getSearchResults(this.searchText.trim()).subscribe(results =>{

      this.apiService.emitFilterArticles(results.articles)
      this.searchText = ''
    })
  }

  openNav() {
    const element : any = document.getElementById("mySidenav")
    element.style.width = "200px";
  }

  closeNav() {
    const element : any = document.getElementById("mySidenav")
    element.style.width = "0";
  }


}
