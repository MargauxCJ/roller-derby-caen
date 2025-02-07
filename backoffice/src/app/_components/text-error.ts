import {Component, Input} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {alertCircleOutline} from 'ionicons/icons';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'text-error',
  template: `
    <div>
      <ion-icon name="alert-circle-outline" color="danger"></ion-icon>
      <ion-text color="danger">{{ text }}</ion-text>
    </div>
  `,
  styles: [`
    div {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
    }

    ion-icon {
      margin-left: 12px;
      font-size: 16px;
      min-width: 16px;
    }

    ion-text {
      font-size: 12px;
      margin-left: 4px;
    }
  `],
  standalone: true,
  imports: [IonicModule],
})
export class TextErrorComponent {
  @Input() public text: string = '';

  constructor() {
    addIcons({alertCircleOutline})
  }
}
