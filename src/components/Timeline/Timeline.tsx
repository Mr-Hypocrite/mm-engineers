import { Box } from "../Box";
import { Flex } from "../Flex";
import { TimelineCard } from "./TimelineCard";

export const Timeline = () => {
    return (
        <Flex direction="column">
            {new Array( 5 ).fill( 0 ).map( ( _, i ) => (
                <Flex
                    direction={{
                        "@initial": "row",
                        "@bp2": `${i % 2 === 0 ? "row" : "rowReverse"}`
                    }}
                    key={i}
                >
                    <Box
                        css={{
                            display: "none",
                            "@bp2": { display: "unset", width: "$half" }
                        }}
                    ></Box>
                    <TimelineCard inverse={i % 2 === 0} />
                </Flex>
            ) )}
        </Flex>
    );
};
