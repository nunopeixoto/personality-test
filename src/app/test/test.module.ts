import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { TestRoutingModule } from './test-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FinalResultsComponent } from './components/final-results/final-results.component';



@NgModule({
  declarations: [
    TestComponent,
    FinalResultsComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestModule { }
