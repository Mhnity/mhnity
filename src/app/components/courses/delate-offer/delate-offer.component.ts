import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delate-offer',
  templateUrl: './delate-offer.component.html',
  styleUrls: ['./delate-offer.component.scss']
})
export class DelateOfferComponent implements OnInit {
  offername:string
  constructor(private shard:ShardService, private storage_ser:StorageService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.offername=this.shard.getoffer();
    }
  
  delate(){//get from shard service
    this.storage_ser.delateoffer(this.offername);
    this.dialog.closeAll()
  }
 
  cancel(){
      this.dialog.closeAll()
  }

}
