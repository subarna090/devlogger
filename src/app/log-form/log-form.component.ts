import { Component, OnInit } from '@angular/core';
import { log } from '../log';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
     id:string;
     text:string;
     date:any;
     isNew:boolean=true;
  constructor(private logservice:LogService) { }


  ngOnInit() {
    this.logservice.selectedLog.subscribe(log=>{
          if(log.id!==null){
            this.isNew=false;
            this.id=log.id;
            this.text=log.text;
            this.date=log.date;
          }
    })
  }

  onSubmit(log:log){
     //Check new log
      if(this.isNew){
        //create new log
         const newlog={
            id:this.generateId(),
            text:this.text,
            date:new Date()
         }
         this.logservice.addNewLog(newlog);
      }
      else{
        //update log
        const updlog={
          id:this.id,
          text:this.text,
          date:new Date()
        }
        this.logservice.updateLog(updlog);
      }
    
      //Clear the state
      this.clearState();

  }

  clearState(){
      this.isNew=true;
      this.id="";
      this.text="";
      this.date="";
      this.logservice.clearState(); 
  }
  generateId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
