import type { Components, JSX } from "../types/components";

interface MkmWip extends Components.MkmWip, HTMLElement {}
export const MkmWip: {
  prototype: MkmWip;
  new (): MkmWip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
