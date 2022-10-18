import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app.module';

export class Bootstrap {
    protected app: INestApplication;

    async init() {
        this.app = await NestFactory.create(AppModule);
    }

    async startApp() {
        await this.app.listen(3008, async () => {
            console.log(`Server started on ${await this.app.getUrl()} 🚀`);
        });
    }
}
