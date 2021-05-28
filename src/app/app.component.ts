import { Component } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mohan swamy';
  constructor(private _flashMessagesService: FlashMessagesService) {}
  onSubmit(form:any) {
    console.log(form.value);
    this._flashMessagesService.show('Form registered successs...', { cssClass: 'alert-success', timeout: 5000 });
    form.reset({});
  }
}
