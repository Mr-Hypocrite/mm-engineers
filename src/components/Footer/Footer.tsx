import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { Section } from "../Section";
import { Text } from "../Text";

const footerCss: CSS = {
    backgroundColor: "$secondaryColor"
};

export const Footer = () => {
    return (
        <Flex>
            <Section>
                <Flex direction={"column"}>
                    <Text
                        typography={{
                            "@initial": "mbHeading1",
                            "@bp2": "dtHeading1"
                        }}
                    >
                        CONTACTS
                    </Text>
                </Flex>
            </Section>
        </Flex>
    );
};
