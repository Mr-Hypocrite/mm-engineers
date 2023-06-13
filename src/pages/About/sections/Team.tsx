import { Flex, ImgContainer, Text } from "@src/components";
import { teamData } from "@src/data";

export const Team = () => {
    return (
        <Flex direction={"column"} gap={5}>
            <Text typography={"dtHeading1"}>
                Meet the <Text css={{ fontWeight: "700" }}>Team</Text>
            </Text>

            <Flex direction="column" gap={3}>
                {teamData.map(
                    ( { name, profilePic, designation, description }, i ) => (
                        <Flex
                            align="center"
                            justify="around"
                            direction={{
                                "@initial": "column",
                                "@bp2": `${i % 2 === 0 ? "row" : "rowReverse"}`
                            }}
                            gap={3}
                            key={`${name}_${i}`}
                        >
                            <ImgContainer
                                imgSrc={profilePic}
                                altText="profile-picture"
                                css={{
                                    borderRadius: "$circle",
                                    size: "300px",
                                    overflow: "hidden",
                                    flexShrink: 0,
                                    "@bp2": {
                                        size: "400px"
                                    }
                                }}
                            />
                            <Flex
                                direction="column"
                                css={{ "@bp2": { maxWidth: "$tablet" } }}
                            >
                                <Text typography={"dtHeading3"}>{name}</Text>
                                <Text typography={"dtSubHeading1"}>
                                    {designation}
                                </Text>
                                <Text typography={"dtPara3"}>
                                    {description}
                                </Text>
                            </Flex>
                        </Flex>
                    )
                )}
            </Flex>
        </Flex>
    );
};
