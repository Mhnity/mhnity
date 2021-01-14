import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { CourseDataService } from 'src/app/services/course-data.service';
import TypeIt from 'typeit';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

import { ShowLessonsComponent } from '../../.././components/courses/show-lessons/show-lessons.component';
import { AddLessonComponent } from '../../.././components/courses/add-lesson/add-lesson.component';
import { DelateCourseComponent } from '../../.././components/courses/delate-course/delate-course.component';
import { ShardService } from 'src/app/services/shard.service';
import { AuthService } from 'src/app/services/auth.service';
declare var $:any;//for jquery
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isuser:boolean=false;
  first_term_courses:Material[]=[]
  second_term_courses:Material[]=[]


  constructor(private auth_Ser:AuthService, private store_service:CourseDataService, private dialog:MatDialog, private shard:ShardService) {
   }

  ngOnInit() {
    let section =this.shard.getsection();
    let level =this.shard.getlevel();
    let term =this.shard.getTerm();
      ////////////start slider
      $(function(){
        $('.carousel').carousel({
          interval: 8000
          })
      })
    //first term
       this.store_service.economic_levone_firTerm().subscribe(data =>{
        this.first_term_courses=data.map(ele=>{
          return{
            id:ele.payload.doc.id,
            Doctor:ele.payload.doc.data()['D_name'],
            date:ele.payload.doc.data()['date'],
            img_cover:ele.payload.doc.data()['photo'],
            subject:ele.payload.doc.data()['subject'],
            video_link:ele.payload.doc.data()['video_link'],
            section:ele.payload.doc.data()['title_one'],
            level:ele.payload.doc.data()['title_two'],
            term:ele.payload.doc.data()['title_three']
          }
        })
      });
    //second term
    this.store_service.economic_levone_secTerm().subscribe(data =>{
      this.second_term_courses=data.map(ele=>{
        return{
          id:ele.payload.doc.id,
          Doctor:ele.payload.doc.data()['D_name'],
          date:ele.payload.doc.data()['date'],
          img_cover:ele.payload.doc.data()['photo'],
          subject:ele.payload.doc.data()['subject'],
          video_link:ele.payload.doc.data()['video_link'],
          section:ele.payload.doc.data()['title_one'],
          level:ele.payload.doc.data()['title_two'],
          term:ele.payload.doc.data()['title_three']
        }
      })
    });

    /******************* start typeit ******/
      new TypeIt("#big_eco_one", {
        strings: "الفرقة الاولي ",
        speed:100,
        cursor: false,
      }).go();
      new TypeIt("#small_eco_one", {
        strings: " اقتصاد منزلي ",
        speed:100,
        cursor: false,
        startDelay: 1800
      }).go();
    /******************* end typeit ******/
     //show lessons 
     this.auth_Ser.authUser.subscribe(user =>{
      if(user){
        this.isuser=true;
        this.auth_Ser.userid=user.uid
      }else{
        this.isuser=false;
        this.auth_Ser.userid=''
      }
    })
  }



  showlesson(sub){
    this.shard.setlesson(sub)
    
      this.dialog.open(ShowLessonsComponent);
      const dil=new MatDialogConfig();
            dil.disableClose=true;
            dil.autoFocus=true;  
  }

  cardinfo(section,level,term,material,index){
    this.shard.setinfo(section.innerText,level.innerText, term.innerText, material,index) 
  }

  addlesson(){
    this.dialog.open(AddLessonComponent);
    const dil=new MatDialogConfig();
          dil.disableClose=true;
          dil.autoFocus=true;  
  }

  delate(){
    this.dialog.open(DelateCourseComponent);
    const dillogs=new MatDialogConfig();
    dillogs.disableClose=true;
    dillogs.autoFocus=true;  
    dillogs.hasBackdrop=false
  }

}
