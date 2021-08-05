import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgrxExampleComponent } from './ngrx-example/ngrx-example.component';
import { NgrxReactiveComponent } from './ngrx-reactive/ngrx-reactive.component';

// Store
import { appReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ComponentWithChildrenComponent } from './component-with-children/component-with-children.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    DataBindingComponent,
    NgrxExampleComponent,
    NgrxReactiveComponent,
    ComponentWithChildrenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ app: appReducer}),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
