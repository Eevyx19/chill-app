import type { ReactNode } from "react";

interface FormInputProps {
    id: string;
    label: string
    isError: boolean;
    errorMsg: string;
    children: ReactNode;
}

export default function FormInput(props: FormInputProps) {
    const { id, label, isError, errorMsg, children } = props

    return (
        <div className="flex flex-col gap-1 md:gap-1.5">
            <label htmlFor={id} className="text-xs sm:text-base md:text-lg font-medium leading-(--line-140)">{label}</label>
            <div className="w-full relative h-full">
                {children}
            </div>
            <span className={`${isError ? "visible" : "hidden"} text-xs md:text-base text-(--error-pressed)`}>* {errorMsg}</span>
        </div>
    )
}
