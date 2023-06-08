import { CSS } from "@src/styles";
import { Avatar } from "../Avatar/Avatar";
import { Flex } from "../Flex";
import { Text } from "../Text";

const testimonialCardCss: CSS = {
    backgroundColor: "$neutralColor",
    borderRadius: "$1",
    maxWidth: "$testimonialCardWidth",
    m: "$7 auto",
    p: "$2 $4"
};

export interface TestimonialCardProps {
    src?: string;
    testimonial: string;
    name?: string;
    designation?: string;
    organisation?: string;
}

export const TestimonialCard = ( {
    testimonial,
    designation,
    name,
    organisation,
    src
}: TestimonialCardProps ) => {
    return (
        <Flex center direction="column" gap={2} css={testimonialCardCss}>
            <Avatar src={src} />
            <Text align={"center"} typography={{ "@initial": "mbPara1" }}>
                {testimonial}
            </Text>
        </Flex>
    );
};
