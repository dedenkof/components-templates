import { AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit{
	@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
	// private form = viewChild<ElementRef<HTMLFormElement>>('form');

//	@Output() add = new EventEmitter();

	enteredTitle = '';
	enteredText = '';

	add = output<{title: string; text: string}>();

	ngAfterViewInit() {
		console.log('After Vie Init');
		console.log(this.form?.nativeElement);
	}

	onSubmit() {
	this.add.emit({title: this.enteredTitle, text: this.enteredText});
//	this.form?.nativeElement.reset();
	this.enteredTitle = '';
	this.enteredText = '';
}

}
