import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from './base.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [MaterialModule, ReactiveFormsModule]
})
export class SharedModule { }

