export default function BodyLargeMedium(props) {
    const {
        element: Element,
        className,
        children,
        ...restProps
    } = props

    return (
        <Element className={`${className} text-xs md:text-base lg:text-lg leading-(--line-140) font-medium`} {...restProps}>{children}</Element>
    )
}