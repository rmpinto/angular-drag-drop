import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { DragDropMainComponent } from './drag-drop-main/drag-drop-main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent, DragDropMainComponent ],
	imports: [
		BrowserModule,
		DragDropModule,
		FlexLayoutModule,
		MatCardModule,
		MatSliderModule,
		MatDividerModule,
		MatInputModule,
		MatButtonModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
