import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
     private url = 'http://localhost:3000';
     private socket;
     constructor(){ 
	     this.socket = io(this.url);
	 }
	 
	 public sendMessages(message){
		 this.socket.emit('add-message', message);
	 }
	 
	 public getMessages = () => {
         return Observable.create((observer) => {
             this.socket.on('message', (message) => {
                 observer.next(message);
             });
         });
     }
}