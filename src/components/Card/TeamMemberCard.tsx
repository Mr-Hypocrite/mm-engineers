import { useInView, animated } from "@react-spring/web";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { Text } from "../Text";

export interface TeamMemberCardProps {
    name: string;
    profilePic: string;
    designation: string;
    description: string;
    inverse?: boolean;
}

export const TeamMemberCard = ( {
    name,
    profilePic,
    designation,
    description,
    inverse
}: TeamMemberCardProps ) => {
    const [ ref, springs ] = useInView(
        () => ( {
            from: {
                opacity: 0,
                x: inverse ? -100 : 100
            },
            to: {
                opacity: 1,
                x: 0
            },
            config: {
                duration: 500
            }
        } ),
        {
            amount: 0.7,
            once: true
        }
    );

    return (
        <animated.div ref={ref} style={springs}>
            <Flex
                align="center"
                justify="around"
                direction={{
                    "@initial": "column",
                    "@bp2": `${inverse ? "row" : "rowReverse"}`
                }}
                gap={3}
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
                    <Text typography={"dtSubHeading1"}>{designation}</Text>
                    <Text typography={"dtPara3"}>{description}</Text>
                </Flex>
            </Flex>
        </animated.div>
    );
};
