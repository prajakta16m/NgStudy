import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogComponent } from './dialog/dialog.component';
import { ObservableVpromisesComponent } from './practice/observableVpromise';

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule],
  declarations: [AppComponent, HelloComponent, DialogComponent, ObservableVpromisesComponent],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
