import { Flex, Text } from "@src/components";

export const Team = () => {
    return (
        <Flex direction={"column"}>
            <Text typography={"dtHeading1"}>
                Meet the <Text css={{ fontWeight: "700" }}>Team</Text>
            </Text>
        </Flex>
    );
};
