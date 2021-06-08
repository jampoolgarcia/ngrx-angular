import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './store/app.reducer';
import { SPANISH, ENGLISH } from './store/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  $data: Observable<any>;

  constructor(private store: Store<appState>){
      this.$data = store.select((state: appState) => state);
  }

  SpanishMsg(){
    this.store.dispatch(
      SPANISH({text: 'msg español'})
    )
  }

  EnglishMsg(){
    this.store.dispatch(
      ENGLISH({ text: 'msg english'})
    )
  }
}
