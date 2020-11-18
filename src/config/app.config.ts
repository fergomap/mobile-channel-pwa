interface AppConfig {
    ROUTES: {
        HOME: string;
        LOG_IN: string;
    };
    TIME_VALUES: {
        HOURS_PER_DAY: number;
        SECONDS_PER_DAY: number;
        SECONDS_PER_HOUR: number;
        SECONDS_PER_MILLISECOND: number;
        SECONDS_PER_MINUTE: number;
    };
}

export const APP_CONSTANTS: AppConfig = {
    ROUTES: {
        HOME: '/home',
        LOG_IN: '/log-in'
    },
    TIME_VALUES: {
        HOURS_PER_DAY: 24,
        SECONDS_PER_DAY: 84600,
        SECONDS_PER_HOUR: 3600,
        SECONDS_PER_MILLISECOND: 1000,
        SECONDS_PER_MINUTE: 60
    }
};
