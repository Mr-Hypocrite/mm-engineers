import { Flex } from "../Flex";
import { CSS } from "@src/styles";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImgContainer } from "../ImgContainer";
import { NavOptions } from "./NavOptions";

const navbarCss: CSS = {
    backgroundColor: "$primaryColor",
    boxShadow: "$shadowtype3",
    position: "fixed",
    width: "$full",
    top: 0,
    zIndex: "$3",
    [ ` & .hamburger ` ]: {
        "@bp2": {
            display: "none"
        }
    }
};

export const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <Flex css={navbarCss}>
            <Flex
                justify={"between"}
                align={"center"}
                css={{
                    maxWidth: "$laptopL",
                    mx: "auto",
                    width: "$full",
                    p: "$1 $2"
                }}
            >
                <ImgContainer
                    imgSrc="mmEngineersWhiteLogo.png"
                    altText="Company-Logo"
                    width={"7"}
                    css={{ borderRadius: "999px" }}
                />
                <Flex
                    center
                    css={{ position: "relative", color: "$textLight" }}
                >
                    <NavOptions isOpen={isOpen} />
                    <GiHamburgerMenu
                        className="hamburger"
                        onClick={() => setIsOpen( !isOpen )}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};
