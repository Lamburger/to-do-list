import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TaskService} from './services/task.service';
import {TasksComponent} from './components/tasks/tasks.component';
import {RegisterComponent} from './components/register/register.component';



@NgModule({
  imports:[ BrowserModule, HttpModule, FormsModule],
  
  declarations: [AppComponent, TasksComponent,RegisterComponent],
  
  
  

  bootstrap: [AppComponent]

})


export class AppModule { }
