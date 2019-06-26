import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-total-ord',
  templateUrl: './total-ord.component.html',
  styleUrls: ['./total-ord.component.css']
})
export class TotalOrdComponent implements OnInit {

  completeKotListLength:number=0;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.completeKotListLengthEmit(this.completeKotListLength)
  }

}
