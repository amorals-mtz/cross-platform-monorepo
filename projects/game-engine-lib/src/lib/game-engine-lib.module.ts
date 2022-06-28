import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BoardComponent } from "./components/board/board.component";

@NgModule({
  imports: [ CommonModule ],  // Contains the basic Angular directives (i.e. NgIf, NgForOf etc)
  declarations: [ BoardComponent ],
  exports: [ BoardComponent ]
})
export class GameEngineLibModule { }
