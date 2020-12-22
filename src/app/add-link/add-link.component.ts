import { Component, OnInit, Input } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss']
})
export class AddLinkComponent implements OnInit {

  @Input() selectLangage: Langage;

  /**
   * Mes variable
   */
  toggle: Boolean = true;
  hidden = false;
  addLink: Link = new Link();
  allLink: Link[];
   
  constructor(private LinkService: LinkService) { }

  ngOnInit(): void {
  }

  toggleModal(){
    
      document.getElementById('modal-add-link').hidden = true;
      document.getElementById('modal-body-add-link').hidden = true;
      document.querySelector('body').style.overflowY = 'auto';
      this.addLink = new Link();
      
    
  }
  addLinkFunction(){
    this.LinkService.getLinks().then( link => {
      this.allLink = link;
      this.addLink.id = this.allLink[this.allLink.length - 1].id + 1;
      this.addLink.id_langage = this.selectLangage.id;

      this.LinkService.addLink(this.addLink);
      alert('Ajout effectuer');
      location.reload();
    });
  }

}
