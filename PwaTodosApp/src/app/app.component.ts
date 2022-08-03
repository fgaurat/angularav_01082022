import { Component } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PwaTodosApp';

  constructor(private updates:SwUpdate){
    updates.versionUpdates.subscribe((event:VersionEvent)=>{
      console.log(event.type)
      if (event.type == 'VERSION_READY'){

        updates.activateUpdate().then(() => document.location.reload());
      }
    })

  }
}
