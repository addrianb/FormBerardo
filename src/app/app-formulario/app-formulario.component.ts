import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-formulario',
  templateUrl: './app-formulario.component.html',
  styleUrls: ['./app-formulario.component.scss']
})
export class AppFormularioComponent {
  UserForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.UserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required]
    })
  }

  onSubmit(): void {
    
    if (this.UserForm.valid) {
      console.log(this.UserForm.value);
    }
  }
}
