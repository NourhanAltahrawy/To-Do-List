import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';

import { ShowAllTasksComponent } from './show-all-tasks/show-all-tasks.component';
import { UpdateComponent } from './update/update.component';
;

const routes: Routes = [
  {path:"",redirectTo:"show all",pathMatch:"full"},
  {path:"Add task",component:AddTaskComponent},

  {path:"show all",component:ShowAllTasksComponent},
  {path:"update/:id",component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
