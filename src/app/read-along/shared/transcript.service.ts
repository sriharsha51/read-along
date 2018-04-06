import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranscriptService {

  constructor(private _http: HttpClient) { }
  getTranscription() {
    return this._http.get('./../../../assets/api/transcription.json');
  }
  gettranscript() {
    return this._http.get('./../../../assets/api/words.json');
  }
}
