import { Component, OnInit } from '@angular/core';
import { Langage } from '../langage';
import { Link } from '../link';
import { LangageService } from '../service/langage.service';
import { LinkService } from '../service/link.service';
import { UserService } from '../service/user.service';




import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-liste-langage',
  templateUrl: './liste-langage.component.html',
  styleUrls: ['./liste-langage.component.scss']
})
export class ListeLangageComponent implements OnInit {

  constructor(private serviceLangage: LangageService, private userService: UserService, private linkService: LinkService) { }
  session: Boolean;

  langages: Langage[];
  selectLangage: Langage;
  selectLink: Link[] = [];
  display: Boolean = false;

  percentUploaded = [0];


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
      const selectedFileList = (<HTMLInputElement>document.getElementById('cover')).files; 
      
      this.uploadFile(selectedFileList[0]);
      console.log(selectedFileList[0]);

      
      
    }
    fileUploadSuccess() {
      let flag = true;
      this.percentUploaded.forEach(n => {
        if (n !== 100) {
          flag = false;
        }
      });
    }
    uploadFile(file: File) {
      const formData = new FormData();
      formData.append("file", file);
      this.serviceLangage.uploadImage(formData)
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentUploaded[file.size] = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            console.log(file.name + ', Size: ' + file.size + ', Uploaded URL: ' + event.body.link);
            this.fileUploadSuccess();
          }
        },
          err => console.log(err)
        );
    }
    
  

}
