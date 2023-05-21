import { Flex, Section, ServicesCard, Text } from "@src/components";
import { services } from "@src/data";

export const Services = () => {
    return (
        <Section gap={2}>
            <Text align={"center"} typography={"dtHeading2"}>
                Our Services
            </Text>
            <Text typography={"dtPara1"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat at eaque id saepe quas cupiditate, ipsam, consectetur,
                autem numquam quidem perferendis aliquid. Laudantium, quibusdam?
                Nesciunt!
            </Text>

            <Flex>
                {services.map( ( { serviceTitle, serviceDesc }, key ) => (
                    <ServicesCard
                        key={key}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                    />
                ) )}
            </Flex>
        </Section>
    );
};
