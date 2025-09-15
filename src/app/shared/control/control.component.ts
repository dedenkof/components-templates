import { Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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

	label = input.required<string>();
//	@HostBinding('class') className ='control';

private el = inject(ElementRef);

// @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLAreaElement>;

private control = contentChild<ElementRef<HTMLInputElement | HTMLAreaElement>>('input');

onClick() {
 	console.log('Click', 'knock');
	console.log(this.el);
	console.log(this.control());
 }

}
