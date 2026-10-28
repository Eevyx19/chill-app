import Logo from '../assets/images/Logo.png'
import GoogleIcon from '../assets/images/google-logo.png'
import { useState } from 'react'
import BodyMediumRegular from '../component/UI/body-medium/BodyMediumRegular'
import Heading3 from '../component/UI/heading/Heading3'
import type { FormInputLogin, LoginErrors } from '../types/auth.types'
import FormLogin from '../component/UI/form/FormLogin'


const LoginPage = () => {
    const [formLogin, setFormLogin] = useState<FormInputLogin>({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState<LoginErrors>({
        username: false,
        password: false
    })

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setFormLogin((prev) => ({
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

        const payload = {
            username: formLogin.username,
            password: formLogin.password
        }
        
        console.log(payload)

        setErrors({
            username: formLogin.username.trim() === "",
            password: formLogin.password.trim() === ""
        })

    }

    return (
        <div className="w-[90%] max-w-132 bg-(--container-box) rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-10 p-6 sm:p-7 md:p-8 lg:p-10">
            <div className="flex justify-center items-center gap-1 md:gap-2">
                <img className="w-6 sm:w-8 md:w-10 lg:w-12 h-5 sm:h-6 md:h-8 lg:h-10" src={Logo} alt="chill app logo" />
                <span className="font-londrina text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-(--line-110)">CHILL</span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2 justify-center items-center">
                <Heading3 element="h1">
                    Masuk
                </Heading3>
                <BodyMediumRegular element="p">
                    Selamat datang kembali!
                </BodyMediumRegular>
            </div>
            <FormLogin
                handleSubmit={handleSubmit}
                errors={errors}
                showPassword={showPassword}
                handleOnChange={handleOnChange}
                handleShowPassword={handleShowPassword}
                icon={GoogleIcon}
            />
        </div>


    )
}

export default LoginPage