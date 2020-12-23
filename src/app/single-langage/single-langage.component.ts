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
  verifLink: Boolean;
  verifSearch: String = '';
  searchObject = {
    'search': [],
    'id': []
  };
  searchGrid: Link[];

  constructor(private route:ActivatedRoute, private serviceLink:LinkService, private serviceLangage:LangageService) { }

  ngOnInit( ): void {
 
    this.route.params.subscribe(params => {
      this.serviceLink.getLinkWithLangageId(params.id).then( link => {

        this.serviceLangage.getLangageWithId(params.id).then( langage => {
          this.langage = langage;
        });
        this.parma = params.id;
        this.links = link;
        this.verifLink = true;
        this.search = ''
      });
    });
  }
  searchMethod(){
    this.serviceLink.seachLink(this.search, this.langage.id).then( links => {
        
     if(links.length != 0){
       
      this.links = links;
      this.verifLink = true;
     }
     else{
       this.verifLink = false;
     }
      
    
    
  });
}

}
