import React, { FunctionComponent, ReactElement } from 'react';
import './button.component.scss';

interface ButtonComponentProps {
    label: string;
    onClick?: Function;
    type: 'button' | 'submit';
}

const ButtonComponent: FunctionComponent<ButtonComponentProps> = ({ label, onClick, type }): ReactElement => {
    return <button className="button-component" type={type} onClick={() => onClick && onClick()} data-testid="button">
        { label }
    </button>;
}

export default ButtonComponent;
