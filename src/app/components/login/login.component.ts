import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { ShardService } from 'src/app/services/shard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errmsg:string=''
  constructor(private auth_ser:AuthService, private rout:Router, private shard:ShardService, private ngZone:NgZone) { }

  ngOnInit(): void {
  }
   
  login(form){
    let data:Users=form.value;
    this.auth_ser.login(data.email, data.password)
    .then((result)=>{
      if(result.user.emailVerified !== true){//التسجيل تاني مره لو مش اكد حسابه مش هيروح 
        this.auth_ser.SendVerificationMail()
        window.alert('رجاء قم بتاكيد بريدك الالكتروني اولا!');
        this.rout.navigate(['/login']);
      }else{
        this.ngZone.run(() => {
          this.rout.navigate(['']);
        })
      }
    })
    .catch(err => this.errmsg=err)
  }
}
