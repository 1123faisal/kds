import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

remainingKotListLength=new Subject<number>();
totalKotListLength=new Subject<number>();
completeKotListLength=new Subject<number>();

constructor() { }


remainingKotListLengthEmit(length:number){
  this.remainingKotListLength.next(length);
}

totalKotListLengthEmit(length:number){
  this.totalKotListLength.next(length);
}

completeKotListLengthEmit(length:number){
  this.completeKotListLength.next(length);
}

getUpdatedtotalKotListLength(){
  return this.totalKotListLength.asObservable();
}

getUpdatedremainingKotListLength(){
  return this.remainingKotListLength.asObservable();
}

getUpdatedcompleteKotListLength(){
  return this.completeKotListLength.asObservable();
}

  
}
