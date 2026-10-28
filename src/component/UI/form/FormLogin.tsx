import { Eye, EyeOff } from "lucide-react";
import BodyMediumRegular from "../body-medium/BodyMediumRegular";
import Button from "../Button";
import Input from "../Input";
import FormInput from "./FormInput";
import { Link } from "react-router";
import BodyMediumMedium from "../body-medium/BodyMediumMedium";
import FormAction from "./FormAction";
import type { FormLoginProps } from "../../../types/auth.types";


export default function FormLogin(props: FormLoginProps) {
    const {
        handleSubmit,
        errors,
        showPassword,
        handleOnChange,
        handleShowPassword,
        icon
    } = props
    return (
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
                        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-5 focus:boder-0 cursor-pointer"
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
                iconImage={icon}
                variant="login"
            />
        </form>
    )
}