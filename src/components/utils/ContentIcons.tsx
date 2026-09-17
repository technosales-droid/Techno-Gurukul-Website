/**
 * Small shared inline icons for secondary-page content lists — thin
 * stroke, currentColor, matching the line language established by the
 * homepage's HeroGraphic/NodeCheckIcon. Kept separate from
 * `utils/icons/`, which holds unrelated heavier Eduan-template icons.
 */

export const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="content-list__icon">
    <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5.5 9.2 7.8 11.5 12.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
