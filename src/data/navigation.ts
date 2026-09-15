export interface NavLink {
  label: string;
  href: string;
}

// Primary navigation. Flat by design — the program is a single course,
// not a catalog, so there is nothing here that needs a dropdown.
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "How We Teach", href: "/how-we-teach" },
  { label: "Career Paths", href: "/career-paths" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const admissionsCta: NavLink = {
  label: "Apply Now",
  href: "/admissions",
};
