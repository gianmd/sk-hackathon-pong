import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { PongGameComponent } from './pong/pong.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [AppComponent, PongGameComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
