import { Component, OnInit, OnDestroy } from '@angular/core';
import { Kot } from '../models/kot';
import { CommonService } from '../service/common.service';
import { AuthService } from '../service/auth.service';
import { TempService } from './temp.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit,OnDestroy {

  kotList:Kot[];
  copyKotList:Kot[];
  kotCreatedTimes=[];
  kotTime=[];
  interval:any;
  lastPage:number;
  getUpdatedKotListInterval:any;

  oldItemlength:number=0;
  totalItemLength:number=0;
  blinkKotCount:number=0;

  pageSize = 10;
  pageNumber = 1;
  pageDate=[];
  kotStatus=0;

  
  
  constructor(private authService:AuthService,private commonService:CommonService,private serTem:TempService) { }

  ngOnInit() {
   
    // this.authService.getPandingKotList().subscribe(rs=>{
      // if(rs){
     
        this.kotList=this.serTem.getList();
        console.log(this.kotList)
        this.oldItemlength=this.kotList.length;
        this.totalItemLength=this.oldItemlength;
        this.lastPage=this.kotList.length<11? 1:0;
        
        this.getKotCreatedTimes();
  
        this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
        let i=0;
        this.copyKotList = this.copyKotList.map(item=>{ 
          let time=this.compareTime(item);
          this.kotTime[i]=time.date; i++;
          return time;            
        })

        this.pagination(this.copyKotList,this.pageSize,this.pageNumber);

        this.changeTimeEverySecond()  
      // }
     
    // })

  //  this.getNewKotsAfter15Sec();

  this.addtempItem();

  }

  addtempItem(){
    this.getUpdatedKotListInterval=setInterval(()=>{
      let data=this.serTem.gettempData();

    },20000)
  }

  changeTimeEverySecond(){

  this.interval=setInterval(()=>{
  this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
   
   let i=0;
    this.copyKotList = this.copyKotList.map(item=>{ 
     let time=this.compareTime(item);
      this.kotTime[i]=time.date; i++;
      return time;            
   })

   },1000);

}

compareTime(item:Kot){
  let subsTime:string;
  let kotCreatedTime=new Date(item.date);
  let currentTime=new Date();
  let d= new Date();
  d.setTime(currentTime.getTime()- kotCreatedTime.getTime());
  subsTime =(d.getHours().toString().length==1? "0"+d.getHours():d.getHours())  +":"+ (d.getMinutes().toString().length==1? "0"+d.getMinutes():d.getMinutes()) +":"+ (d.getSeconds().toString().length==1? "0"+d.getSeconds():d.getSeconds());
  item.date=subsTime;
  return item;  
}

getKotCreatedTimes(){
  for(let e of this.kotList){
    this.kotCreatedTimes.push(e.date);
    }
  this.commonService.remainingKotListLengthEmit(this.oldItemlength);
}


getNewKotsAfter15Sec(){
  this.getUpdatedKotListInterval=setInterval(()=>{

    this.authService.getPandingKotList().subscribe(rs=>{
      if(rs.length!=this.oldItemlength){
        console.log('new kot available')
        this.newKotAdd(rs);
      }else{
        console.log('getupdatedkotListInterval'); 
      }
    });

   },15000)
}


newKotAdd(newKotList:Kot[]){

    for(let i=0;i<newKotList.length;i++){
      if(this.oldItemlength<i){
        this.kotList.push(newKotList[i]);
      }
      this.kotCreatedTimes.push(newKotList[i].date);
    }

    this.copyKotList=JSON.parse(JSON.stringify(this.kotList))

    this.pagination(this.copyKotList,this.pageSize,this.pageNumber);

    this.commonService.remainingKotListLengthEmit(this.totalItemLength);
    this.totalItemLength=this.kotList.length;
    this.blinkKotCount=this.totalItemLength-this.oldItemlength;
    setTimeout(()=>{ this.oldItemlength=this.totalItemLength; this.blinkKotCount=0; },5000)
}
  

  prev(){
  this.pageNumber==1? this.pageNumber:this.pageNumber--;
  this.pagination(this.copyKotList,this.pageSize,this.pageNumber);
  }

  next(){
    this.setLastPage();
  this.pageNumber==this.lastPage?this.pageNumber:this.pageNumber++;
  this.pagination(this.copyKotList,this.pageSize,this.pageNumber);
  }

  setLastPage(){
    let rem=this.copyKotList.length%this.pageSize;
    console.log('rem '+rem)
    this.lastPage=Math.round((this.copyKotList.length/this.pageSize));
    this.lastPage=this.lastPage<rem? this.lastPage+1:this.lastPage;
  }

  pagination(arr, pageSize, pageNumber) {
      pageNumber--;
      this.pageDate = arr.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

  clickForChangeKotStatus(i,index,kotItemIndex,kotId,Status){
    // this.authService.clickForChangeKotItemStatus(kotId,Status).subscribe(rs=>{

    for(let e of this.kotList){
      if(e.billId==index){
      e.kotItem[kotItemIndex].status=e.kotItem[kotItemIndex].status=="C"? "P":"C";
      } 
    }

    let countKot=this.kotList[i].kotItem.length;
    let count=0;
    this.kotList[i].kotItem.filter(item=>{ 
      item.status=="P" ? count++:count;
     })

     if(countKot==count){
        this.kotList.splice(i,1);
     }

    this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
    console.log(this.pageNumber)
    console.log(this.lastPage)
    this.setLastPage();
    this.pagination(this.copyKotList, this.pageSize, this.pageNumber) 
    // },err=>{ alert('Server Error');    })
  }


  ngOnDestroy(){
    if(this.interval && this.getUpdatedKotListInterval){
      clearInterval(this.interval);
      clearInterval(this.getUpdatedKotListInterval);
    }
  }


}

