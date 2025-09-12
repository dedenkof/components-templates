import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'control',
		'(click)': 'onClick()'
	}
})
export class ControlComponent {
	// @HostListener('click') onClick() {
	// 	console.log('Click', 'knock');
	// }

	label = input.required();
//	@HostBinding('class') className ='control';

onClick() {
 	console.log('Click', 'knock');
 }

}
