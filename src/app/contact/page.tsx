import ContactPageMain from "@/components/main/ContactPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TechnoGurukul",
  description: "Talk to the TechnoGurukul team about the Digital Marketing Program.",
};

export default function ContactPage() {
  return <ContactPageMain />;
}
