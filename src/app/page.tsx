import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import BeforeAfter from "@/components/BeforeAfter";
import ClientSection from "@/components/ClientSection";
import FaqSection from "@/components/faq/FaqSection";
import FeatureWorks from "@/components/FeatureWorks";
import Footer from "@/components/Footer";
import Headers from "@/components/headers/Headers";
import Testimonial from "@/components/testimonial/Testimonial";
import { ContainerScroll } from "@/components/Text";
import WorkingProcess from "@/components/working_process/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Headers />

      <ClientSection />
      <FeatureWorks />
      <WorkingProcess />
      <FaqSection />
      <Testimonial />
      <AboutSection />
      <BeforeAfter />
      <Banner />
    </>
  );
}
