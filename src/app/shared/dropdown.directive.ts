import { Directive, HostListener, Output, EventEmitter, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click')
    onClick(e) {
        this.isOpen = !this.isOpen;
    }
}