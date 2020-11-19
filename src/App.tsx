import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import app from 'firebase/app';
import 'firebase/auth';
import { SpinnerComponent } from 'react-element-spinner';
import { APP_CONSTANTS } from 'config/app.config';
import HomeComponent from 'views/home/home.component';
import LogInComponent from 'views/log-in/log-in.component';

const App: FunctionComponent = (): ReactElement => {
    const [ user, setUser ] = useState<app.User | null>();

    useEffect(() => {
        app.auth().onAuthStateChanged((userInfo: app.User | null) => setUser(userInfo));
    }, []);

    if (user === undefined) {
        return <SpinnerComponent loading={true} position="global"/>;
    }

    return <BrowserRouter>
        <Switch>
            <Route path={APP_CONSTANTS.ROUTES.HOME} render={() => user ? <HomeComponent/> : <Redirect to={APP_CONSTANTS.ROUTES.LOG_IN}/>}/>
            <Route path={APP_CONSTANTS.ROUTES.LOG_IN} render={() => !user ? <LogInComponent/> : <Redirect to={APP_CONSTANTS.ROUTES.HOME}/>}/>
            <Redirect to={APP_CONSTANTS.ROUTES.HOME}/>
        </Switch>
    </BrowserRouter>;
}

export default App;
