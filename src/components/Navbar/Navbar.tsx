import { CSS } from "@src/styles";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { NavOptions } from "./NavOptions";

export const Navbar = () => {
    const navbarCss: CSS = {
        p: "$1"
    };

    return (
        <Flex css={navbarCss} justify={"between"} align={"center"}>
            <ImgContainer
                imgSrc="mmEngineersLogo.png"
                altText="Company-Logo"
                width={"7"}
            />
            <NavOptions />
        </Flex>
    );
};
