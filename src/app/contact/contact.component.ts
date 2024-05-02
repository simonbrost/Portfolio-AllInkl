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

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      contactForm.resetForm();
      this.isFormSubmitted = true;
      setTimeout(() => {
        this.isFormSubmitted = false;
      }, 3000);
    }
  }
}
