// src/auth/auth.controller.ts
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() req: { username: string; password: string }) {
    return this.authService.validateUser(req.username, req.password)
      .then((user) => {
        if (!user) {
          return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
      });
  }
}
