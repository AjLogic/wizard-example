import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService }     from '../wizrd-util/FormData.Service';
import { WorkflowService }     from '../wizrd-util/worlflow.service';
@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  title = 'Please tell us about yourself.';
  form: any;
  genderValue: string;
  constructor(private router: Router, private formDataService: FormDataService) { }

  

  ngOnInit() {
    this.genderValue = this.formDataService.getRules();
    console.log('Work feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    
    this.formDataService.setRules(this.genderValue);
    return true;
}

goToNext(form: any) {
  if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/inclusion']);
  }
}

}
