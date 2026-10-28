import type { TypographyProps } from "../../../types/typograph.types"

export default function BodyMediumSemibold(props: TypographyProps) {
    const {
        element: Element,
        className,
        children
    } = props
    
    return (
        <Element className={`${className} text-xs md:text-base leading-(--line-140) font-semibold`}>{children}</Element>
    )
}