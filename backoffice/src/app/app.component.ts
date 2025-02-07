import {Component} from '@angular/core';
import {IonApp, IonRouterOutlet} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {
  calendarOutline,
  chevronForwardOutline,
  gridOutline,
  imagesOutline,
  medalOutline,
  peopleCircleOutline,
  powerOutline,
  settingsOutline,
  trashOutline,
  walkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {

  }
}
