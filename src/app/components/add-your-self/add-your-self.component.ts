import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';




@Component({
  selector: 'app-add-your-self',
  templateUrl: './add-your-self.component.html',
  styleUrls: ['./add-your-self.component.scss']
})
export class AddYourSelfComponent implements OnInit {
  @ViewChild('img')offer_img:ElementRef;
  show:boolean=false;
  error_msg:string;
  data:string[]=[];
  data2:string[]=[]
  constructor(private store_service:StorageService, private rout:Router, private shard:ShardService, private api:ApiService) { }

  ngOnInit(): void {
     this.data=this.api.Gover_name;
     this.data2=this.api.sec_gov_name
  }



  addOffer(form:NgForm){  /*gov,sec*/
    this.show=true;
    let name=(form.value).name,
        gov=(form.value).Gov,       /*gov.angularValue,*/ 
        sec=(form.value).Sec,
        address=(form.value).address,
        times=(form.value).times,
        mobile=(form.value).mobile,
        offers=(form.value).offers,
        email=(form.value).email,
        offer_img=(<HTMLInputElement>this.offer_img.nativeElement).files[0];
        this.store_service.addoffer(name,gov,sec,address,times,mobile,offers,email,offer_img).then(()=>{
          this.rout.navigate(['/follow']).then(()=>alert(  'مرحبا'+ '  ' + `${name}` + '  ' + "تم ارسال بياناتك بنجاح وسيتم عرضها  حين الانتهاء من التعديلات \شكرا لك ")).catch(err=>this.error_msg=err)
        });
        this.shard.set_prject_name(name)
  }

}
