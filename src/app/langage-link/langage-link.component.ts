import { Component, OnInit, Input } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-langage-link',
  templateUrl: './langage-link.component.html',
  styleUrls: ['./langage-link.component.scss']
})
export class LangageLinkComponent implements OnInit {
  @Input() currentLangage: Langage;
  @Input() currentLinks: Link[];


  


  constructor() { }

  ngOnInit(): void {

    
    
  }
  loadLink(){
    alert("salut");
  }
  
  

}
