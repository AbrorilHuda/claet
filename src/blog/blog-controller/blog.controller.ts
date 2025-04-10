import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/api/blog')
export class BlogController {
  @Get('/set-cookie')
  setCookie(@Query('title') title: string, @Res() response: Response) {
    if (title == undefined) {
      response.status(401).send({
        message:
          'cookie tidak berhasil di set karena tidak mengirim query data',
      });
    }
    response.cookie('title', title);
    response.status(200).send({
      message: 'berhasil sate cookie',
    });
  }
}
