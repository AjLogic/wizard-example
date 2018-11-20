import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { FormDataService }  from '../wizrd-util/FormData.Service';
import { Exclusion }        from '../wizrd-util/formData.model';

@Component({
  selector: 'exclusion',
  templateUrl: './exclusion.component.html',
  styleUrls: ['./exclusion.component.css']
})
export class ExclusionComponent implements OnInit {

  exclusion: Exclusion;
    form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
      this.exclusion = this.formDataService.getExclusion();
      console.log('Address feature loaded!');
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setExclusion(this.exclusion);
      return true;
  }

  goToPrevious(form: any) {
      if (this.save(form)) {
          this.router.navigate(['/inclusion']);
      }
  }

  goToNext(form: any) {
      if (this.save(form)) {
         
          this.router.navigate(['/exclusion']);
      }
  }
}