import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')  signupForm: NgForm;
  answer="";
  default='pet';
  genders=['male','female'];
  showForm=true;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      username:suggestedName
    });
    // this.signupForm.form.setValue({
    //   username:suggestedName
    // })

    //console.log(this.signupForm.form.value.username);
  }
  onSubmit(){
       this.showForm=!this.showForm;
       console.log(this.signupForm);
  }
}
