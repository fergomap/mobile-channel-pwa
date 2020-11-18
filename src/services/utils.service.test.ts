import { calcDateDiff } from "./utils.service";
import DateDiffImp from "model/date-diff.imp";

describe('UtilsService', () => {
    describe('calcDateDiff', () => {
        it('should return a DateDiff with the difference between the passed dates', () => {
            expect(calcDateDiff(new Date(), new Date())).toEqual(new DateDiffImp());
            expect(calcDateDiff(new Date(2020, 1, 10, 10, 20, 30), new Date(2020, 1, 8, 5, 40, 20))).toEqual(new DateDiffImp(2, 5, 40, 10));
        });
    });
});
