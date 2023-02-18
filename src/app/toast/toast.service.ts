import { Injectable } from '@angular/core';
import { Observable, scan, Subject } from 'rxjs';

export interface Message {
  type: 'success' | 'error' | 'clear',
  message?: string,
  id: number
}
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  messageInput: Subject<Message>
  messageOutput: Observable<any>
  constructor() { 
    this.messageInput= new Subject();
    this.messageOutput= this.messageInput.pipe(
      scan((acc: Message[], value: Message)=> {
        if(value.type === 'clear') {
          return acc.filter((item: Message)=> item.id != value.id)
        }

        return [...acc, value]

      }, [])
    )
  }

  addSuccess(message: string) {
    const id= this.randomId();
    this.messageInput.next({
      message: message,
      type: 'success',
      id
    });

    setTimeout(()=> {
      this.clearMessage(id)
    }, 5000)
  }

  addError(message: string) {
    const id= this.randomId();
    this.messageInput.next({
      message: message,
      type: 'error',
      id
    });

    setTimeout(()=> {
      this.clearMessage(id)
    }, 5000)
  }


  clearMessage(id: number) {
    this.messageInput.next({
      type: 'clear',
      id
    })
  }

  randomId() {
    return Math.round(Math.random() * 10000);
  }
}
