import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ShardService } from 'src/app/services/shard.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {
  material:string
  constructor(private ser_store:StorageService, private shard:ShardService, private daialog:MatDialog) { }


  ngOnInit(): void {
    this.material=this.shard.getMaterial()
  }
  add(form){
    let index=this.shard.getindex();
    let subject=this.shard.getMaterial();
    let term=this.shard.getTerm();
    let level=this.shard.getlevel();
    let section=this.shard.getsection();
    let week=(form.value).week;
    let name=(form.value).name;
    let link=(form.value).link;
  this.ser_store.addlesson(index,subject,week,name,link,term,level,section).then(msg => alert(msg)).then(()=> this.daialog.closeAll());
  }

  cancel(){
    this.daialog.closeAll()
  }


}
