import Logo from '../assets/images/Logo.png'
import FormInput from '../component/UI/form/FormInput'
import GoogleIcon from '../assets/images/google-logo.png'
import { Link } from 'react-router'
import { useState } from 'react'
import Button from '../component/UI/Button'
import Input from '../component/UI/Input'
import { Eye, EyeOff } from 'lucide-react'
import BodyMediumRegular from '../component/UI/body-medium/BodyMediumRegular'
import FormAction from '../component/UI/form/FormAction'
import Heading3 from '../component/UI/heading/Heading3'
import BodyMediumMedium from '../component/UI/body-medium/BodyMediumMedium'


const LoginPage = () => {
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState({
        username: false,
        password: false
    })
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(prev => !prev)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target

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

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors({
            username: formLogin.username.trim() === "",
            password: formLogin.password.trim() === ""
        })

        console.log(formLogin)

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4" action="" method="post">
                <FormInput
                    id="username"
                    label="Username"
                    isError={errors.username}
                    errorMsg="Username is required"
                >
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleOnChange}
                        placeholder="Masukan Username"
                    />
                </FormInput>
                <div className="flex flex-col gap-1 md:gap-2">
                    <FormInput
                        id="password"
                        label="Kata Sandi"
                        isError={errors.password}
                        errorMsg="Password is required"
                    >
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            onChange={handleOnChange}
                            placeholder="Masukan Kata Sandi"
                        />
                        <Button
                            onClick={handleShowPassword}
                            className="absolute top-[42%] right-3 sm:right-4 md:right-5 focus:boder-0 cursor-pointer"
                            type="button"
                        >
                            {showPassword ? <EyeOff className="size-3 sm:size-4 md:size-5" /> : <Eye className="size-3 sm:size-4 md:size-5" />}
                        </Button>
                    </FormInput>
                    <div className="flex justify-between text-xs sm:text-base leading-(--line-140)">
                        <BodyMediumRegular
                            element="p"
                            className="text-(--secondary-text)"
                        >
                            Belum punya akun?
                            <Link to={'/register'}>
                                <BodyMediumMedium
                                    element="span"
                                    className="text-(--primary-text)"
                                > Daftar
                                </BodyMediumMedium>
                            </Link>
                        </BodyMediumRegular>
                        <BodyMediumMedium
                            element="span"
                            className="text-(--primary-text)"
                        >
                            Lupa kata sandi?
                        </BodyMediumMedium>
                    </div>
                </div>
                <FormAction
                    label="Masuk"
                    iconImage={GoogleIcon}
                />
            </form>
        </div>


    )
}

export default LoginPage