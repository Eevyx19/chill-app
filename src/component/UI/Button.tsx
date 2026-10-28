import type { ComponentPropsWithoutRef, ReactNode } from "react"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
}

export default function Button (props: ButtonProps){
    const {
        children,
        className,
        type,
        ...restProps
    } = props
    return (
        <button {...restProps} className={`${className} rounded-2xl sm:rounded-3xl md:rounded-4xl cursor-pointer leading-(--line-140)`} type={type}>
            {children}
        </button>
    )
}
