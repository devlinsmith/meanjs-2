import { RouterModule, Routes } from '@angular/router';

// APP COMPONENTS


 import { AuthInterceptor } from './users/index';

const ROUTES: Routes = [
     // otherwise redirect to home
     { path: '**', redirectTo: '' }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES,{useHash: true});
