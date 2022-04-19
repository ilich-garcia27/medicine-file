import { Component } from '@angular/core';
import { Medicine } from './components/models/medicine.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medicine-file';
  medicines: Medicine[] = [];
}
