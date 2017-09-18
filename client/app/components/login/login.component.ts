import { Component} from '@angular/core';
import { Router }  from '@angular/router';  
//import {RegisterComponent} from '../register/register.component';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';



@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent { 
  // @ViewChild(RegisterComponent) regist: RegisterComponent;
   tasks: Task[];
    title: string;
   


     constructor(private taskService:TaskService,private router: Router){
        this.taskService.getTasks()
            .subscribe(tasks => {

                this.tasks = tasks;

            });
    }
    loginUser(username,password){
        
        this.taskService.loginUser(username,password).subscribe(function(data){
       // console.log(data);
       if(data._id != "" || data._id != null)
       {
        localStorage.setItem('userId', data._id);
       console.log(localStorage.getItem('userId'));
        this.router.navigate(['/Register']);
    
       }
       else
       {
        alert("please enter the valid detail");
       }
      });
    }

  
}