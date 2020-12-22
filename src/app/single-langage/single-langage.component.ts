import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-langage',
  templateUrl: './single-langage.component.html',
  styleUrls: ['./single-langage.component.scss']
})
export class SingleLangageComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit( ): void {
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
    });
  }

}
