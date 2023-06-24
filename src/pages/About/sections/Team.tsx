import { Flex, TeamMemberCard, Text } from "@src/components";
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
                        <TeamMemberCard
                            name={name}
                            profilePic={profilePic}
                            designation={designation}
                            description={description}
                            inverse={i % 2 === 0}
                            key={`${name}_${i}`}
                        />
                    )
                )}
            </Flex>
        </Flex>
    );
};
