import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

// Models

export interface Deliverable {
	name: string;
	id: number;
	price: number;
}

export interface Group {
	name: string;
	id: number;
	items: Deliverable[];
}

@Component({
	selector: 'app-drag-drop-main',
	templateUrl: './drag-drop-main.component.html',
	styleUrls: [ './drag-drop-main.component.scss' ]
})
export class DragDropMainComponent implements OnInit {
	public groupArray: Group[] = [];
	public connectedTo: string[] = [];
	public newDeliverable: Deliverable = { name: '', id: null, price: 0 };
	public newGroup: Group = { name: '', id: null, items: [] };

	constructor() {}

	ngOnInit() {
		// Initialize deliverables
		const deliverableOne: Deliverable = {
			name: 'deliverable1',
			id: 1,
			price: 10
		};
		const deliverableTwo: Deliverable = {
			name: 'deliverable2',
			id: 2,
			price: 40
		};
		const deliverableThree: Deliverable = {
			name: 'deliverable3',
			id: 1,
			price: 10
		};
		const deliverableFour: Deliverable = {
			name: 'deliverable4',
			id: 2,
			price: 40
		};

		// Initialize source group of deliverables
		const groupMain: Group = {
			name: 'All Deliverables',
			id: 0,
			items: [ deliverableOne, deliverableTwo, deliverableThree, deliverableFour ]
		};

		// Initialize grouping groups of deliverables
		const groupA: Group = {
			name: 'GroupA',
			id: 1,
			items: []
		};
		const groupB: Group = {
			name: 'GroupB',
			id: 2,
			items: []
		};

		this.groupArray = [ groupMain, groupA, groupB ];
		for (const group of this.groupArray) {
			this.connectedTo.push(group.id.toString());
		}
	}

	public onAddGroup(groupName: string) {
		console.log(groupName);
		const name = groupName;
		const id = Math.max(...this.groupArray.map((e) => e.id)) + 1;
		const items = [];
		console.log(name, id, items);
		this.groupArray.push({ name, id, items });
		this.connectedTo.push(id.toString());
	}

	public onDeleteGroup(group: any) {
		if (group.items.length > 0) {
			group.items.forEach((e) => this.groupArray[0].items.push(e));
			group.items = [];
		}
		this.groupArray.splice(this.groupArray.findIndex((e) => e.id === group.id), 1);
		console.log('groupStatus', this.groupArray);
	}

	public getTotalPrice(group: Group) {
		const totalPrice = group.items.map((e) => e.price).reduce((a, b) => a + b, 0);
		return totalPrice;
	}

	public drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		}
		console.log('groupStatus', this.groupArray);
	}
}
