import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';

import {Task} from '../../../Task';
@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent { 
   tasks: Task[];
    title: string;
    showform:any;
    showlog: any;
    showtask:any;
     constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }
    // constructor(private taskService:TaskService){
    //     this.taskService.getTasks()
    //         .subscribe(registerregister => {
    //             this.register = register;
    //         });
    // }
    
  
  registerUser= function (username,firstname,lastname,email,pass) {
       var tasks={};
        this.taskService.registerUser(username,email,pass).subscribe(function (data) {
            console.log(data.username);
         tasks= data;
         if(data.username != "")
         {
            alert('user register successfully');
         }
       
        });
    }

    showLogin = function(){
             
            this.showform = false;
            this.showlog = true;
            this.showtask = false;

    }
 

   ngOnInit(): void{
    
   var chk= localStorage.getItem('userId');

   if(chk != null && chk != "" )
   {
    
     this.showform = false;
     this.showlog  = false;
     this.showtask =true;
   }
   else{
  
    this.showform = true;
     this.showlog = false;
     this.showtask = false;

   }
  }


   test = function(){
    
   var chk= localStorage.getItem('userId');

   if(chk != null && chk != "" )
   {
    
     this.showform = false;
     this.showlog  = false;
     this.showtask = true;
   }
   else{
  
    this.showform = true;
     this.showlog = false;
     this.showtask = false;

   }
  }

  
   logout()
    {
       
     localStorage.removeItem("userId");
     this.showform = true;
     this.showlog = false;
     this.showtask = false;
   
    }
 
    loginUser(username,password){
        console.log("sdfsdfsdfsd");
        this.taskService.loginUser(username,password).subscribe(function(data){
       // console.log(data);
       if(data._id != "" || data._id != null)
       {
        localStorage.setItem('userId', data._id);
        console.log(localStorage.getItem('userId'));
            this.showform = false;
            this.showlog = false;
            this.showtask = true;
            location.reload();
            // this.test();
    
       }
       else
       {
        alert("please enter the valid detail");
       }
      });
    }

}
