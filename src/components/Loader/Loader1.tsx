import Rive from "@rive-app/react-canvas";
import { CSS } from "@src/styles";
import { CSSProperties } from "react";

const riveCanvasCss: CSS = {
    size: "full"
};

export const Loader1 = () => {
    return (
        <Rive src="/inProgress1.riv" style={riveCanvasCss as CSSProperties} />
    );
};
