import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';

declare var $:any;

@Component({
  selector: 'app-admain',
  templateUrl: './admain.component.html',
  styleUrls: ['./admain.component.scss']
})
export class AdmainComponent implements OnInit {
   @ViewChild ('img')myimg:ElementRef;
   @ViewChild ('title_one') title_one:ElementRef
   @ViewChild ('title_two') title_two:ElementRef
   @ViewChild ('title_three') title_three:ElementRef
   subjectname:string;
  constructor(private courses_Ser:StorageService,private shard:ShardService) { }
   
  ngOnInit(): void {
    $(function(){
     /************************************ START ADD TEXT   *******************/
     //لازم يشيل التلت كلاسس بتوع الاخفاء مع كل ضغطة عشان يظهر
      $('.menus .menu .sec').on('click',function(){ //one
         $('.cours_title .title_one').text($(this).text());
      });

      $('.inside_ul .inside_li .inside_sec').on('click',function(){ //two
        $('.cours_title .title_two').text($(this).text());
       
      });

      $('.inside_ul .inside_li ul li').on('click',function(){ //three
        $('.cours_title .title_three').text($(this).text());
      
      });
      /************************************ END ADD TEXT  *******************/



            $('aside .menus .menu h2 .sec').on('click',function(){
              $('aside .menus .menu h2 .sec').removeClass('active');
              $(this).addClass('active');
              $('.inside_ul').removeClass('show_when_click');
              $('aside .menus .menu ul').removeClass('show');
                $(this).parent('h2').next('ul').addClass('show');
                  //arrow
                  $(this).next('.icons').addClass('ds_block')
                  $(this).siblings('.icons').children('.up').fadeIn(1000)
                  $(this).parent('h2').parent('.menu').siblings('.menu').children('h2').children('.icons').children('.up').fadeOut(500);
            });

            // inside 
            $('.inside_sec').on('click',function(){
              $('.inside_sec').removeClass('active');
              $(this).addClass('active');
              $(this).parent('.inside_li').parent('.inside_ul').addClass('show_when_click')
              $('.inside_ul .inside_li ul').removeClass('show_inside')
              $(this).next('ul').addClass('show_inside')
            })
            // small li
            $('.inside_li ul li').on('click',function(){
              $('.inside_li ul li').removeClass('active');
              $(this).addClass('active');
            })

            // up arrow
            $('aside .menus .menu h2 .icons .up').on('click',function(){
              $('.popup .menus .menu ul').removeClass('show')
                $(this).parent('.icons').parent('h2').next('ul').removeClass('show');
                $(this).parent('.icons').parent('h2').next('ul').removeClass('show_when_click');
                $(this).fadeOut(1000);
            });
        /************************************ end dash *******************/
    })
  }
  
/************************************ start form  *******************/
  addcourse(form:NgForm){
    //titel
    let title_one=this.title_one.nativeElement.innerText,
        title_two=this.title_two.nativeElement.innerText,
        title_three=this.title_three.nativeElement.innerText;

  

    //form value
    let name=(form.value).name, 
        subject=(form.value).subject,
        date=(form.value).date,
        img=(<HTMLInputElement>this.myimg.nativeElement).files[0];
    this.courses_Ser.addcourse(title_one,title_two,title_three,name,subject,date,img)
    .then(msg=> alert(msg)).then(()=> form.reset());
  }
/************************************ end form  *******************/

}
