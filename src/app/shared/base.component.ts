import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: ``
})
export class BaseComponent implements OnDestroy {

  protected destroyed$ = new Subject<any>();

  ngOnDestroy(): void {
    this.destroyed$.next({});
    this.destroyed$.complete();
    this.onDestroy();
  }

  protected onDestroy(): void {
  }
}
