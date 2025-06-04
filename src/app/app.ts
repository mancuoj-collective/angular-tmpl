import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ThemeToggleComponent } from './components/theme-toggle.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  templateUrl: './app.html',
})
export class AppComponent {}
