import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { MatTabsModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LinearProgressBarComponent } from './linear-progress-bar/linear-progress-bar.component';
import { ShowProgressBarComponent } from './show-progress-bar/show-progress-bar.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    LinearProgressBarComponent,
    ShowProgressBarComponent,
    CircularProgressComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
