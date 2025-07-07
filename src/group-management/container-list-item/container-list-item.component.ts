import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Container } from '../../shared/container';
import { CoreModule } from '@c8y/ngx-components';
import { Router } from '@angular/router';
@Component({
  selector: 'container-list-item',
  templateUrl: './container-list-item.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CoreModule],
})
export class ContainerListItemComponent {
  @Input() container: Container;

  @Input() pattern: string;

  isCollapsed: boolean;

  constructor(protected router: Router) {}

  collapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  stop() {
    console.error('not implemented');
  }
}
