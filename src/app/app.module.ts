import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogFormComponent } from './log-form/log-form.component';
import { LogsComponent } from './logs/logs.component';
import { LogService } from './log.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
