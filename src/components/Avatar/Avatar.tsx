import { CSS } from "@src/styles";
import { AiOutlineUser } from "react-icons/ai";
import { Flex } from "../Flex";
import { ImgContainer } from "../ImgContainer";

const avatarCss: CSS = {
    borderRadius: "$circle",
    width: "$5"
};

export const Avatar = ( { src }: { src?: string } ) => {
    return src ? (
        <ImgContainer imgSrc={src} altText="avatar-image" />
    ) : (
        <Flex
            css={{
                backgroundColor: "$baseColor",
                p: "$3",
                borderRadius: "$circle"
            }}
        >
            <AiOutlineUser size={50} />
        </Flex>
    );
};
