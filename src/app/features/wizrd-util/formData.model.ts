export class FormData {
    includeValueForGender: string = '';
    encludeValueForGender: string = '';
    gender: string = '';
    rules:any;
    clear() {
        this.gender = '';
        this.includeValueForGender= '';
        this.encludeValueForGender = '';
    }
}

export class Inclusion {
    includeValueForGender: string = '';
    
}

export class Exclusion {
    encludeValueForGender: string = '';
   
}