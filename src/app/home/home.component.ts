import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

remainingKotListLength:number=0;
totalKotListLength:number=0;
completeKotListLength:number=0;

  constructor(private CommonService:CommonService) { }

  ngOnInit() {
    this.CommonService.getUpdatedcompleteKotListLength().subscribe(length=>this.completeKotListLength=length);
    this.CommonService.getUpdatedremainingKotListLength().subscribe(length=>this.remainingKotListLength=length);
    this.CommonService.getUpdatedtotalKotListLength().subscribe(length=>this.totalKotListLength=length);
  }

}
