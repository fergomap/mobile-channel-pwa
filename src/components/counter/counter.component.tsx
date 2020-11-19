import React, { FunctionComponent, ReactElement } from 'react';
import './counter.component.scss';

interface CounterComponentProps {
    count: number;
    label: string;
}

const CounterComponent: FunctionComponent<CounterComponentProps> = ({ count, label }): ReactElement => {
    return <div className="counter-component">
        <p className="counter">{ String(count).padStart(2, '0') }</p>
        <p className="counter-label">{ label }</p>
    </div>;
}

export default CounterComponent;
