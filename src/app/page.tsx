import ClientSection from "@/components/ClientSection";
import FaqSection from "@/components/faq/FaqSection";
import FeatureWorks from "@/components/FeatureWorks";
import Headers from "@/components/headers/Headers";
import WorkingProcess from "@/components/working_process/WorkingProcess";

export default function Home() {
  return (
    <>
      <Headers />
      <ClientSection />
      <FeatureWorks />
      <WorkingProcess />
      <FaqSection />
    </>
  );
}
