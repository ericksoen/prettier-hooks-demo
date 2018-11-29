import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prettier-hooks';

  public methodWithTestFormating(): void {
    const item = [
      {
        id: 1,
        title: 'title_1'
      },
      {
        id: 2,
        title: 'title_2'
      }
    ];
  }
}
