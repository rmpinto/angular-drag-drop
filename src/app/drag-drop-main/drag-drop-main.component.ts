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

	todo = [ 'Get to work', 'Pick up groceries', 'Go home', 'Fall asleep' ];
	done = [ 'Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog' ];
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

		// Initialize main group of deliveries
		const groupMain: Group = {
			name: 'All Deliverables',
			id: 0,
			items: [ deliverableOne, deliverableTwo ]
		};

		// Initialize grouping groups of deliveries
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

		this.groupArray = [ groupA, groupB ];
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
