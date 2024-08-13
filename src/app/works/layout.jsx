
import React from "react";
import Footer from "../components/layouts/sectionLayouts/footer";
import CtaSection from "../components/layouts/sectionLayouts/ctaSection";
import PageLayout from "../components/layouts/pageLayouts/mainPages";

const WorksLayout = ({ children }) => {
  return (
    <PageLayout title="Featured Works">

      <div>{children}</div>
      <CtaSection />
      <Footer />
    </PageLayout>
  
  );
};

export default WorksLayout;
