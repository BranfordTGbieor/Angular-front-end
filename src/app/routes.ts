import {Routes} from '@angular/router';
import { HomeComponent } from './Component/Home/Home.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { MemberListComponent } from './Component/member-list/member-list.component';
import { ListsComponent } from './Component/lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'Member', component: MemberListComponent},
      {path: 'Messages', component: MessagesComponent},
      {path: 'Lists', component: ListsComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

