import { Component } from '@angular/core';
import { faArchive, faPenToSquare } from '@fortawesome/pro-duotone-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faArchive = faArchive;
  faPenToSquare = faPenToSquare;
}
