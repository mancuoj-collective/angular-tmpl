import { Component, computed, effect, signal } from '@angular/core'

const STORAGE_KEY = 'angular-tmpl-theme'

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <label class="swap swap-rotate">
      <input type="checkbox" class="theme-controller" [checked]="isDark()" (change)="toggle()" />
      <span class="swap-on iconify carbon--moon size-5"></span>
      <span class="swap-off iconify carbon--sun size-5"></span>
    </label>
  `,
})
export class ThemeToggleComponent {
  theme = signal(localStorage.getItem(STORAGE_KEY) || 'light')
  isDark = computed(() => this.theme() === 'dark')

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.theme())
      localStorage.setItem(STORAGE_KEY, this.theme())
    })
  }

  toggle() {
    this.theme.set(this.isDark() ? 'light' : 'dark')
  }
}
