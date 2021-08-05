import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IAppState } from '../store/types';

@Component({
  selector: 'app-ngrx-reactive',
  templateUrl: './ngrx-reactive.component.html',
  styleUrls: ['./ngrx-reactive.component.scss']
})
export class NgrxReactiveComponent implements OnInit {

  constructor(private store: Store<{app: IAppState}>) { }
  
  counter$ = this.store.select('app').pipe(
    map(store => store.counter)
  )

  ngOnInit(): void {
  }

}
