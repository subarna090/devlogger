import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { log } from '../log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs:log[];
  selectedLog:log;
  constructor(private logservice:LogService) { }

  ngOnInit() { 
    this.logservice.stateClear.subscribe(clear=>
    {
      if(clear){
        this.selectedLog={id:'',text:'',date:''}
      }
    }) 
    this.logservice.getLogs().subscribe(logs=>{
      this.logs=logs;
    })
  }
  
  onSelect(log){
      this.logservice.setFormLog(log);
      this.selectedLog=log;
  }

  deleteLog(log){
    if(confirm("Are you sure?")){
      this.logservice.deleteLog(log);
    }
    
  }
}

