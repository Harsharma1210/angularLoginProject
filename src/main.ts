import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) //Instead of the providers array here, we have the appConfig variable instead
  .catch((err) => console.error(err));
