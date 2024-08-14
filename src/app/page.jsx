"use client";
import BlockLayout from "./components/layouts/sectionLayouts/blocks";
import BusinessDescription from "./components/layouts/sectionLayouts/businessDescription";
import CtaSection from "./components/layouts/sectionLayouts/ctaSection";
import Footer from "./components/layouts/sectionLayouts/footer";
import Hero from "./components/layouts/sectionLayouts/hero";
import OurProcess from "./components/layouts/sectionLayouts/ourProcess";
import ReviewSection from "./components/layouts/sectionLayouts/successStories";
import TextImageLayout from "./components/layouts/sectionLayouts/textImageLayout";
import { coreValues, whyChooseUs } from "./utils/dataStructures";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <section className="">
        <Hero />
        <BusinessDescription />

        <BlockLayout data={coreValues} title="Our Core Values" />
        <TextImageLayout
          image="/salesDeal.webp"
          btntext="Learn more"
          title="Massive Sales Promotion"
          subText="Maximize your sales potential with our dynamic promotional strategies. We craft tailored campaigns designed to capture attention, drive engagement, and convert leads into loyal customers. Whether it’s through compelling offers, targeted advertising, or strategic partnerships, our approach ensures that your promotions not only reach but resonate with your target audience"
          position="lg:flex-row-reverse"
        />

      <TextImageLayout
        image="/training.webp"
        btntext="Learn more"
        title="Incentive Programs"
        subText="Boost employee motivation and client loyalty with our innovative incentive programs. From customized rewards and recognition schemes to performance-based incentives, we design programs that align with your organizational goals and drive positive behavior. Our programs are crafted to enhance productivity, reward excellence, and foster a culture of achievement within your company"
        position="lg:flex-row"
      />

      <BlockLayout
        data={whyChooseUs}
        title="Why Choose VistaVibe"
        image={null}
      />

      <TextImageLayout
        image="/branded.webp"
        btntext="Learn more"
        title="Corporate Gifts & Branded Merchandize"
        subText="Elevate your brand presence with our premium corporate gifts and branded merchandise. We offer a wide range of high-quality products that make a lasting impression on clients and partners. Our curated selection includes everything from sophisticated gifts to practical items that enhance brand visibility and strengthen business relationships. Let us help you choose the perfect items that reflect your company’s values and make a memorable impact."
        position="lg:flex-row-reverse"
      />

      <OurProcess />

      <ReviewSection />

      <TextImageLayout
        image="/committed.webp"
        btntext="Learn more"
        title="We're Determined to Give You the Very Best"
        subText="At VistaVibe Marketing, our commitment to excellence drives everything we do. We are dedicated to providing unparalleled service and delivering results that exceed your expectations. Our team of experts works tirelessly to ensure that every aspect of our service is optimized for your success. With a focus on innovation, integrity, and client satisfaction, we strive to offer the best solutions tailored to your unique needs and goals."
        position="lg:flex-row"
      />

      <CtaSection />

      <Footer />
    </section>
  );
};

export default LandingPage;
