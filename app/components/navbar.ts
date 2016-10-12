import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'navbar',
    template: `
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#NavbarCollapse" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand" routerLink="/home">Website</a>
          </div>
          <div id="NavbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li [class.active]="router.isActive('/home')">
                <a class="nav-link" routerLink="/home">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `,
})
export class NavbarComponent {
  constructor(private router: Router) {}
}
