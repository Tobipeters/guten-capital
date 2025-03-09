"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from "../../../../public/images/icons/Check.svg";
import TradingImg from "../../../../public/images/our-offerings-bg.png";
import InvestmentMgtImg from "../../../../public/images/investment-mgt-bgpng.png";
import PortfolioImg from "../../../../public/images/portfolio-bg.png";
import FinancialImg from "../../../../public/images/financial-bg.png";
import { GcButton } from "../button";
import { motion, AnimatePresence } from "framer-motion";
import { TabNav } from "../tab-nav";

export const OurOfferings = ({
  handleOpenContact,
}: {
  handleOpenContact: () => void;
}) => {
  const [active, setActive] = React.useState<string>("trading");

  const offerings = [
    {
      name: "Securities Trading",
      value: "trading",
    },
    {
      name: "Investment Management",
      value: "investment",
    },
    {
      name: "Portfolio Analysis & Optimization",
      value: "portfolio",
    },
    {
      name: "Financial Planning",
      value: "finance",
    },
  ];

  return (
    <section className="container flex flex-col w-full gap-8 md:gap-12 px-4 py-14 lg:py-20">
      <div className="flex flex-col w-full gap-4 lg:gap-6">
        <h3 className="text-[2rem] text-gc_grey_800 font-bold leading-[2.4rem] lg:text-[3rem] xl:text-[3.5rem] xl:leading-[4.1rem]">
          Our Offerings at{" "}
          <span className="text-gc_primary_500"> Guten Capital</span>
        </h3>
        <p className="text-sm text-gc_grey_400 font-normal leading-[1.5rem] lg:text-base lg:w-10/12 xl:w-7/12">
          At Guten Capital Limited we offer a comprehensive range of services
          meticulously tailored to meet the unique needs of both individuals and
          institutional investors
        </p>
      </div>

      <TabNav options={offerings} active={active} setActive={setActive} />


      <AnimatePresence mode="wait">
        {active === "trading" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            {/* Left Side - Text Content */}
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
              >
                <span className="text-gc_primary_500">Diversify</span> your
                portfolio with stocks, Bonds, options and ETFs
              </motion.h4>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-5 md:gap-6">
                {[
                  {
                    title: "Real Market - Insights",
                    description:
                      "Navigate the financial markets with confidence through expertly executed trades and market insights.",
                  },
                  {
                    title: "Long-Term Wealth Creation",
                    description:
                      "Beyond short-term gains, we focus on sustainable strategies that ensure lasting financial success.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.2 + index * 0.1,
                    }}
                    className="inline-flex items-start gap-2"
                  >
                    <Image
                      src={CheckIcon}
                      width={17}
                      height={17}
                      alt="Check icon"
                      className="lg:w-6 lg:h-6"
                    />
                    <div className="flex flex-col gap-1 mt-[-0.25rem]">
                      <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                        {item.title}
                      </h5>
                      <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <GcButton
                onClick={handleOpenContact}
                variant="secondary"
                text="Start your investment journey"
              />
            </div>

            {/* Right Side - Image */}
            <div className="w-full flex flex-col lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="relative ml-auto overflow-hidden rounded-2xl w-full h-[400px] lg:w-[500px] lg:h-[538px] xl:w-10/12"
              >
                <Image
                  fill
                  quality={100}
                  src={TradingImg}
                  alt="Diversify portfolio"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active === "investment" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
              >
                <span className="text-[#F07021]">Customized</span> Customized
                strategies that align with your goals
              </motion.h4>

              <ul className="flex flex-col gap-5 md:gap-6">
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className="lg:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      Tailored portfolio strategies
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Grow and protect your wealth with strategies designed to
                      maximize long-term returns while minimizing risk.
                    </p>
                  </div>
                </li>
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className=";g:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      Transparency
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      We uphold the highest standards of transparency, ensuring
                      your investments are managed with trust and accountability
                    </p>
                  </div>
                </li>
              </ul>

              <GcButton
                onClick={handleOpenContact}
                variant="secondary"
                text="Join our investors"
              />
            </div>

            <div className="w-full flex flex-col lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="relative ml-auto overflow-hidden rounded-2xl w-full h-[400px] lg:w-[500px] lg:h-[538px] xl:w-10/12"
              >
                <Image
                  fill
                  quality={100}
                  src={InvestmentMgtImg}
                  alt="Diversify portfolio"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active === "portfolio" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
              >
                <span className="text-gc_primary_500">Tailored</span> strategies
                to <span className="text-[#0E8216]">grow</span> your finance
              </motion.h4>

              <ul className="flex flex-col gap-5 md:gap-6">
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className="lg:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      Expert guidance
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Receive expert guidance on investment opportunities, risk
                      assessment, and wealth-building strategies tailored to
                      your financial goals.
                    </p>
                  </div>
                </li>
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className=";g:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      Tailored Financial Growth
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Whether you&apos;re an individual investor or a corporate
                      entity, we offer solutions designed to meet your specific
                      needs.
                    </p>
                  </div>
                </li>
              </ul>

              <GcButton
                onClick={handleOpenContact}
                variant="secondary"
                text="Get started today"
              />
            </div>

            <div className="w-full flex flex-col lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="relative ml-auto overflow-hidden rounded-2xl w-full h-[400px] lg:w-[500px] lg:h-[538px] xl:w-10/12"
              >
                <Image
                  fill
                  quality={100}
                  src={PortfolioImg}
                  alt="Diversify portfolio"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active === "finance" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
              >
                <span className="text-gc_primary_500">Planning</span> {""}
                based on your income, expenses, savings and{" "}
                <span className="text-gc_primary_500">financial goals</span>
              </motion.h4>

              <ul className="flex flex-col gap-5 md:gap-6">
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className="lg:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      Expert-Led Strategies
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Our team brings years of industry expertise, utilizing
                      market insights and data-driven approaches to maximize
                      your returns.
                    </p>
                  </div>
                </li>
                <li className="inline-flex items-start gap-2">
                  <Image
                    src={CheckIcon}
                    width={17}
                    height={17}
                    alt="Check icon"
                    className=";g:w-6 lg:h-6"
                  />
                  <div className="flex flex-col gap-1 mt-[-0.25rem]">
                    <h5 className="text-base text-gc_grey_800 font-bold lg:text-lg">
                      With you every step of the way
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Comprehensive planning services to help clients map out
                      their goals and develop a roadmap to achieve them
                    </p>
                  </div>
                </li>
              </ul>

              <GcButton
                onClick={handleOpenContact}
                variant="secondary"
                text="Get in touch"
              />
            </div>

            <div className="w-full flex flex-col lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="relative ml-auto overflow-hidden rounded-2xl w-full h-[400px] lg:w-[500px] lg:h-[538px] xl:w-10/12"
              >
                <Image
                  fill
                  quality={100}
                  src={FinancialImg}
                  alt="Diversify portfolio"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
