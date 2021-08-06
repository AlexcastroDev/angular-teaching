import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomModuleComponent } from './random-module.component';

@NgModule({
  declarations: [
    RandomModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RandomModuleComponent
  ]
})
export class RandomModuleModule { }
