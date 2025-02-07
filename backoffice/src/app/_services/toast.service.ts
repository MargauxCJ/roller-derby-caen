import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {ToastController, ToastOptions} from '@ionic/angular';
import {from, map, Observable, shareReplay, switchMap} from 'rxjs';

const OPERATION_TYPES = ['add', 'update', 'delete', 'enable', 'disable'] as const;
export const TOAST_DEFAULT_OPTIONS =
  new InjectionToken<Partial<Record<'default' | 'error', ToastOptions>>>('TOAST_DEFAULT_OPTIONS');
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  protected defaultOptions: Record<'default' | 'error', ToastOptions>;

  public constructor(
    @Inject(TOAST_DEFAULT_OPTIONS) @Optional() defaultOptions: Partial<Record<'default' | 'error', ToastOptions>>,
    private toastController: ToastController,
    ) {
    this.defaultOptions = {
      default: {
        duration: 2500,
        color: 'primary',
        ...(defaultOptions?.default ?? {}),
      },
      error: {
        duration: 4000,
        color: 'danger',
        ...(defaultOptions?.error ?? {}),
      },
    };
  }

  public presentToast(
    message: ToastOptions['message'],
    options: ToastOptions = {},
  ): Observable<HTMLIonToastElement> {
    const toastOptions = {
      ...this.defaultOptions.default,
      message,
      ...options,
    };
    const toast$ = from(this.toastController.create(toastOptions)).pipe(
      switchMap(toast => from(toast.present()).pipe(map(() => toast))),
      shareReplay(1),
    );
    toast$.subscribe();
    return toast$;
  }
}
