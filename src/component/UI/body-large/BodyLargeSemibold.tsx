import type { TypographyProps } from "../../../types/typograph.types"

export default function BodyLargeSemibold(props: TypographyProps) {
    const {
        element: Element,
        className,
        children,
        ...restProps
    } = props

    return (
        <Element className={`${className} text-xs md:text-base lg:text-lg leading-(--line-140) font-semibold`} {...restProps}>{children}</Element>
    )
}