import { Box, Flex, ImgContainer, Section, Text } from "@src/components";

export const OurBest = () => {
    return (
        <Section>
            <Text typography={"dtHeading1"} css={{ my: "$4" }}>
                What we're best at
            </Text>
            <Flex gap={3}>
                <ImgContainer
                    imgSrc="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    altText="Our-Best"
                />
                <Box>
                    <Text typography={"dtPara1"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur odit eum commodi nisi dicta numquam fugiat
                        iste repellat quibusdam minima quos veritatis vel iusto
                        officia tempore veniam, aspernatur distinctio officiis!
                    </Text>
                    <button>Read More...</button>
                </Box>
            </Flex>
        </Section>
    );
};
