






import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  addTask: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
    this.addTask = this.formBuilder.group({
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

      this.addTask.patchValue({
        image: file
      });


      this.addTask.get('image')?.updateValueAndValidity();
    }}

 mesage:boolean=false
  ngOnInit(): void {}

  createTask() {

    if (this.addTask.valid) {
      const  formData =new FormData
  Object.entries(this.addTask.value).forEach(([key, value]: any[]) => {
    formData.append(key, value);
})
      this.taskService.addTask(formData).subscribe(
        res => {
          console.log(res);

          this.addTask.reset();
          this.mesage=true
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  removeMesage(){
    this.mesage=false
  }
}
