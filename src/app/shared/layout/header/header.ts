import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/auth-service';

@Component({
  selector: 'header-component',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{

  loggedState:boolean =false;
  constructor(private authService: AuthService ) {
  }

  ngOnInit() {
    this.authService.isLogged$.subscribe((isLoggedIn:boolean) =>{
this.loggedState=isLoggedIn;
      console.log('State has been changed: ' + isLoggedIn);
    })
  }

  login(){
    this.authService.logIn()
}
logout(){
    this.authService.logOut()
}
}
