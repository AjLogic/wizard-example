import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { InclusionComponent }        from '../app/features/inclusion/inclusion.component';
import { ExclusionComponent }        from '../app/features/exclusion/exclusion.component';
import { RulesComponent }        from '../app/features/rules/rules.component';



export const appRoutes: Routes = [
    // 1st Route
    { path: 'rules',  component: RulesComponent },
    // 2nd Route
    { path: 'inclusion',  component: InclusionComponent },
    // 3rd Route
    { path: 'exclusion',  component: ExclusionComponent },
    // 4th Route
   
    { path: '**', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule]
})

export class AppRoutingModule {}