import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skaters-list',
  templateUrl: './skaters-list.page.html',
  styleUrls: ['./skaters-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SkatersListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
