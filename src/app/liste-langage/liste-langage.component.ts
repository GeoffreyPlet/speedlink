import { Component, OnInit, Input } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';
import { UserService } from '../service/user.service';




import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-liste-langage',
  templateUrl: './liste-langage.component.html',
  styleUrls: ['./liste-langage.component.scss']
})
export class ListeLangageComponent implements OnInit {

  constructor(private serviceLangage: LangageService, private userService: UserService, private linkService: LinkService) { }
  session: Boolean;
  hidden = true;
  langages: Langage[];
  selectLangage: Langage;
  selectLink: Link[] = [];
  display: Boolean = false;
  addLink: Link;



  ngOnInit(): void {
    this.userService.getUser('admin', 'admin').then( user => {
      this.session = user[0].session;
    });
    this.serviceLangage.getLangages().then( langage => {
      this.langages = langage;
    })
  }
  show(id){
    this.selectLink.splice(0, this.selectLink.length);
    this.serviceLangage.getLangageWithId(id).then( langage => {
      this.selectLangage = langage;
      this.linkService.getLinks().then(links => {
      for(let i = 0; i < links.length; i++){
        if(links[i].id_langage === this.selectLangage.id){
          this.selectLink.push(links[i]);
        }
       
      }
    });
    });
    
    
  }
    close(){
      this.selectLangage = null;
      this.selectLink.splice(0, this.selectLink.length);
      this.display = false;
    }
    toggleActionBarre(){
      this.display = true;
      
    }
    valideModifLangage(){
      this.serviceLangage.updateLangage(this.selectLangage).then( langage => {
        location.reload();
      });
    }
    trash(){
      if(this.selectLangage.trash){
        this.selectLangage.trash = false;
        document.querySelector('#row-'+this.selectLangage.id+' p').classList.add('color-tint');
        document.querySelector('#row-'+this.selectLangage.id+' p').classList.remove('dis');
      }
      else{
        this.selectLangage.trash = true;
        document.querySelector('#row-'+this.selectLangage.id+' p').classList.remove('color-tint');
        document.querySelector('#row-'+this.selectLangage.id+' p').classList.add('dis');
        
      }
      this.serviceLangage.trashLangage(this.selectLangage);
    }
    toggleModal(){
      if(this.hidden){
  
        document.getElementById('modal-add-link').hidden = false;
        document.getElementById('modal-body-add-link').hidden = false;
        document.querySelector('body').style.overflowY = 'hidden';
      }
      
    }
 

}
