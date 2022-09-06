import { Component } from '@angular/core';

import { ElectronService } from './core/services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'ng-tetris';

  constructor(
    private electronService: ElectronService
  ) {
    if (electronService.isElectron) {
      console.log("Run in Electron");
      console.log("Electron ipcRenderer", this.electronService.ipcRenderer);
      console.log("NodeJS childProcess", this.electronService.childProcess);
    } else {
      console.log("Run in browser");
    }
  }

}
