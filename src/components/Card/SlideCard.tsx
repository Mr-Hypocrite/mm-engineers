import { CSS, PropsWithCSS } from "@src/styles";
import { VariantProps } from "@stitches/react";
import { Flex } from "../Flex";
import { Text } from "../Text";

export const slideCardCss: CSS = {
    backgroundColor: "transparent",
    backdropFilter: "blur(20px)",
    borderRadius: "$2",
    maxWidth: "fit-content",
    maxHeight: "max-content",
    overflowWrap: "break-word",
    p: "$3",
    position: "absolute",
    top: "50%",
    left: "20%"
};

export interface SlideCardProps
    extends VariantProps<typeof Flex>,
        PropsWithCSS {
    title?: string;
    subTitle?: string;
    desc?: string;
    link?: string;
}

export const SlideCard = ( {
    title,
    subTitle,
    desc,
    link,
    ...props
}: SlideCardProps ) => {
    return title ? (
        <Flex direction="column" gap={2} css={slideCardCss} {...props}>
            <Text typography={"dtHeading1"}>{title}</Text>
            <Text typography={"dtHeading3"}>{subTitle}</Text>
            <Text typography={"dtPara2"}>{desc}</Text>
            <button>More...</button>
        </Flex>
    ) : null;
};
