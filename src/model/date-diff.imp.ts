/* istanbul ignore file */
import DateDiff from './date-diff';

export default class DateDiffImp implements DateDiff {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;

    constructor(days: number = 0, hours: number = 0, minutes: number = 0, seconds: number = 0) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}
