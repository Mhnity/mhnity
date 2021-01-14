import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private angular_store:AngularFirestore) { }

   /**************** sart show lessons */
  show_lessons(section,level,term,sub){//lessons
    return this.angular_store.collection(section+'/'+level+'/'+term+'/'+sub+'/'+'محاضرات').snapshotChanges();
  }  
  /******************* end show lessons **/


 /********************************** sart get courses data **/
  ////start computer 
        computer_levone_firTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        computer_levone_secTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }

        //two
        computer_levtwo_firTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        computer_levtwo_secTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
   
  
        //three
        computer_levthree_firTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        computer_levthree_secTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
      
        //four
        computer_levfour_firTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        computer_levfour_secTerm(){
          return this.angular_store.collection('/الحاسب الالي/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
     
  ////end computer 

  ////start technology 
        tech_levone_firTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        tech_levone_secTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        tech_levtwo_firTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        tech_levtwo_secTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        tech_levthree_firTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        tech_levthree_secTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        tech_levfour_firTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        tech_levfour_secTerm(){
          return this.angular_store.collection('/التكنولوجيا/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end technology 

  ////start music 
        music_levone_firTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        music_levone_secTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        music_levtwo_firTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        music_levtwo_secTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        music_levthree_firTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        music_levthree_secTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        music_levfour_firTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        music_levfour_secTerm(){
          return this.angular_store.collection('/موسيقي/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end music 


  ////start Arts 
        art_levone_firTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        art_levone_secTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        art_levtwo_firTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        art_levtwo_secTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        art_levthree_firTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        art_levthree_secTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        art_levfour_firTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        art_levfour_secTerm(){
          return this.angular_store.collection('/فنية/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end Arts 

  ////start economic 
        economic_levone_firTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        economic_levone_secTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        economic_levtwo_firTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        economic_levtwo_secTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        economic_levthree_firTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        economic_levthree_secTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        economic_levfour_firTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        economic_levfour_secTerm(){
          return this.angular_store.collection('/اقتصاد منزلي/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end computer 


  ////start media 
        media_levone_firTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        media_levone_secTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        media_levtwo_firTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        media_levtwo_secTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        media_levthree_firTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        media_levthree_secTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        media_levfour_firTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        media_levfour_secTerm(){
          return this.angular_store.collection('/اعلام تربوي/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end media 

  ////start stage 
        stage_levone_firTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الاولي/'+'الترم الاول').snapshotChanges();
        }
        stage_levone_secTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الاولي/'+'الترم الثاني').snapshotChanges();
        }
        //two
        stage_levtwo_firTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الثانية/'+'الترم الاول').snapshotChanges();
        }
        stage_levtwo_secTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الثانية/'+'الترم الثاني').snapshotChanges();
        }
        //three
        stage_levthree_firTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الثالثة/'+'الترم الاول').snapshotChanges();
        }
        stage_levthree_secTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الثالثة/'+'الترم الثاني').snapshotChanges();
        }
        //four
        stage_levfour_firTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الرابعة/'+'الترم الاول').snapshotChanges();
        }
        stage_levfour_secTerm(){
          return this.angular_store.collection('/مسرح/'+'الفرقة الرابعة/'+'الترم الثاني').snapshotChanges();
        }
  ////end stage 
/*************************************sart get courses data **/
  
}
