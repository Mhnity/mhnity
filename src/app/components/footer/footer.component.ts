import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  
        // start scroll to top  
        $(window).on('scroll',function(){
          if($(this).scrollTop()>3000){
              $('.scroll_top').fadeIn(1000);
          }else{
              $('.scroll_top').fadeOut(1000);
          }
      });
      $(".scroll_top").on('click',function(){
          $('html,body').animate({
              scrollTop:0
          },2000)
      });
      // end scroll to top  
  }

}
