import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.css']
})
export class TranscriptionComponent implements OnInit {

  @Input() transcription: any;
  constructor() { }

  ngOnInit() {
  }
}
