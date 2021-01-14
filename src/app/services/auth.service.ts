import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userid='';
  authUser:Observable<any>
  constructor(private fir_Stor:AngularFirestore, private angular_auth:AngularFireAuth) { 
          this.authUser=angular_auth.user
  }

  signup(email,password){
    return this.angular_auth.createUserWithEmailAndPassword(email,password);
  }
  
  
  async SendVerificationMail() {
    (await this.angular_auth.currentUser).sendEmailVerification().then(() => {
        console.log('email sent');
    });
  }

  login(mail,password){
    return this.angular_auth.signInWithEmailAndPassword(mail,password)
  }
  
  logout(){
    return this.angular_auth.signOut()
  }

 
  
}
