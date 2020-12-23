import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-single-langage',
  templateUrl: './single-langage.component.html',
  styleUrls: ['./single-langage.component.scss']
})
export class SingleLangageComponent implements OnInit {

  links:Link[] = [];
  langage:Langage = new Langage();
  parma: Number;
  search: String;
  searchObject = {
    'search': [],
    'id': []
  };
  searchGrid: Array<any> = [];

  constructor(private route:ActivatedRoute, private serviceLink:LinkService, private serviceLangage:LangageService) { }

  ngOnInit( ): void {
    this.route.params.subscribe(params => {
      this.serviceLink.getLinkWithLangageId(params.id).then( link => {

        this.serviceLangage.getLangageWithId(params.id).then( langage => {
          this.langage = langage;
        });
        this.parma = params.id;
        this.links = link;
      });
    });
  }
  searchMethod(){
    for(let i = 0; i < this.links.length; i++){
      this.searchObject.search.push(this.links[i].description_cover.split(' '));
      this.searchObject.id.push(this.links[i].id);
    }
    for(let i = 0; i < this.searchObject.search.length; i++){
      for(let j = 0; j < this.searchObject.search[i].length; j++){
        for(let k = 0; k < this.searchObject.search[i][j].length; k++){
          console.log(this.searchObject.search[i][j].charAt(k));
        }
      } 
    }

    this.searchObject = {
      'search': [],
      'id': []
    };
    
  }

}
