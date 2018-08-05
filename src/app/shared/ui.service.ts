import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UIService {
  // new subject for the loading spinner.
  loadingStateChanged = new Subject<boolean>();
}