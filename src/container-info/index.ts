import { gettext, hookRoute, ViewContext } from '@c8y/ngx-components';
import { ContainerInfoComponent } from './container-info.component';
import { ContainerInfoGuard } from './container-info.guard';

export const containerInfoViewProviders = [
  hookRoute({
    path: `Info`,
    label: gettext('Info'),
    context: ViewContext.Service,
    component: ContainerInfoComponent,
    priority: 1000,
    icon: 'asterisk',
    canActivate: [ContainerInfoGuard],
  }),
];
