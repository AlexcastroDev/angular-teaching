import { 
  Component, 
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';
import { lifecycle } from './lifecycle.interfaces'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,
    DoCheck, AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
  {

  lifecycles: lifecycle[] = new Array()

  constructor() {
    /**
     * First call
     */
    this._handleAddEventLifecycle('constructor')
  }
  
  /**
   * 
   * @param eventName
   * Used to identify the event and push to array
   */
  _handleAddEventLifecycle(eventName: string) {
    this.lifecycles.push({eventName: eventName})
  }
  
  /**
   * second call
   */
  ngOnInit(): void {
    this._handleAddEventLifecycle('onInit')
  }

  // It will not render, there is no data binding here...
  ngOnChanges(): void {
    this._handleAddEventLifecycle('onChanges')
  }

  /**
   * third call, after onInit
   * and after AfterViewChecked
   */
  ngDoCheck(): void {
    this._handleAddEventLifecycle('doCheck')
  }


  /**
   * after doCheck
   */
  ngAfterContentInit(): void {
    this._handleAddEventLifecycle('afterContentInit')
  }

  /**
   * after AfterContentInit
   */
  ngAfterContentChecked(): void {
    this._handleAddEventLifecycle('afterContentChecked')
  }

  /**
   * after AfterContentChecked 
   */
  ngAfterViewInit(): void {
    this._handleAddEventLifecycle('afterViewInit')
  }

  /**
   * after ngAfterViewInit 
   */
  ngAfterViewChecked(): void {
    this._handleAddEventLifecycle('AfterViewChecked')
  }

  ngOnDestroy(): void {
    this._handleAddEventLifecycle('onDestroy')
  }

}
