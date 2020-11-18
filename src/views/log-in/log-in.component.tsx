import React, { FunctionComponent, ReactElement, useState } from 'react';
import './log-in.component.scss';
import ButtonComponent from 'components/button/button.component';
import { useForm } from 'react-hook-form';
import InputComponent from 'components/input/input.component';
import { FORM_CONSTANTS } from 'config/form.config';
import { firebaseLogIn } from 'services/auth.service';
import { SpinnerComponent } from 'react-element-spinner';

interface LogInFormData {
	email: string,
	password: string,
}

const LogInComponent: FunctionComponent = (): ReactElement => {
	const { register, handleSubmit, errors } = useForm<LogInFormData>();
    const [ generalError, setGeneralError ] = useState<string>('');
    const [ loading, setLoading ] = useState<boolean>(false);

    const logIn = (formData: LogInFormData): void => {
        setLoading(true);

        firebaseLogIn(formData.email, formData.password)
            .catch(e => setGeneralError(e.message))
            .finally(() => setLoading(false));
    };

    return <section className="log-in-component">
        { loading && <SpinnerComponent loading={true} position="global"/> }
        <img alt="lock" src={`${process.env.PUBLIC_URL}/lock.png`} />
        <form className="form-container" noValidate={true} onSubmit={handleSubmit(logIn)}>
            <InputComponent error={errors.email?.message} field="email" label="Email" register={register} rules={FORM_CONSTANTS.VALIDATION_RULES.EMAIL} type="email" />
            <InputComponent error={errors.password?.message} field="password" label="Password" register={register} rules={FORM_CONSTANTS.VALIDATION_RULES.PASSWORD} type="password" />
            <ButtonComponent label="Log In" type="submit"/>
            { generalError && <p className="auth-error">{ generalError }</p> }
        </form>
    </section>;
}

export default LogInComponent;
