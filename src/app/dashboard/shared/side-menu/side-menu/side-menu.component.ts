import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
    @Output() public buttonPressed = new EventEmitter<void>();

  onPressedButton():void{
    this.buttonPressed.emit();
  }


}
