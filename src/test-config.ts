import firebase from 'firebase/app';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

export const TEST_FIREBASE_PORT = 6543;
export const TEST_FIREBASE_URL = `127.0.0.1:${TEST_FIREBASE_PORT}`;

export const TEST_FIREBASE_CONFIG = {
  apiKey: 'AnythingHere',
  authDomain: 'AnythingHere',
  databaseURL: `ws://127.0.1:${TEST_FIREBASE_PORT}`
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(TEST_FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class TestAngularFireModule {}

firebase.initializeApp(TEST_FIREBASE_CONFIG);

export const FIREBASE_REF = firebase.database().ref();
