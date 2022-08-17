import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameEngineLibModule } from '@game-engine-lib';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    GameEngineLibModule
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
