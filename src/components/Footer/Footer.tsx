import { footerData } from "@src/data";
import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { IframeContainer, IframeContainerBox } from "../IframeContainer";
import { Section } from "../Section";
import { Text } from "../Text";

const footerCss: CSS = {
    backgroundColor: "$secondaryColor"
};

const locationSrc: string =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120948.8653350624!2d73.6904226972656!3d18.679603999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c81d4431432d%3A0xd0e5f75b38f01bfc!2sM%26M%20Engineers!5e0!3m2!1sen!2sin!4v1685252986035!5m2!1sen!2sin";

export const Footer = () => {
    return (
        <>
            <Flex
                css={{
                    backgroundColor: "$secondaryColor",
                    color: "$textLight"
                }}
            >
                <Section
                    direction={{ "@initial": "column", "@bp2": "row" }}
                    gap={3}
                    css={{
                        width: "$full"
                    }}
                >
                    <Flex gap={1} direction={"column"} css={{ flex: 3 }}>
                        <Text
                            typography={{
                                "@initial": "mbHeading1",
                                "@bp2": "dtHeading1"
                            }}
                            css={{ mb: "$2" }}
                        >
                            CONTACTS
                        </Text>
                        {footerData.map( ( { key, value }, i ) => (
                            <Text
                                typography={{
                                    "@initial": "navOptions",
                                    "@bp2": "dtPara3"
                                }}
                                css={{ fontWeight: "bold" }}
                                key={i}
                            >
                                <Text>{key}:</Text> {value}
                            </Text>
                        ) )}
                    </Flex>
                    <IframeContainer src={locationSrc} css={{ flex: 2 }} />
                </Section>
            </Flex>
            <Flex
                css={{
                    backgroundColor: "$primaryColor",
                    color: "$textLight",
                    py: "$3"
                }}
                center
            >
                <Text align="center">&copy; 2023 M & M Engineers</Text>
            </Flex>
        </>
    );
};
