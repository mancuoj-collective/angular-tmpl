import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ThemeToggleComponent } from '@/components/theme-toggle'
import { GithubLinkComponent } from '@/components/github-link'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, GithubLinkComponent],
  template: `
    <div class="relative font-sans antialiased">
      <div class="flex flex-col items-center justify-center h-svh">
        <div class="flex gap-3 items-center">
          <app-github-link />
          <app-theme-toggle />
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
