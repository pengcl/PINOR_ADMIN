import {Injector} from '@angular/core';

export abstract class AppComponentBase {
  query = {
    _limit: 10,
    _sort: 'id',
    _start: 0
  };

  protected constructor(injector: Injector) {
  }
}
