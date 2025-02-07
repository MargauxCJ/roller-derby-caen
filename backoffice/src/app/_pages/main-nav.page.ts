import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList, IonMenu, IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane
} from '@ionic/angular/standalone';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
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
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.page.html',
  styleUrls: ['./main-nav.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonItem, IonLabel, IonList, IonNote, IonRouterOutlet, RouterLinkActive, RouterLink, IonSplitPane, IonMenu, IonMenuToggle]
})
export class MainNavPage {

  constructor(private authService: AuthService, private router: Router) {
    addIcons({ trashOutline, chevronForwardOutline, gridOutline, calendarOutline, imagesOutline, medalOutline, walkOutline, peopleCircleOutline, settingsOutline, powerOutline});
  }

  public logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
