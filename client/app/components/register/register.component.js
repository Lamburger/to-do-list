"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_service_1 = require('../../services/task.service');
var RegisterComponent = (function () {
    function RegisterComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        // constructor(private taskService:TaskService){
        //     this.taskService.getTasks()
        //         .subscribe(registerregister => {
        //             this.register = register;
        //         });
        // }
        this.registerUser = function (username, firstname, lastname, email, pass) {
            var tasks = {};
            this.taskService.registerUser(username, email, pass).subscribe(function (data) {
                console.log(data.username);
                tasks = data;
                if (data.username != "") {
                    alert('user register successfully');
                }
            });
        };
        this.showLogin = function () {
            this.showform = false;
            this.showlog = true;
            this.showtask = false;
        };
        this.test = function () {
            var chk = localStorage.getItem('userId');
            if (chk != null && chk != "") {
                this.showform = false;
                this.showlog = false;
                this.showtask = true;
            }
            else {
                this.showform = true;
                this.showlog = false;
                this.showtask = false;
            }
        };
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var chk = localStorage.getItem('userId');
        if (chk != null && chk != "") {
            this.showform = false;
            this.showlog = false;
            this.showtask = true;
        }
        else {
            this.showform = true;
            this.showlog = false;
            this.showtask = false;
        }
    };
    RegisterComponent.prototype.logout = function () {
        localStorage.removeItem("userId");
        this.showform = true;
        this.showlog = false;
        this.showtask = false;
    };
    RegisterComponent.prototype.loginUser = function (username, password) {
        this.taskService.loginUser(username, password).subscribe(function (data) {
            console.log(data);
            if (data._id != "" || data._id != null) {
                localStorage.setItem('userId', data._id);
                console.log(localStorage.getItem('userId'));
                this.showform = false;
                this.showlog = false;
                this.showtask = true;
                location.reload();
            }
            else {
                alert("please enter the valid detail");
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [task_service_1.TaskService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map