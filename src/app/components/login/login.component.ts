import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class Login {
  @Output() status = new EventEmitter<String>();
}
