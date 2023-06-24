import { Flex, Text, Timeline } from "@src/components";

export const OurHistory = () => {
    return (
        <Flex direction="column">
            <Text
                typography={{ "@initial": "mbHeading1", "@bp1": "dtHeading1" }}
            >
                <Text css={{ fontWeight: "700" }}>Our</Text> History
            </Text>
            <Timeline />
        </Flex>
    );
};
