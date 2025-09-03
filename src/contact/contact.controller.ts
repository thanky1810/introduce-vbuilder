import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service.js';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  submitContact(@Body() contactData: ContactForm) {
    return this.contactService.submitContact(contactData);
  }
}
