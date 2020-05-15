import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FromularioComponent } from './fromulario/fromulario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/form' },
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FromularioComponent },
  { path: '**', redirectTo: '/form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
