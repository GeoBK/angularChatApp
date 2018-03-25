import { Component } from '@angular/core';
import {AngularFireDatabase,AngularFireList,AngularFireAction,DatabaseSnapshot} from 'angularfire2/database'
import { Observable, BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg:string='';
  itemsObservable:Observable<AngularFireAction<DatabaseSnapshot>[]>;
  items:AngularFireList<any>;
  editMsg:boolean=false;
  editId:number;
  constructor(public af:AngularFireDatabase){
    debugger;
    this.items=af.list('/messages');
    this.itemsObservable=this.items.snapshotChanges();
  }
  send(chatMsg:string){
    this.items.push({message:chatMsg});
    this.msg='';
  }

  delete(key:string){
    this.items.remove(key);
  }

  edit(key:string,message:string){
    this.items.update(key,{message:message});
    this.editMsg=false;
  }
}
