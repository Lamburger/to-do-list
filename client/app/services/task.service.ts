import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getTasks(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var uid = localStorage.getItem('userId');

        //var newTask ={"user_id":uid};

        return this.http.get('/api/tasks/'+uid)
            .map(res => res.json());
    }
    
    addTask(newTask){
        console.log(newTask.isDone);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var uid = localStorage.getItem('userId');
        newTask ={"user_id":uid,"title":newTask.title,"isDone":newTask.isDone};
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTask(id){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }
    
    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
  loginUser(usr,pass){
  var headers = new Headers();
  var data={"usr":usr,"pass":pass};
        headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
  }

  registerUser=function (username,email,pass) {
   var headers = new Headers();
   var data={"username":username,"pass":pass,"email":email};
        headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/register', JSON.stringify(data), { headers: headers })
            .map(function (res) { return res.json(); });
    };

}

