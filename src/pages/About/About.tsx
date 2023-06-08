import { Section, Text } from "@src/components";
import { OurHistory, Team, WhyUs } from "./sections";

export const About = () => {
    return (
        <Section css={{ my: "$14" }} gap={2}>
            <Text
                typography={{ "@initial": "mbHeading1", "@bp1": "dtHeading1" }}
            >
                <Text css={{ fontWeight: "700" }}>About</Text> Us
            </Text>
            <Text typography={{ "@initial": "mbPara1", "@bp1": "dtPara1" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo assumenda, fugit voluptas dolorem numquam perspiciatis
                modi dicta ipsum repellat. Fugiat harum temporibus sequi eos
                doloribus alias quibusdam, repudiandae tenetur, nihil, nesciunt
                impedit laudantium ducimus a? Inventore aliquam ea
                necessitatibus adipisci?
            </Text>

            <OurHistory />
            <WhyUs />
            <Team />
        </Section>
    );
};
