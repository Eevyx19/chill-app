import type React from "react";

export interface FormInputLogin {
    username: string;
    password: string;
}

export interface FormInputRegister extends FormInputLogin {
    confirmPassword: string
}

export interface LoginErrors {
    username: boolean;
    password: boolean;
}

export interface RegisterErrors extends LoginErrors {
    confirmPassword: boolean
}

export interface FormProps {
    handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
    showPassword: boolean;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleShowPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon: string;
}

export interface FormLoginProps extends FormProps {
    errors: {
        username: boolean;
        password: boolean;
    }
}

export interface FormRegisterProps extends FormProps {
    errors: {
        username: boolean;
        password: boolean;
        confirmPassword: boolean;
    };
    showConfirmPassword: boolean;
    handleShowConfirmPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}