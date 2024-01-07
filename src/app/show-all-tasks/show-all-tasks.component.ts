



import { TaskService } from './../task.service';
import { Component ,OnInit} from '@angular/core';


@Component({
  selector: 'app-show-all-tasks',
  templateUrl: './show-all-tasks.component.html',
  styleUrl: './show-all-tasks.component.css'
})

export class ShowAllTasksComponent implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (res) => {

        this.tasks = res;

        console.log(this.tasks );
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  ngOnInit(): void {
   this. getTasks()
   }
   deleteTask(index:number)
   {this.taskService.deleteTask(index).subscribe((res=>{
   this.getTasks()
    console.log(index)
   }))
    }

}
