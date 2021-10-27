import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'availity-registration';
  data: registrationData = {};

  onSubmit(form: any){
    console.log(form.value);
  }
}

interface registrationData {
  firstName?: string;
  lastName?: string;
  npiNumber?: string;
  businessAddress?: string;
  phoneNumber?: string;
  email?: string;
}


