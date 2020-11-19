import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import app from 'firebase/app';
import ButtonComponent from 'components/button/button.component';
import CounterComponent from 'components/counter/counter.component';
import { firebaseLogOut } from 'services/auth.service';
import { calcDateDiff } from 'services/utils.service';
import DateDiff from 'model/date-diff';
import DateDiffImp from 'model/date-diff.imp';
import './home.component.scss';

const HomeComponent: FunctionComponent = (): ReactElement => {
    const [ dateDiff, setDateDiff ] = useState<DateDiff>(new DateDiffImp());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDateDiff(calcDateDiff(new Date(), new Date(app.auth().currentUser?.metadata.lastSignInTime || '')));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <section className="home-component">
        <div className="container">
            <h1 className="title">Welcome!</h1>
            <p className="subtitle">The last time you accessed was</p>
            <div className="counters">
                <div className="counter-wrapper">
                    <CounterComponent count={dateDiff.days} label="days" />
                </div>
                <div className="counter-wrapper">
                    <CounterComponent count={dateDiff.hours} label="hours" />
                </div>
                <div className="counter-wrapper">
                    <CounterComponent count={dateDiff.minutes} label="minutes" />
                </div>
                <div className="counter-wrapper">
                    <CounterComponent count={dateDiff.seconds} label="seconds" />
                </div>
            </div>
            <ButtonComponent label="LOG OUT" onClick={firebaseLogOut} type="button"/>
        </div>
    </section>;
}

export default HomeComponent;
