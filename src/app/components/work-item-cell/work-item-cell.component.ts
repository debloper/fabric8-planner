import {
  Component,
  Input,
  Output
} from '@angular/core';

@Component({
    selector: 'work-item-cell',
    template: `
    <!-- id --> 
    
    <span *ngIf="col === 'id'" class="margin-0">
      {{row.id}}
    </span>
    
    <!-- Type -->

    <div *ngIf="col === 'type'" >
    <span  class="color-grey margin-h-10
    {{row.type?.data?.attributes?.icon}}"
    title="{{row.type?.data?.attributes?.name}}">
    </span>
    <span> {{row.type?.data?.attributes?.name}} </span>
    </div>
    
    <!-- Title -->
    
    <span *ngIf="col === 'title'">
      {{row.title}}
    </span>
    
    <!-- Status -->
    
    <div  *ngIf="col === 'status'" class="f8-wi__list-description">
        <span class="pull-left" almIcon [iconType]="row.status" tooltip="{{row.status}}"
          placement="right"> {{row.status}} </span>
    </div>
    
    <!-- Label -->
    
    <div *ngIf="col === 'label'" class="f8-wi__list-description">
        <f8-label [labels]="row?.labels ?
                  row?.labels : []" [truncateAfter]='4' [allowDelete]="false" (onLabelClick)="labelClick($event)"></f8-label>
    </div>
    
    <!-- Creator -->
    
    <div *ngIf="col === 'creator'" class="user-avatar">
        <img placement="right" tooltip="{{row.creator?.id}}" src="{{row.creator?.imageURL + '&s=23'}}"
          onError="this.src='https://avatars0.githubusercontent.com/u/563119?v=3&s=23'" />
    </div>
    
    <!-- Assignee -->
    
    <div *ngIf="col === 'assignees'" class="user-avatar">
        <img *ngFor="let assignee of row.assignees" placement="left" tooltip="{{assignee?.attributes?.fullName}}"
          src="{{assignee?.attributes?.imageURL + '&s=23'}}" onError="this.src='https://avatars0.githubusercontent.com/u/563119?v=3&s=23'"
        />
        <span class="pficon-user not-assigned-user-icon" *ngIf="!row?.assignees?.length" tooltip="Unassigned"
          placement="left"></span>
    </div>    
    `,
})

export class WorkItemCellComponent {
    constructor() {

    }
    @Input() col: string;
    @Input() row: object;
}