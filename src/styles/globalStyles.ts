import { globalCss } from "./stitches.config";

export const globalStyles = globalCss( {
    "@import": [
        "url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Julius+Sans+One&family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&display=swap')"
    ],
    "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0
    },
    "html, body, #root": {
        scrollBehavior: "smooth",
        height: "$full",
        width: "$full"
    },
    body: {
        fontFamily: "$sans",
        scrollStyling: ""
    }
} );
