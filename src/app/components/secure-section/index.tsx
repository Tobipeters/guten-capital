import { GcButton } from "../button";
import SecureImg from "../../../../public/images/comtact-bg.png";
import Image from "next/image";
import React from "react";
import { GcModal } from "../modal";
import { ContactUs } from "../contact";

export const SecureYourFuture = () => {
  const [openContact, setOpenContact] = React.useState<boolean>(false);

  const handleOpenContact = () => setOpenContact(!openContact);

  return (
    <section className="container flex flex-col w-full gap-12 px-4 py-14 lg:py-16">
      <div className="flex flex-col mx-auto text-left items-center gap-4 lg:gap-6 w-full lg:w-7/12 lg:text-center">
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          <span className="text-gc_primary_500"> Secure</span> Your Financial{" "}
          <span className="text-gc_primary_500">Future</span> with Guten Capital
        </h3>
        <p className="text-sm text-gc_grey_400 font-normal leading-[1.5rem] lg:text-base lg:w-10/12">
          Invest with confidence and let our expertise drive your financial
          success. Whether you&apos;re looking to trade securities, manage
          investments, or seek professional financial advisory, we&apos;re here
          to guide you every step of the way.
        </p>

        <GcButton
          variant="secondary"
          text="Get Started today"
          className="mr-auto lg:mx-auto"
          onClick={handleOpenContact}
        />
      </div>

      <div className="relative rounded-2xl overflow-hidden w-full h-[367px] lg:h-[650px]">
        <Image
          fill
          quality={100}
          src={SecureImg}
          alt="Secure your financial future"
          className="object-cover"
        />
      </div>

      <GcModal
        title="Let's Talk"
        details="Talk to one of our experts today and unlock your financial future"
        open={openContact}
        handleClose={handleOpenContact}
      >
        <ContactUs />
      </GcModal>
    </section>
  );
};
