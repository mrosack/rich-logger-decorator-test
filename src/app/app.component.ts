import { Component } from '@angular/core';
import { ClassLogger } from "rich-logger-decorator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ClassLogger()
export class AppComponent {
  title = 'app';
}
