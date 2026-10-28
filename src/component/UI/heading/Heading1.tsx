import type { TypographyProps } from "../../../types/typograph.types"


export default function Heading1(props: TypographyProps) {
    const {
        element: Element,
        children,
        className
    } = props
    return (
        <Element className={`${className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-(--line-120) md:leading-(--line-110)`}>{children}</Element>
    )
}