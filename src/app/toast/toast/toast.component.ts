import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  message$= new Observable<Message[]>();
  constructor(private _notificationService: ToastService) { 
    this.message$= this._notificationService.messageOutput;
  }

  ngOnInit(): void {
  }

  clearMessage(id: number) {
    this._notificationService.clearMessage(id)
  }

}
