import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemModule} from './system.module';
import {UsersModule} from './users/users.module';
import {NotesModule} from './notes/notes.module';

const routes: Routes = [
  {
    path: 'system',
    component: SystemModule,
    children: [
      {
        path: 'users',
        loadChildren: () => UsersModule
      },
      {
        path: 'notes',
        loadChildren: () => NotesModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
