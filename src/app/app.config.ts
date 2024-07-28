import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; //Import this to configure the app for routing
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = { //It seems like extra steps, but the providers array is in this file instead of main.ts
  providers: [provideRouter(routes)]
}; 
  
//