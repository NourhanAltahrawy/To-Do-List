import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(private http:HttpClient) { }
  getTasks():Observable<any>
  {
    return this.http.get(" https://task.ecmpp.com/api/task/all/bedo-2003")
  }
  addTask(task: any): Observable<any> {
    return this.http.post<any>(" https://task.ecmpp.com/api/task/add", task);

  }
  deleteTask(id: any): Observable<any> {
    return this.http.delete<any>(` https://task.ecmpp.com/api/task/remove/${id}`);

  }
  updateTask(id: any): Observable<any> {
    return this.http.get<any>(`https://task.ecmpp.com/api/task/Show/${id}`);

  }
  updateNewTask(id:any,data:any): Observable<any> {
    return this.http.post<any>(`https://task.ecmpp.com/api/task/Show/${id}`,data);

  }


}
