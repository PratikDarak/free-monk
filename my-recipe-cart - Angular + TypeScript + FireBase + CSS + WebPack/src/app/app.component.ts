import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-recipe-cart';
  config = {
    apiKey: 'AIzaSyBjRxQtYECNSDOyCIj4mVtqyQJm6tIQ9k8',
    authDomain: 'my-recipe-cart.firebaseapp.com'
  };

  ngOnInit() {
    if(!firebase.apps.length) {
      firebase.initializeApp(this.config);
    } else {
      firebase.app();
    }
  }
}
