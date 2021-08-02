import { Component } from '@angular/core';
import { lifecycle } from './lifecycle.interfaces'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {

  lifecycles: lifecycle[] = new Array()

  
  constructor() {
    this._handleAddEventLifecycle = this._handleAddEventLifecycle.bind(this)

    this._handleAddEventLifecycle('constructor')
  }
  
  _handleAddEventLifecycle(eventName: string) {
    this.lifecycles.push({eventName: eventName})
  }
  
  ngOnInit(): void {
    this._handleAddEventLifecycle('onInit')
  }

  ngOnChanges(): void {
    this._handleAddEventLifecycle('onChanges')
  }

  ngDoCheck(): void {
    this._handleAddEventLifecycle('doCheck')
  }

  ngAfterContentInit(): void {
    this._handleAddEventLifecycle('afterContentInit')
  }

  ngAfterContentChecked(): void {
    this._handleAddEventLifecycle('afterContentChecked')
  }

  ngAfterViewInit(): void {
    this._handleAddEventLifecycle('afterViewInit')
  }

  ngAfterViewChecked(): void {
    this._handleAddEventLifecycle('afterViewInit')
  }

  ngOnDestroy(): void {
    this._handleAddEventLifecycle('onDestroy')
  }

}
