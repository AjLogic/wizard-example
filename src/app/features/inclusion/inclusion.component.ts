import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { FormDataService }     from '../wizrd-util/FormData.Service';
import { Inclusion }             from '../wizrd-util/formData.model';
@Component({
  selector: 'inclusion',
  templateUrl: './inclusion.component.html',
  styleUrls: ['./inclusion.component.css']
})
export class InclusionComponent implements OnInit {

  inclusion: Inclusion;
    form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.inclusion = this.formDataService.getInclusion();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setInclusion(this.inclusion);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/rules']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
         
          this.router.navigate(['/exclusion']);
      }
  }
}
