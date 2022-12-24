import { Component, VERSION } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(private matd: MatDialog){}

  open(){
   
    const dcon = new MatDialogConfig();
    
    dcon.hasBackdrop =  false;
    this.matd.open(DialogComponent, dcon);
  }
}
