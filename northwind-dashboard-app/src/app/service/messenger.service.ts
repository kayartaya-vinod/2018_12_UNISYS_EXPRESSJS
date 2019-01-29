import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

const url = 'http://localhost:3300';

@Injectable()
export class MessengerService {

  private socket;

  constructor() { }

  getMessages(): Observable<Array<any>> {
    return Observable.create(observer => {
      // observer has the ability to stream data (anything)
      // The function to send a stream is 'next()'

      this.socket = io(url);
      this.socket.on('messages', resp => {
        observer.next(resp.messages);
      });



    });
  }

  postMessage(user) {
    this.socket.emit('new_message', user);
  }
}
