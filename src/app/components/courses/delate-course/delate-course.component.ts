import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delate-course',
  templateUrl: './delate-course.component.html',
  styleUrls: ['./delate-course.component.scss']
})
export class DelateCourseComponent implements OnInit {
  section:string;
  level:string;
  term:string;
  material:string;

  constructor(private storage_ser:StorageService, private shard:ShardService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.section=this.shard.getsection();
    this.level=this.shard.getlevel();
    this.term=this.shard.getTerm();
    this.material=this.shard.getMaterial();
  }
  
  delate(){//get from shard service
    this.storage_ser.delatecours(this.section,this.level,this.term,this.material);
    this.dialog.closeAll()
  }
 
  cancel(){
      this.dialog.closeAll()
  }

}
