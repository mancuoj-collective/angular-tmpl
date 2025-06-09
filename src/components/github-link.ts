import { Component } from '@angular/core'

@Component({
  selector: 'app-github-link',
  standalone: true,
  template: `
    <a class="btn btn-primary" href="https://github.com/mancuoj-collective/angular-tmpl">
      <span class="iconify carbon--logo-github size-4"></span>
      GitHub
    </a>
  `,
})
export class GithubLinkComponent {}
