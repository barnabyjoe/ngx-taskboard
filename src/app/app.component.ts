import { Component,ViewChild } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Board!';
  private LOGO = "../assets/img/task-icon.png"; 
  constructor(private dragulaService: DragulaService) {
    dragulaService.setOptions('first-bag', {
      moves: function (el, container, handle) {
        return handle.className === 'handle';
      }
    });
  }
}
