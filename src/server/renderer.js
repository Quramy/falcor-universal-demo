import * as app from '../universal/app';
import {getModel} from '../universal/model';
import * as fs from 'fs';

export function render(req, res) {
  app.render().then(html => {
    let cache = JSON.stringify(getModel().getCache());
    fs.readFile(__dirname + '/../../index.html', 'utf8', (err, htmlString) => {
      if(err){ }
      let output = htmlString.replace(/<article id="app"><\/article>/, `
        <article id="app">
           ${html}
           <script>
           var __server_cache = ${cache};
           </script>
        </article>
      `);
      res.send(output);
      //res.send('HOGE');
    });
  });
}
