import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShardService } from 'src/app/services/shard.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-delate-lesson',
  templateUrl: './delate-lesson.component.html',
  styleUrls: ['./delate-lesson.component.scss']
})
export class DelateLessonComponent implements OnInit {

  lesson_name:string
  constructor(private dialog:MatDialog, private storge_ser:StorageService, private shard:ShardService) { }

  ngOnInit(): void {
   this.lesson_name=this.shard.get_lesson_name()
  }
  
  
  cancel(){
    this.dialog.closeAll()
  }

  delate(){
    this.storge_ser.delatelesson(this.shard.getlesson(), this.shard.getweek(), this.shard.getTerm(), this.shard.getlevel(), this.shard.getsection());
    this.dialog.closeAll()
  }

}
