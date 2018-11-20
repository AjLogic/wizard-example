import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RulesComponent } from './features/rules/rules.component';
import { InclusionComponent } from './features/inclusion/inclusion.component';
import { ExclusionComponent } from './features/exclusion/exclusion.component';
import { FormDataService } from './features/wizrd-util/FormData.Service';
import { WorkflowService } from './features/wizrd-util/worlflow.service';
import { FormsModule }        from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    InclusionComponent,
    ExclusionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
