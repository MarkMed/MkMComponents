/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MkmWip {
    }
}
declare global {
    interface HTMLMkmWipElement extends Components.MkmWip, HTMLStencilElement {
    }
    var HTMLMkmWipElement: {
        prototype: HTMLMkmWipElement;
        new (): HTMLMkmWipElement;
    };
    interface HTMLElementTagNameMap {
        "mkm-wip": HTMLMkmWipElement;
    }
}
declare namespace LocalJSX {
    interface MkmWip {
    }
    interface IntrinsicElements {
        "mkm-wip": MkmWip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mkm-wip": LocalJSX.MkmWip & JSXBase.HTMLAttributes<HTMLMkmWipElement>;
        }
    }
}