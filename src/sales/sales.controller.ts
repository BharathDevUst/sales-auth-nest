// src/sales/sales.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('sales')
export class SalesController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllSales() {
    return 'This route is secured with JWT';
  }
}
