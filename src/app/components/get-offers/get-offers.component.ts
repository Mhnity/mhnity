import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Offer } from 'src/app/interfaces/offer';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';
import { DelateOfferComponent } from '../courses/delate-offer/delate-offer.component';


@Component({
  selector: 'app-get-offers',
  templateUrl: './get-offers.component.html',
  styleUrls: ['./get-offers.component.scss']
})
export class GetOffersComponent implements OnInit {
  offers:Offer[]=[]
  constructor(private fire_store:StorageService, private shard:ShardService, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.fire_store.getoffer().subscribe(data=>{
         this.offers=data.map(ele=>{
           return{
             id:ele.payload.doc.id,
             name:ele.payload.doc.data()['name'],
             gov:ele.payload.doc.data()['gov'],
             sec:ele.payload.doc.data()['sec'],
             address:ele.payload.doc.data()['address'],
             times:ele.payload.doc.data()['times'],
             phone:ele.payload.doc.data()['mobile'],
             offer:ele.payload.doc.data()['offers'],
             img:ele.payload.doc.data()['photo'],
             email:ele.payload.doc.data()['email']
           }
         })
    })
   
  }
 

  sendname(name){
    this.shard.setoffer(name.innerText)
  }

  delate(){  
    this.dialog.open(DelateOfferComponent);
    const dillogs=new MatDialogConfig();
    dillogs.disableClose=true;
    dillogs.autoFocus=true;  
    dillogs.hasBackdrop=false
  }
  
}
