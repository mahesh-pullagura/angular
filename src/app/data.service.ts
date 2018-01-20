import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

@Injectable()
export class DataService {

  private goals=new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal =this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal)
  }

}
