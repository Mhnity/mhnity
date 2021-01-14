import { Component, OnInit } from '@angular/core';
import { ShardService } from 'src/app/services/shard.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  client_project_name:string
  constructor(private shard:ShardService) { }

  ngOnInit(): void {
    this.client_project_name=this.shard.get_prject_name()
  }

}
