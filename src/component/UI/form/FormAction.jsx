import Button from "../Button";
import BodyMediumSemibold from '../body-medium/BodyMediumSemibold';
import BodySmallMedium from "../body-small/BodySmallMedium";

export default function FormAction(props) {

    
    const {
        label,
        iconImage
    } = props
    
    const hoverBackgrounButton = label === "Masuk" ? "hover:bg-(--primary-default)"
        : "hover:bg-(--success-default)";

    return (
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
            <Button
                className={`${hoverBackgrounButton} w-full bg-(--extra-background) md:border border-(--outline-border) border-[0.5px] font-semibold px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4`}
                type="submit"
            >
                <BodyMediumSemibold
                    element="span"
                    className="text-(--primary-text)"
                >
                    {label}
                </BodyMediumSemibold>
            </Button>
            <BodySmallMedium
                element="span"
                className="text-(--disable-text)"
            >
                Atau
            </BodySmallMedium>
            <Button
                className="flex justify-center items-center gap-2 md:gap-4 lg:gap-5 w-full bg-transparent md:border border-(--outline-border) border-[0.5px] font-semibold px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4"
                type="button"
            >
                <img className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" src={iconImage} alt="icon" />
                <BodyMediumSemibold
                    element="span"
                >
                    {label} dengan Google
                </BodyMediumSemibold>
            </Button>
        </div>
    )
}