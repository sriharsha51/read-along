import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TranscriptionComponent } from './transcription/transcription.component';
import { HttpClientModule } from '@angular/common/http';
import { LabelComponent } from './shared/label/label.component';
import { ReadAlongComponent } from './read-along/read-along.component';
import { TranscriptService } from './read-along/shared/transcript.service';
import { TimeService } from './shared/services/time.service';


@NgModule({
  declarations: [
    AppComponent,
    TranscriptionComponent,
    LabelComponent,
    ReadAlongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TranscriptService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
