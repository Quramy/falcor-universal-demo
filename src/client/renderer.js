import * as app from '../universal/app';

export function render(element) {
  app.render().then(html => {
    element.innerHTML = html;
  });
}

