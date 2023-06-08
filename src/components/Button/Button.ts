import { css, styled } from "@src/styles";

const buttonCss = css( {
    cursor: "pointer",
    fontFamily: "$juliusSansOne",
    fontWeight: "$dtHeading3",
    fontSize: "$dtPara1",
    my: "$2",
    border: "none",
    variants: {
        type: {
            solid: {
                backgroundColor: "$secondaryColor",
                color: "$textLight"
            },
            outline: {
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "$secondaryColor",
                backgroundColor: "transparent",
                color: "$secondaryColor"
            },
            text: {
                backgroundColor: "transparent",
                color: "$secondaryColor",
                fontWeight: "$dtPageHead",
                px: 0
            }
        },
        size: {
            small: {
                p: "$1 $3"
            },
            medium: {
                p: "$2 $6"
            },
            large: {
                p: "$3 $8"
            }
        }
    },
    defaultVariants: {
        type: "solid",
        size: "medium"
    }
} );

export const Button = styled( "button", buttonCss );
