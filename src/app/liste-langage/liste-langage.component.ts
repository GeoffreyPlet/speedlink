import { Component, OnInit } from '@angular/core';
import { Langage } from '../langage';
import { LangageService } from '../service/langage.service';

@Component({
  selector: 'app-liste-langage',
  templateUrl: './liste-langage.component.html',
  styleUrls: ['./liste-langage.component.scss']
})
export class ListeLangageComponent implements OnInit {

  constructor(private serviceLangage: LangageService) { }

  langages: Langage[];

  ngOnInit(): void {
    this.serviceLangage.getLangages().then( langage => {
      this.langages = langage;
      console.log(this.langages);
    })
  }

}
