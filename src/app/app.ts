import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ThemeToggleComponent } from './components/theme-toggle'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent],
  template: `
    <div class="relative font-sans antialiased">
      <div class="flex flex-col items-center justify-center h-svh">
        <div class="flex gap-5 items-center">
          <a class="btn btn-primary" href="https://github.com/mancuoj-collective/angular-tmpl">
            <span class="iconify carbon--logo-github size-4"></span>
            GitHub
          </a>
          <app-theme-toggle />
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
