import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/interfaces/material';
import { StorageService } from 'src/app/services/storage.service';
import Typed from 'typed.js';
declare var $:any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private corses_ser:StorageService) {}

    ngOnInit(): void {
  /************** start typeit   *******************
        const options = {
            strings: ['سوقلي في تمي  '],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: true,
            cursorChar: '|',
            loop:false
       };
       const typed = new Typed('.typed', options);
  ************** end typeit  *******************/
    }
}
