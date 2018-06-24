import { Injectable } from '@angular/core';
import { log } from './log';
import { Observable, of, BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logSourcee=new BehaviorSubject<log>({id:null,text:null,date:null});
  selectedLog=this.logSourcee.asObservable();

  private stateSource=new BehaviorSubject<boolean>(true);
  stateClear=this.stateSource.asObservable();

  logs:log[];
  constructor() { 
   this.logs=[
    //  {id:'1',text:"First Log",date:new Date()},
    //  {id:'2',text:"Second Log",date:new Date()},
    //  {id:'3',text:"Third Log",date:new Date()}
   ]
   
  }
  getLogs():Observable<log[]>{
    this.logs=JSON.parse(localStorage.getItem('logs'));
    return of(this.logs);
  }
  
  setFormLog(log:log){
      this.logSourcee.next(log);
  }
  
  addNewLog(log){
    this.logs.unshift(log);
    //add to local storage
      localStorage.setItem('logs', JSON.stringify(this.logs))
    }

   updateLog(log){
      this.logs.forEach((cur,index)=>{
           if(log.id==cur.id){
             this.logs.splice(index,1);
           }
      })
      this.logs.unshift(log); 
      //update to local storage
      localStorage.setItem('logs', JSON.stringify(this.logs))
   } 

   deleteLog(log:log){
      this.logs.forEach((cur,index)=>{
         if(log.id==cur.id){
           this.logs.splice(index,1);
         }
      });
      //delete from local storage
   localStorage.setItem('logs', JSON.stringify(this.logs))
   }

    clearState(){
      this.stateSource.next(true);
    }
   
  }

