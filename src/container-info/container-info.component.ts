import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContainerService } from '../shared/container-service';
import {
  Container,
  ContainerGroup,
  ContainerParent,
} from '../shared/container';
import { CoreModule, FormsModule } from '@c8y/ngx-components';

@Component({
  selector: 'container-info-tab',
  templateUrl: './container-info.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CoreModule, FormsModule],
})
export class ContainerInfoComponent implements OnInit {
  serviceId: string;
  container: Container;
  parentDevice: ContainerParent;
  constructor(
    private route: ActivatedRoute,
    private containerService: ContainerService
  ) {}

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.parent.data.contextData['id'];
    this.loadData();
  }
  async loadData() {
    [this.container, this.parentDevice] =
      await this.containerService.getContainer(this.serviceId);
  }
}
