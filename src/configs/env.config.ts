import dotenv from 'dotenv';

dotenv.config();

export enum AppEnvEnums {
    LOCAL = 'local',
    DEVELOPMENT = 'development',
    TEST = 'test',
    STAGING = 'staging',
    QA = 'qa',
    UAT = 'uat',
    PRODUCTION = 'production'
}

export const env = {
    APP_PORT: process.env.APP_PORT,
    APP_ENV: process.env.APP_ENV as AppEnvEnums,
    ROOT_PATH: undefined
};

export const isProduction = (): boolean => env.APP_ENV === AppEnvEnums.PRODUCTION;
export const isLocal = (): boolean => env.APP_ENV === AppEnvEnums.LOCAL;
export const isTest = (): boolean => process.env.NODE_ENV === 'test';
