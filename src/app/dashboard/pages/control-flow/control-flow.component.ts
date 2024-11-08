import { Component, signal } from '@angular/core';



type Grade = 'A'| 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styles: ``
})
export class ControlFlowComponent {


  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameWorks = signal(['Angular', 'Vue', 'Svelte', 'React', 'Qwik'])
  public frameWorksCopy = signal([''])

  toggleContent():void{
    this.showContent.update(value => !value);
  }


}
