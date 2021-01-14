import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resourceUsage } from 'process';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  errmsg:string=''
  constructor(private auth_ser:AuthService, private storage_ser:StorageService, private rout:Router) { }

  ngOnInit(): void {
  }
  
  signup(form){
    let data:Users=form.value;
    this.auth_ser.signup(data.email, data.password)
    .then(result =>{
      this.storage_ser.adduser(result.user.uid,data.name,data.password);
      this.auth_ser.SendVerificationMail()
      this.rout.navigate(['']).then(()=> alert('تم انشاء الحساب بنجاح اذهب الي بريدك لتاكيد حسابك'))
    }).catch(err => this.errmsg=err)
   
  }
}
