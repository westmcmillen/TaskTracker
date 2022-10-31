import { Component } from '@angular/core';
import { faArchive, faPenToSquare } from '@fortawesome/pro-duotone-svg-icons';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faArchive = faArchive;
  faPenToSquare = faPenToSquare;

  href: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.href = event.url;
        console.log(this.href);
      }
    });
  }
}
