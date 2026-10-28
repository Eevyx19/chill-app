import type { TypographyProps } from "../../../types/typograph.types"

export default function BodyMediumBold(props: TypographyProps) {
    const {
        element: Element,
        className,
        children
    } = props
    
    return (
        <Element className={`${className} text-xs md:text-base font-bold leading-(--line-140)`}>{children}</Element>
    )
}