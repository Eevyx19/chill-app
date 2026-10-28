import Logo from '../assets/images/Logo.png'
import React, { useState } from 'react'
import BodyMediumRegular from '../component/UI/body-medium/BodyMediumRegular'
import GoogleIcon from '../assets/images/google-logo.png'
import Heading3 from '../component/UI/heading/Heading3'
import FormRegister from '../component/UI/form/FormRegister'
import type { FormInputRegister, RegisterErrors } from '../types/auth.types'

const RegisterPage = () => {
    const [formRegister, setFormRegister] = useState<FormInputRegister>({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState<RegisterErrors>({
        username: false,
        password: false,
        confirmPassword: false
    })

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setFormRegister((prev) => ({
            ...prev,
            [name]: value
        }))

        if (value.trim() !== "") {
            setErrors((prev) => ({
                ...prev,
                [name]: false
            }))
        }

    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        setErrors({
            username: formRegister.username.trim() === "",
            password: formRegister.password.trim() === "",
            confirmPassword: formRegister.confirmPassword.trim() === ""
        })

        console.log(errors.username)

        if (formRegister.confirmPassword !== formRegister.password) {
            console.log("Kata Sandi tidak sama")
        }

    }

    return (
        <div className="w-[95%] max-w-132 bg-(--container-box) rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 p-6 sm:p-7 md:p-8 lg:p-10">
            <div className="flex justify-center items-center gap-1 md:gap-2">
                <img className="w-6 sm:w-8 md:w-10 lg:w-12 h-5 sm:h-6 md:h-8 lg:h-10" src={Logo} alt="chill app logo" />
                <span className="font-londrina text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-(--line-110)">CHILL</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center items-center">
                <Heading3 element="h1">
                    Daftar
                </Heading3>
                <BodyMediumRegular
                    element="p"
                >
                    Selamat datang!
                </BodyMediumRegular>
            </div>
            <FormRegister
                handleSubmit={handleSubmit}
                errors={errors}
                showPassword={showPassword}
                showConfirmPassword={showConfirmPassword}
                handleOnChange={handleOnChange}
                handleShowPassword={handleShowPassword}
                handleShowConfirmPassword={handleShowConfirmPassword}
                icon={GoogleIcon}
            />
        </div>
    )
}
export default RegisterPage