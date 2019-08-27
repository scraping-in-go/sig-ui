import {Component} from '@angular/core';
import {Row} from './model/row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public list: Row[] = [];

  title = 'sig-app';

  public addToList(json: any): void {
    const r = new Row(json.id, json.job_id, json.title, json.created_by, json.v);
    this.list.push(r);
    while (this.list.length > 20) {
      this.list.pop();
    }
  }

  public btnOEM(): void {
    console.log('oh hai')
  }

}
