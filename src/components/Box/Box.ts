import { blackA } from "@radix-ui/colors";
import { css, styled } from "@styles";

export const boxCss = css( {
    variants: {
        size: {
            0: { size: "$0" },
            1: { size: "$1" },
            2: { size: "$2" },
            3: { size: "$3" },
            4: { size: "$4" },
            5: { size: "$5" },
            6: { size: "$6" },
            7: { size: "$7" },
            8: { size: "$8" },
            9: { size: "$9" },
            10: { size: "$10" },
            11: { size: "$11" },
            12: { size: "$12" },
            13: { size: "$13" },
            14: { size: "$14" },
            full: { size: "$full" },
            half: { size: "$half" }
        },
        width: {
            0: { width: "$0" },
            1: { width: "$1" },
            2: { width: "$2" },
            3: { width: "$3" },
            4: { width: "$4" },
            5: { width: "$5" },
            6: { width: "$6" },
            7: { width: "$7" },
            8: { width: "$8" },
            9: { width: "$9" },
            10: { width: "$10" },
            11: { width: "$11" },
            12: { width: "$12" },
            13: { width: "$13" },
            14: { width: "$14" },
            full: { width: "$full" },
            half: { width: "$half" }
        },
        height: {
            0: { height: "$0" },
            1: { height: "$1" },
            2: { height: "$2" },
            3: { height: "$3" },
            4: { height: "$4" },
            5: { height: "$5" },
            6: { height: "$6" },
            7: { height: "$7" },
            8: { height: "$8" },
            9: { height: "$9" },
            10: { height: "$10" },
            11: { height: "$11" },
            12: { height: "$12" },
            13: { height: "$13" },
            14: { height: "$14" },
            full: { height: "$full" },
            half: { height: "$half" }
        }
    }
} );

export const Box = styled( "div", boxCss );
