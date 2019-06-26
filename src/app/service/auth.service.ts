import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
  }),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient,private router:Router) { }

  login(data:any){
    this.http.post<any>(this.apiUrl+"/authenticate",data,httpOptions).subscribe(rs=>{
      console.log(rs);
      this.router.navigate(['/kot'])
    })
  }
  // /kotItem/{kotItemId}/{itemStatus}
  getLocation(){
    return this.http.get<any[]>(this.apiUrl+'/eh4u/location/loadLocationList');
  }

  getPandingKotList(){
   return this.http.get<any>(this.apiUrl+'/eh4u/kot/?itemStatus=P',{withCredentials:true});
  }

  getCompleteKotList(){
    return this.http.get<any>(this.apiUrl+'/eh4u/kot/?itemStatus=C',{withCredentials:true});
  }

  clickForChangeKotItemStatus(kotId,status){
    return this.http.put<any>(this.apiUrl+'/eh4u/kotItem/'+kotId+'/'+status+'',{},httpOptions);
  }


}


