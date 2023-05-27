import { CSS } from "@src/styles";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";
import { NavOptions } from "./NavOptions";

const navbarCss: CSS = {
    p: "$1 $4",
    boxShadow: "$shadowtype3",
    [ ` & .hamburger ` ]: {
        "@bp2": {
            display: "none"
        }
    }
};

export const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <Flex css={navbarCss} justify={"between"} align={"center"}>
            <ImgContainer
                imgSrc="mmEngineersLogo.png"
                altText="Company-Logo"
                width={"7"}
            />
            <Flex center gap={2} css={{ position: "relative" }}>
                <NavOptions isOpen={isOpen} />
                <GiHamburgerMenu
                    className="hamburger"
                    onClick={() => setIsOpen( !isOpen )}
                />
            </Flex>
        </Flex>
    );
};
