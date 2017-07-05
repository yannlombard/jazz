import {Component} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

declare let ga: Function;

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {
  title = 'Jazz';

  user:Observable<firebase.User>;

  constructor(public afAuth:AngularFireAuth) {
    this.user = afAuth.authState;

    this.afAuth.auth.signInAnonymously().then((user) => {
      console.log('User-ID', user.uid);
      ga('set', 'userId', user.uid);
    });
  }

}
