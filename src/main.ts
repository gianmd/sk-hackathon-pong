import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as WebFont from 'webfontloader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.prodMode) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    WebFont.load({
      google: {
        families: ['Material Icons', 'Roboto:300,400,500,700']
      }
    });
  });
