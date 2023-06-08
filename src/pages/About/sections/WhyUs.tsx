import { Flex, Text } from "@src/components";

export const WhyUs = () => {
    return (
        <>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp1": "dtHeading1" }}
            >
                <Text css={{ fontWeight: "700" }}>Why</Text> Us
            </Text>
            <Flex direction="column">
                <Text typography={{ "@initial": "mbPara1", "@bp1": "dtPara1" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo assumenda, fugit voluptas dolorem numquam
                    perspiciatis modi dicta ipsum repellat. Fugiat harum
                    temporibus sequi eos doloribus alias quibusdam, repudiandae
                    tenetur, nihil, nesciunt impedit laudantium ducimus a?
                    Inventore aliquam ea necessitatibus adipisci?
                </Text>
                <Text typography={{ "@initial": "mbPara1", "@bp1": "dtPara1" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo assumenda, fugit voluptas dolorem numquam
                    perspiciatis modi dicta ipsum repellat. Fugiat harum
                    temporibus sequi eos doloribus alias quibusdam, repudiandae
                    tenetur, nihil, nesciunt impedit laudantium ducimus a?
                    Inventore aliquam ea necessitatibus adipisci?
                </Text>
                <Text typography={{ "@initial": "mbPara1", "@bp1": "dtPara1" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo assumenda, fugit voluptas dolorem numquam
                    perspiciatis modi dicta ipsum repellat. Fugiat harum
                    temporibus sequi eos doloribus alias quibusdam, repudiandae
                    tenetur, nihil, nesciunt impedit laudantium ducimus a?
                    Inventore aliquam ea necessitatibus adipisci?
                </Text>
            </Flex>
        </>
    );
};
