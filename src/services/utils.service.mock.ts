/* istanbul ignore file */
import DateDiffImp from 'model/date-diff.imp';

export const mockUtilsService = (service: any): void => {
    service.calcDateDiff = jest.fn().mockReturnValue(new DateDiffImp());
};
