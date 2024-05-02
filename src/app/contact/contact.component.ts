import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  borderColorGood = '#4B47FF';

  isAgreed: boolean = false;
  isFormSubmitted: boolean = false;
  mailTest = true;

  post = {
    endPoint: 'https://simonbrost.netlify.app',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
form: any;
onSubmit(contactForm: NgForm) {
  if (contactForm.valid) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          contactForm.resetForm();
          this.isFormSubmitted = true;
          setTimeout(() => {
            this.isFormSubmitted = false;
          }, 3000);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }
}
}
