import { Component, effect, signal } from '@angular/core'

const THEME_KEY = 'angular-tmpl-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem(THEME_KEY) || 'light'
}

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <label class="swap swap-rotate">
      <input
        type="checkbox"
        class="theme-controller"
        [checked]="theme() === 'dark'"
        (change)="toggle()"
      />
      <span class="swap-on iconify carbon--moon size-5"></span>
      <span class="swap-off iconify carbon--sun size-5"></span>
    </label>
  `,
})
export class ThemeToggleComponent {
  theme = signal(getInitialTheme())

  constructor() {
    effect(() => {
      const t = this.theme()
      document.documentElement.setAttribute('data-theme', t)
      localStorage.setItem(THEME_KEY, t)
    })
  }

  toggle() {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark')
  }
}
