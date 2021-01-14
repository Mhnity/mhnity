import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { toUnicode } from 'punycode';
import { AuthService } from './auth.service';
import { ShardService } from './shard.service';

@Injectable({
  providedIn: 'root'
})
export class IsuserService {
  isuser:boolean=false;
  isadmin:boolean=false;
  constructor(private fir_sotre:AngularFirestore, private auth:AuthService, private shard:ShardService) { }
   
  ngOnInit(){
   this.auth.authUser.subscribe(user=>{
     if(user){
      this.isuser=true;
      this.auth.userid=user.uid;
      this.userdata().subscribe(data=>{
        if(data['admin']){
          this.isadmin=true
        }
      })
     }else{
        this.isuser=false;
        this.isadmin=false;
        this.auth.userid=""
     }
   })
     ////set is user and admin
     this.shard.setisuser(this.isuser,this.isadmin)
  }

 



}
