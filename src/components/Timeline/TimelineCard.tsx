import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { BsCircle } from "react-icons/bs";

export const timelineCardCss: CSS = {
    flex: 1,
    maxWidth: "calc($mobileS - 30px)",
    borderLeftWidth: "4px",
    borderLeftColor: "$neutralColor",
    borderLeftStyle: "dashed",
    p: "$5",
    position: "relative",
    transform: "translateX(-2px)",

    [ `& .circle` ]: {
        backgroundColor: "$baseColor",
        left: 0,
        position: "absolute",
        transform: "translateX(-55%)"
    },
    "@bp1": {
        maxWidth: "calc($mobileL + 50px)"
    },
    "@bp2": {
        maxWidth: "calc($mobileL + 100px)"
    }
};

export interface TimelineCardProps {
    title?: string;
    description?: string;
    inverse?: boolean;
}

export const TimelineCard = ( { inverse }: TimelineCardProps ) => {
    const screenWidth = window.innerWidth;

    const timelineCardInverseCss: CSS = {
        borderLeftWidth: "unset",
        borderLeftColor: "unset",
        borderLeftStyle: "unset",
        borderRightWidth: "4px",
        borderRightColor: "$neutralColor",
        borderRightStyle: "dashed",
        transform: "translateX(2px)",
        [ `& .circle` ]: {
            backgroundColor: "$baseColor",
            right: 0,
            position: "absolute",
            transform: "translateX(55%)"
        }
    };

    return (
        <Flex
            direction="column"
            css={
                screenWidth > 768
                    ? !inverse
                        ? { ...timelineCardCss, ...timelineCardInverseCss }
                        : { ...timelineCardCss }
                    : { ...timelineCardCss }
            }
            align={{
                "@initial": "start",
                "@bp2": `${!inverse ? "end" : "start"}`
            }}
        >
            <BsCircle
                color="var(--colors-neutralColor)"
                size={40}
                className="circle"
            />
            <Text typography="dtHeading3">Heading 1</Text>
            <Text
                align={{
                    "@initial": "left",
                    "@bp2": `${!inverse ? "right" : "left"}`
                }}
                typography="dtPara2"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                aperiam.
            </Text>
        </Flex>
    );
};
