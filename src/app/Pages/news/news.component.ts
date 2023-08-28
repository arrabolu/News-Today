import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { newsApiService } from 'src/app/services/newsApi.service';
import { FilterSearchComponent } from '../filter-search/filter-search.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  articles: Array<any> = [];

  constructor(private apiService: newsApiService,private dialog : MatDialog, private activRoute : ActivatedRoute) {}

  ngOnInit(): void {

    this.apiService.getTopHeadlinesOnHomepage().subscribe((data) => {
      this.articles = data.articles;
    });

  //  console.log(this.activRoute.snapshot.data['articles']);



    this.apiService.getAllSources().subscribe((data) => {});

    this.apiService.emitFilterArts.subscribe((data) => {
      this.articles = data;
    });
  }

  openDialog() {
    this.dialog.open(FilterSearchComponent);
  }
}
