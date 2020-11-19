import React, { FunctionComponent, ReactElement } from 'react';
import './input.component.scss';
import { ValidationRules } from 'react-hook-form';

interface InputComponentProps {
    error?: string;
    field: string;
    label: string;
    register: Function;
    rules: ValidationRules;
    type: string;
}

const InputComponent: FunctionComponent<InputComponentProps> = ({ error, field, label, register, rules, type }): ReactElement => {
    return <div className="input-component">
        <div className="input-wrapper">
            <input placeholder={label} type={type} name={field} ref={register(rules)} data-testid="input" />
            <label>{ label }</label>
        </div>
        { error && <small className="error">{ error }</small>}
    </div>;
}

export default InputComponent;
