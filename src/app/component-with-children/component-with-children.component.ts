import { Component } from '@angular/core';

@Component({
  selector: 'app-component-with-children',
  template: `<span><ng-content></ng-content></span>`,
})
export class ComponentWithChildrenComponent {}
