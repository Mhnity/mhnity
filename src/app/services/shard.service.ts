import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShardService {
 
 sub:string;

 lesson:string;//for lesson popup
 delatecourse:string;//for delate course 

 section:string;
 level:string;
 term:string;
 material:string;
 index:number;

 
 week:string;//week name for delate lesson
 lesson_name:string; //lesson name for delate lesson

 isuser:boolean=false;
 isadmin:boolean=false;

 //set offer
 offer:string;

 //clint project name
 project_name:string


  constructor() { }

 setlesson(sub){
  this.lesson=sub
}
getlesson(){
  return this.lesson
}




setinfo(section,level,term,material,index){
  this.section=section;
  this.level=level;
  this.term=term;
  this.material=material;
  this.index=index;
 }
 getinfo(){//تجارب
   return{
     section:this.section,
     level:this.level,
   }
 }
 getsection(){
   return this.section;
 }
 getlevel(){
   return this.level;
 }
 getTerm(){
  return this.term
  }
  getMaterial(){
    return this.material
  }
  getindex(){
    return this.index
  }

 

  setweek_lesson_name(week,lesson_name){
    this.week=week;
    this.lesson_name=lesson_name
  }
  getweek(){
    return this.week
  }
  get_lesson_name(){
    return this.lesson_name
  }





  
  getisuser(){
    return this.isuser 
  }
  getisadimin(){
    return this.isadmin
  }


  
  //set offer name
 setoffer(name){
  this.offer=name
  }
  getoffer(){
    return this.offer
  }

  //set get client project name
  set_prject_name(name){
    this.project_name=name
  }
  
  get_prject_name(){
    return this.project_name
  }
}
