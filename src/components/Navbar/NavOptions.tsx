import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { Text } from "../Text";
import { NavLink } from "./NavLink";
interface navOptionsProps {
    isOpen: boolean;
}

export const NavOptions = ( { isOpen }: navOptionsProps ) => {
    return (
        <Flex
            direction={"column"}
            gap={2}
            className={`${isOpen ? "active" : ""}`}
            css={{
                align: "flex-end",
                backgroundColor: "$primaryColor",
                display: "flex",
                position: "absolute",
                top: "2.5rem",
                right: "-1rem",
                width: "max-content",
                p: "$2",
                opacity: 0,
                visibility: "hidden",
                zIndex: "$negativeTwo",
                transform: "translateY(-10px)",
                transition: "all .4s ease-in-out",
                "@bp2": {
                    all: "unset",
                    display: "flex",
                    flexDirection: "row",
                    p: "$2 0 $2 $2",
                    gap: "$4"
                },
                [ `& ${Text}` ]: {
                    color: "$textLight",
                    fontFamily: "$juliusSansOne"
                },
                [ `&.active` ]: {
                    boxShadow: "$shadowtype2",
                    opacity: 1,
                    visibility: "visible",
                    zIndex: "$1",
                    transform: "translateY(0)"
                }
            }}
        >
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Home</b>
                </Text>
            </NavLink>
            <NavLink to={"/about-us"}>
                <Text typography={"navOptions"}>
                    <b>About Us</b>
                </Text>
            </NavLink>
            <NavLink to={"/"}>
                <Text typography={"navOptions"}>
                    <b>Products</b>
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
