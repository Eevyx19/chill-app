import type { TypographyProps } from "../../../types/typograph.types"

export default function Heading6(props: TypographyProps) {
    const {
        element: Element,
        className,
        children,
        ...restProps
    } = props
    return (
        <Element className={`${className} text-[14px] md:text-base lg:text-lg leading-(--line-120) font-bold`} {...restProps}>{children}</Element>
    )
}