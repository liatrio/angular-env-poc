import { Component } from '@angular/core';
import { EnvService } from './env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
        private env: EnvService
    ) {
     console.log('using '+ env.apiUrl);
 }
  title = this.env.apiUrl;
}
