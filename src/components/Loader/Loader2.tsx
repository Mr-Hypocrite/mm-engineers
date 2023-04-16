import Rive from "@rive-app/react-canvas";
import { CSS } from "@src/styles";
import { CSSProperties } from "react";

const riveCanvasCss: CSS = {
    size: "full"
};

export const Loader2 = () => {
    return (
        <Rive src="/inProgress2.riv" style={riveCanvasCss as CSSProperties} />
    );
};
