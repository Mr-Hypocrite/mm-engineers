import { Box, Button, Flex, Section, Text } from "@src/components";

export const About = () => {
    return (
        <Section gap={5}>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp1": "dtHeading1" }}
            >
                Heading Desc About{" "}
                <Text css={{ wordBreak: "keep-all" }}>M & M</Text>
            </Text>
            <Flex gap={5} wrap={"wrap"}>
                <Text
                    typography={"dtPara2"}
                    css={{ flex: 1, minWidth: "calc($mobileS -$3)" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, ullam dolorum ipsam, numquam tempore voluptatibus
                    fuga repellendus aliquam pariatur omnis eveniet, nam alias!
                    Unde officia laboriosam rem, magni itaque numquam, odit
                    placeat dolor, culpa eius ex eaque consequuntur ad. Ratione
                    animi modi, nihil voluptatem accusamus nisi commodi unde eos
                    accusantium.
                </Text>
                <Box css={{ flex: 1, minWidth: "calc($mobileS -$3)" }}>
                    <Text
                        typography={{
                            "@initial": "mbPara1",
                            "@bp1": "dtPara2"
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem, ullam dolorum ipsam, numquam tempore
                        voluptatibus fuga repellendus aliquam pariatur omnis
                        eveniet, nam alias! Unde officia laboriosam rem, magni
                        itaque numquam, odit placeat dolor, culpa eius ex eaque
                        consequuntur ad. Ratione animi modi, nihil voluptatem
                        accusamus nisi commodi unde eos accusantium.
                    </Text>
                    <Button type={"text"}>More...</Button>
                </Box>
            </Flex>
        </Section>
    );
};
