import { Component } from '@angular/core';
import { Login } from "../auth/login/login";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Login],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
