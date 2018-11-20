import { Component, OnInit, Input }   from '@angular/core';

import { FormDataService }            from '../app/features/wizrd-util/FormData.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() formData;
    
    constructor(private formDataService: FormDataService) {
      this.formData = this.formDataService.getFormData();
      
    }
}
