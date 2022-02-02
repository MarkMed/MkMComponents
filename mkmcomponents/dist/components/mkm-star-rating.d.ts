import type { Components, JSX } from "../types/components";

interface MkmStarRating extends Components.MkmStarRating, HTMLElement {}
export const MkmStarRating: {
  prototype: MkmStarRating;
  new (): MkmStarRating;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
