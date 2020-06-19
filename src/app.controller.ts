import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { User } from './auth/user.decorator';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  homeView() {
    return { title: 'Home page' };
  }

  @Get('about')
  @Render('about')
  aboutView() {
    return { title: 'About page' };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @Render('profile')
  profileView(@User() user) {
    console.log('user', user); // TODO get the user from the "db"
    return { title: 'Your profile', user: { name: 'Alex Price' } };
  }
}
