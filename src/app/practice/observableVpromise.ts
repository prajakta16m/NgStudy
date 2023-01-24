import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'obs-v-prom',
  template: ''
})
export class ObservableVpromisesComponent implements OnInit, OnDestroy {

  ObservableVpromisesComponent(){

  }

  myObservable: any;
  myObserver: any;

  ngOnInit(){
      const myObservable = new Observable<number>(
        (observer) => {
            observer.next(500);
        }
      );

      this.myObserver = myObservable.subscribe(
        (result) => {
          if(true) {
            console.log(result);
          }
        }
      )
  }

  ngOnDestroy() {
      this.myObserver.unsubscribe();
  }

}