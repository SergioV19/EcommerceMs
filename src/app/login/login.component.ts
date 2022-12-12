import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { saveData, getToken } from '../services/localStorage'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    // if (!!localStorage.getItem('token')) {
    //   this.router.navigate(['/tienda'])
    // }
  }
  sendData(values: any) {
    // this.userService.logUser(
    //   values.Email,
    //   values.PasswordOne,
    // )

    if (values.EMAIL == "" || values.PASSWORD == "") {
      alert('Faltan campos por llenar')
    } else {
      this.LoginService.registerLog(
        values.EMAIL,
        values.PASSWORD
      ).subscribe({
        next: (res) => {
          saveData(res)
          this.router.navigate(['/tienda'])
        }
      })
    }
  }
}
