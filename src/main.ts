import { enableProdMode } from '@angular/core';

//targeting browser. We need a bootstrap from browser platform, 
//this function return a platform object that bootstrap module function on it
//That is function you use to bootstrap module on platform
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//root module
import { AppModule } from './app/app.module';


import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


//make a call to the browser dynamic function, which would return an instance of the platform object
//That object has method name bootstrapModule(), so we can call.
//This function is expecting root module (which we already created "AppModule")
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
