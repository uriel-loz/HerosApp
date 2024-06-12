import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent  {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      url: './list'
    },
    {
      label: 'Añadir',
      icon: 'add',
      url: './new-hero'
    },
    {
      label: 'Buscar',
      icon: 'search',
      url: './search'
    },
  ]

  private authService = inject(AuthService);
  private router = inject(Router);

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
