import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from "@angular/forms";
import * as emailjs from 'emailjs-com';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
contactForm: FormGroup;
  constructor(private fb: FormBuilder) {   }
    
  ngOnInit() {
    this.contactForm = this.fb.group({
      contact_number: [''],
      user_name: [''],
      user_email: [''],
      text: ['']
    });
  }
  

  Enviar() {
    var form = this.contactForm.value;

    emailjs.send('gmail','contact_form', form, 'user_pcfwWkO9wtigJu4XQdQly' )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }
}
