export default function TopBadge() {
    return (
        <div className="absolute top-0 right-2 p-0.5 lg:p-1 bg-(--error-pressed) rounded-tr-xs lg:rounded-tr-sm rounded-bl-xs lg:rounded-bl-sm text-center">
            <p className="text-[6px] sm:text-[8px] md:text-xs lg:text-[14px]">Top</p>
            <p className="text-[6px] sm:text-[8px] md:text-xs lg:text-[14px]">10</p>
        </div>
    )
}