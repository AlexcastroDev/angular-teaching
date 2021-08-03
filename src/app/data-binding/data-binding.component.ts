import { Component } from '@angular/core';

/**
 * ngModel standalone
 * Here we have one way data binding, without forms.
 */

@Component({
  selector: 'app-data-binding',
  styleUrls: ['./data-binding.component.scss'],
  template: `
    <p>My name is {{ name }}</p> 
    <input [(ngModel)]="name">
  `
})
export class DataBindingComponent {
  name: string = 'Alex'
}
