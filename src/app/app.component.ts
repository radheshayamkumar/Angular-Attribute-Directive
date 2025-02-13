import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtbDirComponent } from './Attribute_Directive/atb-dir/atb-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AtbDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
