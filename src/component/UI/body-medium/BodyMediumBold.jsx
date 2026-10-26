export default function BodyMediumBold(props) {
    const {
        element: Element,
        className,
        children
    } = props
    
    return (
        <Element className={`${className} text-xs md:text-base font-bold leading-(--line-140)`}>{children}</Element>
    )
}