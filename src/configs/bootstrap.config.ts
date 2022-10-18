import { BadRequestException, INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '~app.module';
import { env } from './env.config';

export class Bootstrap {
    protected app: INestApplication;

    async init() {
        this.app = await NestFactory.create(AppModule);
    }

    setupCors() {
        const regexWhiteListDomains = env.WHITELIST_DOMAINS.map((item) => {
            return new RegExp(`^${item.replace(/\./g, '\\.').replace(/\*/g, '.*')}$`);
        });

        if (!regexWhiteListDomains.length) {
            return;
        }
        this.app.enableCors({
            origin: function (requestOrigin, callback) {
                if (!requestOrigin) {
                    return callback(null, true);
                }
                requestOrigin = requestOrigin.replace('https://', '').replace('http://', '');
                const isValidOrigin = regexWhiteListDomains.some((item) => item.test(requestOrigin));
                if (isValidOrigin) {
                    return callback(null, true);
                } else {
                    return callback(new BadRequestException(`No CORS allowed. Origin: ${requestOrigin}`), false);
                }
            }
        });
    }

    async startApp() {
        await this.app.listen(env.APP_PORT, async () => {
            console.log(`Server started on ${await this.app.getUrl()} 🚀`);
        });
    }
}
