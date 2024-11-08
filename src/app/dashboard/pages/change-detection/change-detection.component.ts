import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``
})
export class ChangeDetectionComponent {



  constructor(){
    setTimeout(() => {
      // this.frameWorkSignalProperty.name ='React';
      console.log('hecho')
    }, 5000);
  }
  public frameWorkSignal = signal({
      name: 'Angular',
      releaseDate: 2016,
  })

  public frameWorkSignalProperty = {
    name: 'Angular',
    releaseDate: 2016,
}

}
