import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonButton, IonCard, IonCol, IonContent, IonGrid, IonImg, IonInput, IonRow} from '@ionic/angular/standalone';
import {AuthService} from '../../_services/auth.service';
import {ToastService} from '../../_services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonRow, IonCol, IonGrid, IonButton, IonCard, ReactiveFormsModule, IonImg]
})
export class LoginPage {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    ) {
  }

  public loginForm = this.formBuilder.group({
    email: [null as unknown as string, Validators.required],
    password: [null as unknown as string, Validators.required],
  });

  public onSubmit() {
    console.log(this.loginForm.valid)
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email as string, this.loginForm.value.password as string).subscribe({
        next: () => {
          this.toastService.presentToast('bravoe');
          this.router.navigateByUrl('/general/dashboard')
        },
        error: (error) => {
          this.toastService.presentToast(error);
        },
      });
    }
  }
}
