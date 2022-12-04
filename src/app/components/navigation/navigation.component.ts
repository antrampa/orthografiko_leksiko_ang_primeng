import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Καταχώρηση Νέας Λέξης',
            icon: 'pi pi-fw pi-plus',
            url: '/new-word'
        },
        {
            label: 'Όλες οι λέξεις',
            icon: 'pi pi-fw pi-refresh',
            url: '/all-words'
        },
        {
            label: 'Προβολή Μαζί',
            icon: 'pi pi-fw',
            url: '/view-all'
        }
    ];
  }

}
