import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _taskService: TaskService,
  public alertController: AlertController) { }

  ngOnInit() {
  }


 get AllTaskList() {
    return this._taskService.getAllTask();
  }
  async  addNewTask() {
    const alert = await this.alertController.create({
      header: 'Add products',
        inputs: [{name: 'productName',type: 'text', placeholder: 'productName'
        }, { name: 'productPrice', type: 'text', placeholder: 'productPrice'
        },
            {
          name: 'productDescription',type: 'text', placeholder: 'productDescription'
        },
        ],
      buttons: [
        { text: "Submit", handler: (res) =>{
          this._taskService.addTask(res);
        }}
      ],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  onDelete(id: any) {
    this._taskService.deleteEmployee(id);

  }
 async onUpdate (Id: any) {
    const task= this._taskService.getAllTask().find(c => c.Id === Id);
      const alert = await this.alertController.create({
      header: 'update task',
        inputs: [
      
        { name: 'content',type: 'text', value: task.productName, placeholder: 'Content'
        },
        {
          name: 'status',type: 'text',value: task.productDescription,
          placeholder: 'Status'
        },
            {name: 'priority',type: 'text',value: task.productPrice,
          placeholder: 'Priority'
        },
        ],
      buttons: [
        { text: "Okay", handler: (res) =>{ task.productName=res.content;
    task.productDescription =res.status;task.productPrice =res.priority;console.log(task)
   this._taskService.updateTask(task);
        }}
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();

  }

}
