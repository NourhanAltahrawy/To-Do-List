import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls:['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateTask: FormGroup;
   taskId:any;
  constructor(private formBuilder: FormBuilder, private taskService: TaskService,private rout:ActivatedRoute) {
    this.updateTask = this.formBuilder.group({
      title: ['', [Validators.maxLength(100), Validators.minLength(3)]],
      content: ['', [Validators.maxLength(255), Validators.minLength(10)]],
      username: ['abdo-2003'],
      image: ['']
    });
  }
  selectImg(event:any)
  {  const file = event.target.files[0];
    // Check if a file is selected
    if (file) {

      this.updateTask.patchValue({
        image: file
      });


      this.updateTask.get('image')?.updateValueAndValidity();
    }}

 mesage:boolean=false
  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      this.taskId = params['id'];
      //console.log(taskId);

      this.taskService.updateTask(this.taskId).subscribe((res:any)=>
      {//console.log(res)
        this.updateTask = this.formBuilder.group({
          title: [res.title, [Validators.maxLength(100), Validators.minLength(3)]],
          content: [res.content, [Validators.maxLength(255), Validators.minLength(10)]],
          username: ['abdo-2003'],
          image: [res.image]
        })

      })

    });

  }


  removeMesage(){
    this.mesage=false
  }
  editTask()
  {
    this.taskService.updateNewTask(this.taskId ,this.updateTask.value)
    console.log(this.updateTask.value)
    this.mesage=true
  }

}
