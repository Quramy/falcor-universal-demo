import {createClass} from 'falcor-router';

export class Router extends createClass([
  {
    route: 'message',
    get: function() {
      return {
        path: ['message'],
        value: {
          $type: 'atom',
          value: 'Hello, world'
        }
      };
    }
  }
]) {

  constructor() {
    super();
  }

}
