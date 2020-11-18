/* istanbul ignore file */
import { ValidationRules } from 'react-hook-form';

interface FormConfig {
    VALIDATION_RULES: {
        EMAIL: ValidationRules;
        PASSWORD: ValidationRules;
    };
}

export const FORM_CONSTANTS: FormConfig = {
    VALIDATION_RULES: {
        EMAIL: {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email'
            },
            required: 'Required field'
        },
        PASSWORD: {
            required: 'Required field'
        }
    }
};
