import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { NavLink } from "./NavLink";
import { Text } from "../Text";

const mobileNavOptionsCss: CSS = {
    gap: "$2",
    "@bp3": {
        //
    }
};

interface navOptionsProps {
    isOpen: boolean;
}

export const NavOptions = ( { isOpen }: navOptionsProps ) => {
    return (
        <Flex
            direction={"column"}
            gap={2}
            css={{
                display: `${isOpen ? "flex" : "none"}`,
                position: "absolute",
                top: "1rem",
                right: "-1.5rem",
                width: "max-content",
                p: "$3",
                align: "flex-end",
                "@bp2": {
                    all: "unset",
                    display: "flex",
                    flexDirection: "row",
                    gap: "$2",
                    p: "$3"
                }
            }}
        >
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Home</b>
                </Text>
            </NavLink>
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Products</b>
                </Text>
            </NavLink>
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>About Us</b>
                </Text>
            </NavLink>
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Team</b>
                </Text>
            </NavLink>
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Contact Us</b>
                </Text>
            </NavLink>
        </Flex>
    );
};
