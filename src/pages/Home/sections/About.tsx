import { Box, Flex, Section, Text } from "@src/components";

export const About = () => {
    return (
        <Section gap={5}>
            <Text typography={"dtHeading1"}>Heading Desc About M & M</Text>
            <Flex gap={5}>
                <Text typography={"dtPara2"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, ullam dolorum ipsam, numquam tempore voluptatibus
                    fuga repellendus aliquam pariatur omnis eveniet, nam alias!
                    Unde officia laboriosam rem, magni itaque numquam, odit
                    placeat dolor, culpa eius ex eaque consequuntur ad. Ratione
                    animi modi, nihil voluptatem accusamus nisi commodi unde eos
                    accusantium.
                </Text>
                <Box>
                    <Text typography={"dtPara2"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem, ullam dolorum ipsam, numquam tempore
                        voluptatibus fuga repellendus aliquam pariatur omnis
                        eveniet, nam alias! Unde officia laboriosam rem, magni
                        itaque numquam, odit placeat dolor, culpa eius ex eaque
                        consequuntur ad. Ratione animi modi, nihil voluptatem
                        accusamus nisi commodi unde eos accusantium.
                    </Text>
                    <button>More...</button>
                </Box>
            </Flex>
        </Section>
    );
};
