import DateDiff from 'model/date-diff';
import { APP_CONSTANTS } from 'config/app.config';
import DateDiffImp from 'model/date-diff.imp';

export const calcDateDiff = (startDate: Date, endDate: Date): DateDiff => {
    let difference = Math.abs(startDate.getTime() - endDate.getTime()) / APP_CONSTANTS.TIME_VALUES.SECONDS_PER_MILLISECOND;

    const days = Math.floor(difference / APP_CONSTANTS.TIME_VALUES.SECONDS_PER_DAY);
    difference -= days * APP_CONSTANTS.TIME_VALUES.SECONDS_PER_DAY;

    const hours = Math.floor(difference / APP_CONSTANTS.TIME_VALUES.SECONDS_PER_HOUR) % APP_CONSTANTS.TIME_VALUES.HOURS_PER_DAY;
    difference -= hours * APP_CONSTANTS.TIME_VALUES.SECONDS_PER_HOUR;

    const minutes = Math.floor(difference / APP_CONSTANTS.TIME_VALUES.SECONDS_PER_MINUTE) % APP_CONSTANTS.TIME_VALUES.SECONDS_PER_MINUTE;
    difference -= minutes * APP_CONSTANTS.TIME_VALUES.SECONDS_PER_MINUTE;

    const seconds = Math.floor(difference % APP_CONSTANTS.TIME_VALUES.SECONDS_PER_MINUTE);

    return new DateDiffImp(days, hours, minutes, seconds);
};
