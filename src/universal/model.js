import * as Falcor from 'falcor/browser';

let _model;

export function getModel() {
  if(_model) return _model;

  if(typeof window === 'object') {
    _model = new Falcor.Model({
      source: new Falcor.HttpDataSource('/model.json')
    });
    if(typeof __server_cache !== 'undefined') {
      _model.setCache(__server_cache);
    }
  }else{
    _model = new Falcor.Model({
      source: new (require('../server/router').Router)()
    });
  }
  return _model;
}

