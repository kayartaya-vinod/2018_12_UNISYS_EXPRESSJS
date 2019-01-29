import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  disableNameTextbox = false;
  messages:Observable<any>;
  user = {name: '', message: ''};

  constructor(private messengerService: MessengerService) { }

  ngOnInit() {
    this.messages = this.messengerService.getMessages();
  }

  postMessage() {
    this.messengerService.postMessage(this.user);
    this.user.message = '';
    this.disableNameTextbox = true;
  }

}
