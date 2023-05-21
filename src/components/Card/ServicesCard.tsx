import { Flex } from "../Flex";
import { Text } from "../Text";

export interface ServicesCardProps {
    serviceTitle: string;
    serviceDesc: string;
}

export const ServicesCard = ( {
    serviceTitle,
    serviceDesc
}: ServicesCardProps ) => {
    return (
        <Flex direction="column" gap={2}>
            <Text typography={"dtHeading3"}>{serviceTitle}</Text>
            <Text typography={"dtPara2"}>{serviceDesc}</Text>
        </Flex>
    );
};
