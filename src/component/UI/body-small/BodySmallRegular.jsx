export default function BodySmallRegular(props) {
    const {
        element: Element,
        className,
        children
    } = props

    return (
        <Element className={`${className} text-xs lg:text-[14px]`}>{children}</Element>
    )
}