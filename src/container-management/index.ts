import { gettext, hookRoute, ViewContext } from '@c8y/ngx-components';
import { ContainerGuard } from 'src/shared/container.guard';
import { ContainerManagementComponent } from './container-management.component';

export const containerManagementViewProviders = [
  hookRoute({
    path: 'containers',
    context: ViewContext.Device,
    component: ContainerManagementComponent,
    label: gettext('Containers'),
    priority: 999,
    icon: 'package',
    canActivate: [ContainerGuard],
  }),
];
