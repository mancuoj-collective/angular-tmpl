import { Component, computed, effect, signal } from '@angular/core'
import { ButtonModule } from 'primeng/button'

const STORAGE_KEY = 'angular-tmpl-theme'

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <p-button
      [icon]="isDark() ? 'iconify carbon--sun size-5' : 'iconify carbon--moon size-5'"
      ariaLabel="Toggle theme"
      (click)="toggle()"
      rounded="true"
      text="true"
    />
  `,
})
export class ThemeToggleComponent {
  theme = signal(
    localStorage.getItem(STORAGE_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  )
  isDark = computed(() => this.theme() === 'dark')

  constructor() {
    effect(() => {
      localStorage.setItem(STORAGE_KEY, this.theme())
      document.documentElement.classList.toggle('my-app-dark', this.isDark())
    })
  }

  toggle = () => this.theme.set(this.isDark() ? 'light' : 'dark')
}
