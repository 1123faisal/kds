import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Kot } from '../models/kot';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

// sdfdsf

kotList:Kot[];
copyKotList:Kot[];
kotCreatedTimes=[];
kotTime=[];
interval:any;
getUpdatedKotList:any;

oldItemlength:number=0;
totalItemLength:number=0;
blinkKotCount:number=0;

pageSize = 10;
pageNumber = 1;
pageDate=[];


constructor(private authService:AuthService,private commonService:CommonService) { }

ngOnInit() {


  this.authService.getCompleteKotList().subscribe(rs=>{
   
    if(rs){

      this.kotList=rs;
      this.oldItemlength=this.kotList.length;
      this.totalItemLength=this.oldItemlength;

      for(let e of this.kotList){
        this.kotCreatedTimes.push(e.date);
        }

      this.commonService.completeKotListLengthEmit(this.oldItemlength);

      this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
      let i=0;
      this.copyKotList = this.copyKotList.map(item=>{ 
        let time=this.compareTime(item);
        this.kotTime[i]=time.date; i++;
        return time;            
      })

      this.pagination(this.copyKotList,this.pageSize,this.pageNumber);

      this.interval=setInterval(()=>{
        this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
       
        i=0;
        this.copyKotList = this.copyKotList.map(item=>{ 
         let time=this.compareTime(item);
          this.kotTime[i]=time.date; i++;
          return time;            
       })

       this.pagination(this.copyKotList,this.pageSize,this.pageNumber);

    },3000);

    }
   
  })

  this.getUpdatedKotList=setInterval(()=>{

    this.authService.getCompleteKotList().subscribe(rs=>{
      if(rs.length!=this.oldItemlength){
        console.log('new kot available')
        this.newKotAdd();
      }else{
        console.log('getupdatedkotList'); 
      }
    });

   },15000)

}

newKotAdd(){
  let arr=JSON.parse(JSON.stringify(this.kotList))
  
  for(let e of arr){
  this.kotList.push(e);
  }

  let arr1=JSON.parse(JSON.stringify(this.kotList))
  this.copyKotList=arr1;

  for(let e of this.kotList){
    this.kotCreatedTimes.push(e.date);
    }

  this.pagination(arr1,this.pageSize,this.pageNumber);

  this.commonService.remainingKotListLengthEmit(this.totalItemLength);
  this.totalItemLength=this.kotList.length;
  this.blinkKotCount=this.totalItemLength-this.oldItemlength;
  setTimeout(()=>{ this.oldItemlength=this.totalItemLength; this.blinkKotCount=0; },5000)
}

compareTime(item:Kot){
  let subsTime:string;
  let kotCreatedTime=new Date(item.date);
  let currentTime=new Date();
  let d= new Date();
  d.setTime(kotCreatedTime.getTime()- currentTime.getTime());
  subsTime =d.getHours() +":"+ (d.getMinutes().toString().length==1? "0"+d.getMinutes():d.getMinutes());
  item.date=subsTime;
  return item;  
}

prev(){
this.pageNumber==1? this.pageNumber:this.pageNumber--;
this.pagination(this.copyKotList,this.pageSize,this.pageNumber);
}

next(){
  let lastPage=Math.round((this.copyKotList.length/this.pageSize));
this.pageNumber==lastPage?this.pageNumber:this.pageNumber++;
this.pagination(this.copyKotList,this.pageSize,this.pageNumber);
}

pagination(arr, pageSize, pageNumber) {
    pageNumber--;
    this.pageDate = arr.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}




ngOnDestroy(){
  if(this.interval && this.getUpdatedKotList){
    clearInterval(this.interval);
    clearInterval(this.getUpdatedKotList);
  }
}



}
