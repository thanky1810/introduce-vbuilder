import { Injectable } from '@nestjs/common';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class ContactService {
  submitContact(contactData: ContactForm) {
    // In a real application, you would save this to a database
    // and possibly send an email notification
    console.log('Contact form submitted:', contactData);

    return {
      status: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        submittedAt: new Date().toISOString(),
        name: contactData.name,
        email: contactData.email,
      },
    };
  }
}
