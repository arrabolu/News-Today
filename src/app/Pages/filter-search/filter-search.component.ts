import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { newsApiService } from 'src/app/services/newsApi.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {

  filteredArts: any;


  constructor(private fb : FormBuilder, private apiService : newsApiService) {


  }

  ngOnInit(){
    this.filterForm  = this.fb.group({
      language : [''],
      country : [''],
      category : [''],
      fromDate : [''],
      toDate : [''],
      sortBy : ['']
    });
  }

  filterForm !: FormGroup


  Languages = [
    {value : 'ar', viewValue : 'Arabic'},
    {value : 'de', viewValue : 'German'},
    {value : 'en', viewValue : 'English'},
    {value : 'es', viewValue : 'Spanish'},
    {value : 'fr', viewValue : 'French'},
    {value : 'he', viewValue : 'Hebrew'},
    {value : 'it', viewValue : 'Italian'},
    {value : 'nl', viewValue : 'Dutch'},
    {value : 'no', viewValue : 'Norwegian'},
    {value : 'pt', viewValue : 'Portuguese'},
    {value : 'ru', viewValue : 'Russian'},
    {value : 'sv', viewValue : 'Swedish'},
    {value : 'zh', viewValue : 'Chinese'},
  ]


   countries = [
    { value: 'us', viewValue: 'United States' },
    { value: 'au', viewValue: 'Australia' },
    { value: 'gb', viewValue: 'United Kingdom' },
    { value: 'in', viewValue: 'India' },
    { value: 'ae', viewValue: 'United Arab Emirates' },
    { value: 'ar', viewValue: 'Argentina' },
    { value: 'at', viewValue: 'Austria' },
    { value: 'be', viewValue: 'Belgium' },
    { value: 'bg', viewValue: 'Bulgaria' },
    { value: 'br', viewValue: 'Brazil' },
    { value: 'ca', viewValue: 'Canada' },
    { value: 'ch', viewValue: 'Switzerland' },
    { value: 'cn', viewValue: 'China' },
    { value: 'co', viewValue: 'Colombia' },
    { value: 'cu', viewValue: 'Cuba' },
    { value: 'cz', viewValue: 'Czech Republic' },
    { value: 'de', viewValue: 'Germany' },
    { value: 'eg', viewValue: 'Egypt' },
    { value: 'fr', viewValue: 'France' },
    { value: 'gr', viewValue: 'Greece' },
    { value: 'hk', viewValue: 'Hong Kong' },
    { value: 'hu', viewValue: 'Hungary' },
    { value: 'id', viewValue: 'Indonesia' },
    { value: 'ie', viewValue: 'Ireland' },
    { value: 'il', viewValue: 'Israel' },
    { value: 'it', viewValue: 'Italy' },
    { value: 'jp', viewValue: 'Japan' },
    { value: 'kr', viewValue: 'South Korea' },
    { value: 'lt', viewValue: 'Lithuania' },
    { value: 'lv', viewValue: 'Latvia' },
    { value: 'ma', viewValue: 'Morocco' },
    { value: 'mx', viewValue: 'Mexico' },
    { value: 'my', viewValue: 'Malaysia' },
    { value: 'ng', viewValue: 'Nigeria' },
    { value: 'nl', viewValue: 'Netherlands' },
    { value: 'no', viewValue: 'Norway' },
    { value: 'nz', viewValue: 'New Zealand' },
    { value: 'ph', viewValue: 'Philippines' },
    { value: 'pl', viewValue: 'Poland' },
    { value: 'pt', viewValue: 'Portugal' },
    { value: 'ro', viewValue: 'Romania' },
    { value: 'rs', viewValue: 'Serbia' },
    { value: 'ru', viewValue: 'Russia' },
    { value: 'sa', viewValue: 'Saudi Arabia' },
    { value: 'se', viewValue: 'Sweden' },
    { value: 'sg', viewValue: 'Singapore' },
    { value: 'si', viewValue: 'Slovenia' },
    { value: 'sk', viewValue: 'Slovakia' },
    { value: 'th', viewValue: 'Thailand' },
    { value: 'tr', viewValue: 'Turkey' },
    { value: 'tw', viewValue: 'Taiwan' },
    { value: 'ua', viewValue: 'Ukraine' },
    { value: 've', viewValue: 'Venezuela' },
    { value: 'za', viewValue: 'South Africa' }

  ]

  categories = [ 'business', 'entertainment', 'general', 'healthscience', 'sports', 'technology']

  sortByArray = ['relevancy', 'popularity', 'publishedAt' ]



  searchByFilters() {
    console.log(this.filterForm.value)

   const lan = this.filterForm.controls['language'].value
   const cat = this.filterForm.controls['category'].value
   const con = this.filterForm.controls['country'].value
   const from = this.filterForm.controls['fromDate'].value
   const to = this.filterForm.controls['toDate'].value
   const sortBy = this.filterForm.controls['sortBy'].value

    this.apiService.getSourcesByFilterSearch(cat,con,lan,from,to,sortBy).subscribe((data)=>{

      this.filteredArts = data.articles
      console.log(this.filteredArts)
      this.apiService.emitFilterArticles(this.filteredArts)
    })



  }

}
