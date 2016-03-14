import * as _ from 'lodash';
import {getModel} from './model';
const compiled = _.template(
`
<h1>Falcor SSR Demo</h1>
<span><%= message %></h1>
<ul>
  <li>
  If user visits <a href="serverRender">/serverRender</a>, model.get("message") will be executed on Express using falcor-router directly. <br />
  Please see 'src/server/renderer.js'.
  </li>
  <li>
  If user visits <a href="index.html">/index.html</a>, model.get("message") will be executed on Browser using falcor-http-datasource. <br />
  Please see 'src/client/renderer.js'
  </li>
</ul>
`);

export function render() {
  const model = getModel();
  return model.get('message').then(res => {
    return compiled(res.json);
  });
}
