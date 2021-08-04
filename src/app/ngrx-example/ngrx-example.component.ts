import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/types';
import { map } from 'rxjs/operators'
import { decrease, increment } from '../store/actions';

@Component({
  selector: 'app-ngrx-example',
  templateUrl: './ngrx-example.component.html',
  styleUrls: ['./ngrx-example.component.scss']
})
export class NgrxExampleComponent implements OnInit {
 
  /**
   * 
   * changed to store
   */
  // @Input() 
  // counter: number = 0

  /**
    * It's like mapState with namespace
  */
   counter$ = this.store.select('app').pipe(
    map(store => store.counter)
  )
  
  constructor(private store: Store<{app: IAppState}>) { }

  _handleOnIncrement() {
    this.store.dispatch(increment())
  }

  _handleOnDecrease() {
    this.store.dispatch(decrease())
  }

  ngOnInit(): void {
  }

}
