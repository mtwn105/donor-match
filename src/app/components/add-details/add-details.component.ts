import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {

  bloodGroups = [
    'A+',
    'A-',
    'B+',
    'B-',
    'O+',
    'O-',
    'AB+',
    'AB-'
  ];

  becomeADonor = false;

  addDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {

    // // below form using form builder

    // this.addDetailsForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required]),
    //   lastName: new FormControl('', [Validators.required]),
    //   dateOfBirth: new FormControl('', [Validators.required]),
    //   bloodGroup: new FormControl('', [Validators.required]),
    //   city: new FormControl('', [Validators.required]),
    //   state: new FormControl('', [Validators.required]),
    //   country: new FormControl('', [Validators.required]),
    //   address: new FormControl('', [Validators.required]),
    //   becomeADonor: new FormControl([false]),
    // });

    // below form using form builder

    this.addDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      donorFlag: [false],
    });

  }

  ngOnInit(): void {
  }

  // async login() {
  //   const account = new Account(Api.provider());

  //   const user = await account.get();

  //   if (user) {
  //     console.log('User already logged in', user);
  //     return;
  //   }

  // }

  onSubmit() {
    console.log(this.addDetailsForm.value);

    if (this.addDetailsForm.invalid) {
      return;
    }



  }

}
