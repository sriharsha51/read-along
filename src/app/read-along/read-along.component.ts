import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { TranscriptService } from './shared/transcript.service';
import { TimeService } from '../shared/services/time.service';

@Component({
  selector: 'app-read-along',
  templateUrl: './read-along.component.html',
  styleUrls: ['./read-along.component.css']
})
export class ReadAlongComponent implements OnInit {

  transcription: any;
  transcript: any;
  currentWord: any;
  currentInterval: any;
  trackTime: any;
  highlight: String = '';

  // get trackTime(): any{
  //    return this._timeService.trackTime;
  // }
  // set trackTime(vlaue: any) {
  //    this._timeService.trackTime = this.trackTime;
  // }
  constructor(private _transcriptService: TranscriptService, private _timeService: TimeService) { }

  @ViewChild('track') private track: ElementRef;

  ngOnInit() {
    this._transcriptService.getTranscription().subscribe(data => {
      this.transcription = data;
    },
      error => {
        console.log('Error ' + error);
      });
    this._transcriptService.gettranscript().subscribe(data => {
      this.transcript = data;
    });

    this.currentInterval = this.track.nativeElement.addEventListener('play', () => {
      setInterval(() => {
        this._timeService.sendCurrentTime(this.track.nativeElement.currentTime);
      }, 100);
    });

    this._timeService.setCurrentTime$.subscribe(clickedTime => {
      this.track.nativeElement.currentTime = clickedTime;
    });
  }
}
