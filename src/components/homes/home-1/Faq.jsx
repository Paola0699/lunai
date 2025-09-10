import Faq from "@/components/common/Faq";
import { useTranslation } from "react-i18next";

export default function Faqs() {
  const { t } = useTranslation();
  const faqs = t("faqQuestions", { returnObjects: true });

  return (
    <div className="call-action-2-text mb-50 mb-sm-40">
      {/* Accordion */}
      <dl className="accordion">
        <Faq faqData={faqs} />
      </dl>
      {/* End Accordion */}
    </div>
  );
}
