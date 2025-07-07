import { gettext, hookRoute, ViewContext } from '@c8y/ngx-components';
import { GroupManagementComponent } from './group-management.component';
import { ContainerGuard } from 'src/shared/container.guard';

export const groupManagementViewProviders = [
  hookRoute({
    path: 'ContainerGroups',
    context: ViewContext.Device,
    component: GroupManagementComponent,
    label: gettext('Container Groups'),
    priority: 998,
    icon: 'packages',
    canActivate: [ContainerGuard],
  }),
];
