"use client";

import React from "react";
import {
  ContactUs,
  EmpoweringSection,
  GcModal,
  Header,
  OurOfferings,
  ProvenResult,
  SecureYourFuture,
} from "./components";
import { Variants } from "framer-motion";

export default function Home() {
  const [openContact, setOpenContact] = React.useState<boolean>(false);

  const handleOpenContact = () => setOpenContact(!openContact);

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header />
      <OurOfferings handleOpenContact={handleOpenContact} />
      <EmpoweringSection
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />
      <ProvenResult
        sectionVariants={sectionVariants}
        itemVariants={itemVariants}
      />
      <SecureYourFuture />

      <GcModal
        title="Let's Talk"
        details="Talk to one of our experts today and unlock your financial future"
        open={openContact}
        handleClose={handleOpenContact}
      >
        <ContactUs />
      </GcModal>
    </>
  );
}
