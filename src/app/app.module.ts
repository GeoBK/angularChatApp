import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import{HttpModule} from '@angular/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
export const firebaseConfig = {
  apiKey: "AIzaSyCiSnnQCeap7su6YftxXBkokuwOik7G0NQ",
  authDomain: "chatapp-5636f.firebaseapp.com",
  databaseURL: "https://chatapp-5636f.firebaseio.com",
  projectId: "chatapp-5636f",
  storageBucket: "",
  messagingSenderId: "1020874883506"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
