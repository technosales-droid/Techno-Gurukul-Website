export interface NavLink {
  label: string;
  href: string;
}

// Primary nav — matches the approved TechnoGurukul information
// architecture exactly (5 items). Secondary destinations (Curriculum,
// Career Paths, Trainer, FAQs, Admissions, legal) live in the footer.
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Digital Marketing Program", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "How We Teach", href: "/how-we-teach" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Career Paths", href: "/career-paths" },
  { label: "Trainer", href: "/trainer" },
  { label: "FAQs", href: "/faq" },
  { label: "Admissions", href: "/admissions" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export const admissionsCta: NavLink = {
  label: "Apply Now",
  href: "/admissions",
};
