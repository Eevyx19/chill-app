export default function Heading5(props: import("../../../types/typograph.types").TypographyProps) {
    const {
        element: Element,
        children,
        className
    } = props
    return (
        <Element className={`${className} text-base md:text-lg lg:text-xl leading-(--line-140) md:leading-(--line-120) font-bold`}>{children}</Element>
    )
}