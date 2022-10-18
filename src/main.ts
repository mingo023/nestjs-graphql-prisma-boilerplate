// eslint-disable-next-line simple-import-sort/imports
import { env } from '~configs/env.config'; // Should be on top
import { Bootstrap } from '~configs/bootstrap.config';

env.ROOT_PATH = __dirname;

async function bootstrap() {
    const bootstrap = new Bootstrap();
    await bootstrap.init();
    bootstrap.setupCors();
    await bootstrap.startApp();
}
bootstrap();
