import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CourseDataService } from 'src/app/services/course-data.service';
import { ShardService } from 'src/app/services/shard.service';
import { DelateLessonComponent } from '../delate-lesson/delate-lesson.component';

//for youtube url safe
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-show-lessons',
  templateUrl: './show-lessons.component.html',
  styleUrls: ['./show-lessons.component.scss']
})
export class ShowLessonsComponent implements OnInit {
  material:string;
  lessons:any=[];
  isuser:boolean=false;
  isadmin:boolean=false;

  constructor(public sanitizer: DomSanitizer, private fire_stor:StorageService, private cours_Service:CourseDataService, private shard:ShardService, private dialog:MatDialog, private auth_Ser:AuthService) {}

  ngOnInit(): void {
            /**** start is user and adimn*/
            this.auth_Ser.authUser.subscribe(user =>{
              if(user){
                this.isuser=true;
                this.auth_Ser.userid=user.uid;
                this.fire_stor.userdata().subscribe(data=>{
                  if(data['admin']){
                    this.isadmin=true; 
                  }
                })
              }else{
                this.isuser=false;
                this.isadmin=false;
                this.auth_Ser.userid=''
              }
            })
          /**** end  is user and admin **********/

    let section=this.shard.getinfo().section,
        level=this.shard.getinfo().level,
        term=this.shard.getTerm(),
        material=this.shard.getMaterial();
    this.material=material
     //first term
     this.cours_Service.show_lessons(section,level,term,material).subscribe(data=>{
       this.lessons=data.map(ele=>{
         return{
           id:ele.payload.doc.id,//عشان لينك اليوتيوب يشتغل 
           link:this.sanitizer.bypassSecurityTrustResourceUrl(ele.payload.doc.data()['link']),
           lessonname:ele.payload.doc.data()['lessonname'],
           week:ele.payload.doc.data()['week'],
         }
       })
     });
  
  }


  close(){
    this.dialog.closeAll();
  }

  delate(week,lesson_name){
    this.shard.setweek_lesson_name(week.innerText,lesson_name.innerText)//بعتها للشيرد
    this.dialog.open(DelateLessonComponent);
  }
}
