import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';
declare var $:any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isuser:boolean=false;
  isadmin:boolean=false;
  constructor(private fire_stor:StorageService, private auth_Ser:AuthService, private shard:ShardService) {    console.log(this.isuser,this.isadmin); }
  ngOnInit(): void {
    /**** start is user  */
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
    /**** end  is user  **********/
      
     
        

      $(function(){
         $(window).scroll(function(){
            if($(window).scrollTop() > 10){
                $('nav').css('background','#222831');
                $('nav .list li .main_a').css('color','#fff');
                $('.mygumtree a').css({
                  'border':'1px solid #fff',
                  'color':'#fff',
                });
            }else{
                $('nav').css('background','#f3f3f3');
                $('nav .list li .main_a').css('color','#222');
                $('.mygumtree a').css({
                  'border':'1px solid #222831',
                  'color':'#00B0FF',
                });
            }
        });   

      $('.navbar-nav .nav-item a').on('click',function(){
        $('.navbar-nav .nav-item a').removeClass('active_a');
        $(this).addClass('active_a')
      });

      
        //اخفاء الناف بار مع الضغط
        //ul_one
        $('.nav-item .dropdown-menu .dropdown-item').on('click',function(){
          $(this).addClass('active_a');
          $('.collapse').collapse('hide');
          $('html,body').animate({
            scrollTop:0,
          })
        });
        
      $(document).on('click',function(){//to hide the humburger
        $('.collapse').collapse('hide');
     })
  });     
  
  };//end onint
  
 
 


    out(){
      this.auth_Ser.logout()
      alert('تم تسجيل الخروج ')
    }
    
    to_top(){
      $('html,body').animate({
        scrollTop:0,
      },400);
    }
}
