import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {


  public form:FormGroup
  public authService = inject(AuthService);
  public user?:User;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  register(){
    const {name, email, password} = this.form.value;
    this.authService.createNewUser({name, email, password});
  }

}
