import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerService } from '../shared/container-service';
import { ContainerGroup } from '../shared/container';
import { CoreModule, FormsModule } from '@c8y/ngx-components';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GroupFilterPipe } from './group-filter.pipe';
import { ContainerListItemComponent } from './container-list-item/container-list-item.component';

@Component({
  selector: 'group-management-tab',
  templateUrl: './group-management.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CoreModule,
    FormsModule,
    BsDropdownModule,
    GroupFilterPipe,
    ContainerListItemComponent,
  ],
})
export class GroupManagementComponent implements OnInit {
  groups: ContainerGroup[];

  deviceId: string;

  gridOrList: 'interact-list' | 'interact-grid' = 'interact-grid';

  searchText: string = '';

  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private containerservice: ContainerService
  ) {}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.parent.data.contextData['id'];
    this.loadData();
  }

  displayMode(listClass: 'interact-list' | 'interact-grid') {
    this.gridOrList = listClass;
  }

  async loadData() {
    this.groups = await this.containerservice.getContainerGroups(this.deviceId);
    this.isLoading = false;
  }

  reload() {
    this.isLoading = true;
    this.searchText = '';
    this.loadData();
  }
}
