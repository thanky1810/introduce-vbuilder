import { Controller, Get } from '@nestjs/common';
import { ContentService } from './content.service.js';

@Controller('api/content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('news')
  getNews() {
    return this.contentService.getNews();
  }

  @Get('blog')
  getBlog() {
    return this.contentService.getBlog();
  }

  @Get('hero')
  getHeroContent() {
    return this.contentService.getHeroContent();
  }
}
