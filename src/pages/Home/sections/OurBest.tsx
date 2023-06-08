import {
    Box,
    Button,
    Flex,
    ImgContainer,
    Section,
    Text
} from "@src/components";

export const OurBest = () => {
    return (
        <Section>
            <Text typography={"dtHeading1"} css={{ my: "$4" }}>
                What we're best at
            </Text>
            <Flex
                direction={{ "@initial": "column", "@bp2": "row" }}
                gap={3}
                align="start"
            >
                <ImgContainer
                    imgSrc="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Our-Best"
                    css={{ flex: 1 }}
                />
                <Flex
                    direction="column"
                    align={"start"}
                    justify="start"
                    css={{ flex: 1.5 }}
                >
                    <Text typography={"dtPara1"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur odit eum commodi nisi dicta numquam fugiat
                        iste repellat quibusdam minima quos veritatis vel iusto
                        officia tempore veniam, aspernatur distinctio officiis!
                    </Text>
                    <Button type={"text"}>Read More...</Button>
                </Flex>
            </Flex>
        </Section>
    );
};
