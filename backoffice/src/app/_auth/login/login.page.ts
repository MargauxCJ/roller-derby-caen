import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonCard, IonCol, IonContent, IonGrid, IonInput, IonRow} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonRow, IonCol, IonGrid, IonButton, IonCard, ReactiveFormsModule]
})
export class LoginPage  {

  constructor(private formBuilder: FormBuilder) { }
  public loginForm = this.formBuilder.group({
    email: [null as unknown as string, Validators.required],
    password: [null as unknown as string, Validators.required],
  });

  public onSubmit() {

  }
}
