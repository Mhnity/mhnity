import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import { ShardService } from './shard.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private angular_store:AngularFirestore, private angular_storage:AngularFireStorage, private auth:AuthService, private shard:ShardService) { }
  
  addcourse(title_one:string, title_two:string, title_three:string, D_name:string, subject:string,  date:Date, img:File){
    return new Promise((resolv,rejec)=>{
      let ref=this.angular_storage.ref('courses/'+img.name);
      ref.put(img).then(()=>{
          ref.getDownloadURL().subscribe(photo =>{
            this.angular_store.doc(`${title_one}/`+`${title_two}/`+ `${title_three}/`+ subject).set({
             subject,
              D_name,
              date,
              photo,
              title_one,
              title_two,
              title_three,
            }).then(()=>resolv('تم اضافة الماده بنجاح !'))
          })
      })
    })
 
 }

 addlesson(index:number, subject:string, week:string, lessonname:string, link:number,term:string, level:string, section:string){
    return new Promise((res,rejec)=>{
      this.angular_store.doc(section+'/'+level+'/'+term+'/'+subject+'/'+'محاضرات'+'/'+lessonname).set({
        index, 
        lessonname, 
        link,
        week,
        subject
      }).then(()=>res('تم اضافة المحاضره بنجاح !'))
    })
 }


  adduser(id,name,password){
    this.angular_store.doc('UsersData/'+id).set({
      name,
      password
    })
  }

  //add offer
  addoffer(name:string,gov:string,sec:string,address:string,times:string,mobile:string,offers:string,email:string,img:File){
        return new Promise ((resolv,reject)=>{
           let ref=this.angular_storage.ref('offers_imgs/'+img.name);
               ref.put(img).then(()=>{
                 ref.getDownloadURL().subscribe(photo=>{
                    this.angular_store.doc('clints'+'/'+name).set({
                      name,
                      gov,
                      sec,
                      address,
                      times,
                      mobile,
                      offers,
                      email,
                      photo
                    }).then(()=>resolv('تم الاضافة بنجاح وفي انتظار موافقة المسؤل شكرا'))
                 })
               })
        })
      }
  //get offer
  getoffer(){
    return this.angular_store.collection('clints').snapshotChanges();//لازم عشان هتتغير
  }
  delateoffer(name){
    return this.angular_store.doc('clints'+'/'+name).delete()
  }
  ////////is user and is adimin
  userdata(){
    return this.angular_store.doc('UsersData/'+this.auth.userid).valueChanges();
  }

  delatecours(section,level,term,course){
    return this.angular_store.doc(section+'/'+level+'/'+term+'/'+course).delete();
  }

 

  delatelesson(course,week,term,level,section){
    return this.angular_store.doc(section+'/'+level+'/'+term+'/'+course+'/'+'محاضرات'+'/'+week).delete()
  }
}
