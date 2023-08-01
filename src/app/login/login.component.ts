import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() {}

  onLogin(){
    this._router.navigate(['home']);
  }

}
