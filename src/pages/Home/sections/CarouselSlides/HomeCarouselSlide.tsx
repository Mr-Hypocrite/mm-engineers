import { Flex } from "@src/components";
import { CSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { PropsWithChildren } from "react";

export interface CarouselSlideProps
    extends PropsWithChildren,
        VariantProps<typeof Flex> {
    bgImgSrc?: string;
}

const slideCss: CSS = {
    position: "relative"
};

export const HomeCarouselSlide = ( {
    bgImgSrc,
    children,
    ...props
}: CarouselSlideProps ) => {
    return (
        <Flex {...props} css={slideCss}>
            {children}
        </Flex>
    );
};
