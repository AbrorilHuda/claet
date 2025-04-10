import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/api/user')
export class UserController {
  @Post()
  post(): string {
    return 'Post';
  }

  @Get('/example')
  get(): string {
    return 'Hello User';
  }

  @Get('/detail/:id')
  getIdParam(@Req() req: Request): string {
    return `Get id param ${req.params.id}`;
  }
  @Get('/hay')
  getNameParam(@Query('name') name: string): string {
    return `Hello ${name || 'Copeh'}`;
  }

  @Get('/sample-response')
  res(@Res() response: Response) {
    response.status(200).send({
      data: {
        id: 1,
        name: 'name',
      },
    });
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request): string {
    return `Judul buku dari blog ${request.cookies['title']}`;
  }
}
