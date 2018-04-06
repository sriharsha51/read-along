import { Component, OnInit, Input } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input() transcript: any;
  currentTime: any;
  transcriptLength: number;
  hightlight = false;

  constructor(private _timeService: TimeService) {
  }

  ngOnInit() {
     this._timeService.trackTime$.subscribe(curTime => {
      this.currentTime = curTime;
       });
     }

     wordClicked(word) {
       this._timeService.wordClickTime((word.dataBegin + word.dataDur));
     }
  }

