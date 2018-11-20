import { Injectable } from '@angular/core';
import { FormData, Inclusion,Exclusion}       from './formData.model';
import { STEPS } from './workflow.model';
import { WorkflowService } from './worlflow.service'
@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isInclusionFormValid: boolean = false;
    private isExclusionValid: boolean = false;
    private isRulesValid: boolean = false;

    constructor(private workflowService:WorkflowService) { 
    }

    getRules() : string {
       
        return this.formData.rules;
    }

    setRules(data: string) {
        
        this.isRulesValid = true;
        this.formData.rules = data;
         this.workflowService.validateStep(STEPS.rules);
    }

    getInclusion():Inclusion {
        // Return the Personal data
        var inclusion: Inclusion = {
          includeValueForGender: this.formData.includeValueForGender
        };
        return inclusion;
    }

    setInclusion(data: Inclusion) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isInclusionFormValid = true;
        this.formData.includeValueForGender = data.includeValueForGender;
        this.workflowService.validateStep(STEPS.inclusion);
    }

    setExclusion(data: Exclusion){
        this.isExclusionValid = true;
        this.formData.encludeValueForGender = data.encludeValueForGender;
        this.workflowService.validateStep(STEPS.exclusion);
    }


    getExclusion() : Exclusion {
        // Return the Address data
        var exclusion: Exclusion = {
        encludeValueForGender : this.formData.encludeValueForGender,
            
        };
        return exclusion;
    }

    getFormData(): FormData {
       return this.formData;
    }
    
    resetFormData(): FormData {
        // Reset the workflow
       // this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isExclusionValid = this.isExclusionValid = this.isRulesValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isExclusionValid &&
                this.isInclusionFormValid && 
                this.isRulesValid;
    }
}