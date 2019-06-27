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

   this.getNewKotsAfter15Sec();

  }

  getNewKotsAfter15Sec(){

    this.getUpdatedKotListInterval=setInterval(()=>{
    let newList:Kot[]=JSON.parse(JSON.stringify(this.serTem.gettempData()));
    let addedNewKot=false;
     
    for(let newItem of newList){
      let exist=false;
      for(let oldItem of this.kotList){
        if(oldItem.billId==newItem.billId){
          exist=true;
          break;
        }
      }
      if(!exist){
        this.kotList.push(newItem);
        addedNewKot=true;
      }
    }

    if(addedNewKot){
      alert('added');
      this.playSound();
      this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
      this.setLastPage();
      this.pagination(this.copyKotList, this.pageSize, this.pageNumber) 
    }
     
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
  subsTime =(d.getMinutes().toString().length==1? "0"+d.getMinutes():d.getMinutes()) +":"+ (d.getSeconds().toString().length==1? "0"+d.getSeconds():d.getSeconds());
  item.date=subsTime;
  return item;  
}

getKotCreatedTimes(){
  for(let e of this.kotList){
    this.kotCreatedTimes.push(e.date);
    }
  this.commonService.remainingKotListLengthEmit(this.oldItemlength);
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
    let ans=parseInt((this.copyKotList.length/this.pageSize).toFixed(0));
    let rem=(this.copyKotList.length/this.pageSize);
    ans<rem? ans++:ans;
    this.lastPage=Math.round((this.copyKotList.length/this.pageSize));
    this.lastPage=this.lastPage<ans? this.lastPage+1:this.lastPage;
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
    this.kotList.filter(item1=>{ if(item1.billId==index){
         item1.kotItem.filter(item=>{ 
          item.status=="P" ? count++:count;
         })
       } 
    })
   

     if(countKot==count){
        this.kotList.splice(this.kotList.findIndex(item=>item.billId==index),1);
     }

    this.copyKotList=JSON.parse(JSON.stringify(this.kotList));
    this.setLastPage();
    this.pagination(this.copyKotList, this.pageSize, this.pageNumber) 
    // },err=>{ alert('Server Error');    })
  }

  playSound(){
    let audio=new Audio();
    audio.src="../../assets/ring1.mp3";
    audio.play();
  }

  ngOnDestroy(){
    if(this.interval && this.getUpdatedKotListInterval){
      clearInterval(this.interval);
      clearInterval(this.getUpdatedKotListInterval);
    }
  }


}

