import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import './home.component.scss';
import ButtonComponent from 'components/button/button.component';
import CounterComponent from 'components/counter/counter.component';
import app from 'firebase/app';
import { firebaseLogOut } from 'services/auth.service';
import { calcDateDiff } from 'services/utils.service';
import DateDiffImp from 'model/date-diff.imp';
import DateDiff from 'model/date-diff';

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
            <h1>Welcome!</h1>
            <p>The last time you accessed was</p>
            <div className="counters">
                <CounterComponent count={dateDiff.days} label="days" />
                <CounterComponent count={dateDiff.hours} label="hours" />
                <CounterComponent count={dateDiff.minutes} label="minutes" />
                <CounterComponent count={dateDiff.seconds} label="seconds" />
            </div>
            <ButtonComponent label="LOG OUT" onClick={firebaseLogOut} type="button"/>
        </div>
    </section>;
}

export default HomeComponent;
