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

		console.log(this.connectedTo);
	}

	onAddGroup(groupName: string) {
		// this.newGroup = {
		// 	name: groupName,
		// 	id: this.groupArray.map((e) => e.id).reduce((a, b) => a + b, 0),
		// 	items: []
		// };
		// console.log(this.newGroup);
		// this.groupArray.push(this.newGroup);
		// this.connectedTo.push(this.newGroup.id.toString());
	}

	getTotalPrice(group: Group) {
		const totalPrice = group.items.map((e) => e.price).reduce((a, b) => a + b, 0);
		return totalPrice;
	}

	drop(event: CdkDragDrop<string[]>) {
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
	}
}
