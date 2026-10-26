export default function BodySmallMedium(props) {
    const {
        element: Element,
        className,
        children
    } = props

    return (
        <Element className={`${className} text-[10px] md:text-xs lg:text-[14px] font-medium`}>{children}</Element>
    )
}