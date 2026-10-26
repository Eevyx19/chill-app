import { ArrowLeft, ArrowRight,  } from "lucide-react";
import Button from "./UI/Button";
import Heading3 from "./UI/heading/Heading3";

export default function Carousel(props) {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-5 md:py-7.5 lg:py-10 flex flex-col gap-5 md:gap-7 lg:gap-8">
            <Heading3 element="h2">
                {props.title}
            </Heading3>
            <ul className="relative">
                <Button
                    className="absolute hidden md:block -left-5.5 top-[40%] z-30 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                >
                    <ArrowLeft className="size-4 lg:size-6" />
                </Button>
                <Button
                    className="absolute hidden md:block -right-5.5 top-[40%] z-30 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                >
                    <ArrowRight className="size-4 lg:size-6" />
                </Button>
                <div className="flex gap-6 overflow-x-scroll scrollbar-thin">
                    {props.children}
                </div>
            </ul>
        </section>
    )
}