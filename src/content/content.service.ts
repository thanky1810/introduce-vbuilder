import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getNews() {
    return {
      status: 'success',
      data: [
        {
          id: 1,
          title: 'Revolutionary VR Technology Breakthrough',
          excerpt:
            'Latest advances in virtual reality are changing the way we interact with digital worlds.',
          date: '2025-01-20',
          category: 'Technology',
        },
        {
          id: 2,
          title: 'AI Integration in Virtual Environments',
          excerpt:
            'How artificial intelligence is enhancing virtual reality experiences.',
          date: '2025-01-18',
          category: 'Innovation',
        },
      ],
    };
  }

  getBlog() {
    return {
      status: 'success',
      data: [
        {
          id: 1,
          title: 'The Future of Virtual Technology',
          content:
            'Exploring the endless possibilities of virtual reality and augmented reality technologies...',
          author: 'Tech Expert',
          date: '2025-01-15',
        },
        {
          id: 2,
          title: 'Building Immersive Experiences',
          content:
            'Best practices for creating engaging virtual environments that captivate users...',
          author: 'UX Designer',
          date: '2025-01-10',
        },
      ],
    };
  }

  getHeroContent() {
    return {
      status: 'success',
      data: {
        title: 'V.Builder',
        subtitle: 'Aenean vulputate elit id enim pretium.',
        description:
          'The space for builders – sparking creativity, fostering connection, driving projects further.',
        buttonText: 'Read more',
      },
    };
  }
}
