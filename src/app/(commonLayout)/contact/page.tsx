import { ContactForm } from "@/components/modules/contact/ContactForm";
import { ContactHero } from "@/components/modules/contact/ContactHero";
import { ContactInfoCards } from "@/components/modules/contact/ContactInfoCards";
import { ContactMap } from "@/components/modules/contact/ContactMap";
import { ContactResponseTimeSection } from "@/components/modules/contact/ContactResponseTimeSection";
import { ContactSocialLinks } from "@/components/modules/contact/ContactSocialLinks";
import { ContactSupportCategories } from "@/components/modules/contact/ContactSupportCategories";
import Newsletter from "@/components/modules/home/Newsletter";
import { FAQSection } from "@/components/shared/Faq";

export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactInfoCards />
            <ContactForm />
            <ContactMap />
            <ContactSupportCategories />
            <FAQSection />
            <ContactResponseTimeSection />
            <ContactSocialLinks />
            <Newsletter />
        </main>
    )
}