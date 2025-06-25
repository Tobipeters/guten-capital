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
  const [active, setActive] = React.useState<string>("wealth");

  const offerings = [
    {
      name: "Wealth Management",
      value: "wealth",
    },
    {
      name: "Investment Advisory",
      value: "advisory",
    },
    {
      name: "Portfolio Optimization",
      value: "portfolio",
    },
    {
      name: "Securities Trading",
      value: "securities",
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
          At Guten Capital Limited, we are a multi-service financial firm
          delivering bespoke investment solutions and high-performance
          strategies to both individuals and institutions.
        </p>
      </div>

      <TabNav options={offerings} active={active} setActive={setActive} />

      <AnimatePresence mode="wait">
        {active === "wealth" && (
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
              <div className="flex flex-col gap-3">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
                >
                  <span className="text-gc_primary_500">Long-Term</span>{" "}
                  Financial Partnership
                </motion.h4>

                <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                  Our Wealth Management service is tailored for high-net-worth
                  and emerging clients, focused on growing, preserving, and
                  transferring wealth through personalized strategies.
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-5 md:gap-6">
                {[
                  {
                    title: "Tailored, multi-asset investment strategies",
                    description:
                      "We design custom portfolios across diverse asset classes to align with your risk profile and financial goals.",
                  },
                  {
                    title:
                      "Holistic financial planning (liquidity, tax, legacy)",
                    description:
                      "Beyond investing, we integrate tax strategy, liquidity needs, and legacy planning into a unified wealth approach.",
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
        {active === "advisory" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <div className="flex flex-col gap-3">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
                >
                  <span className="text-[#F07021]">Clarity,</span> Not Controls
                </motion.h4>

                <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                  Our advisory service empowers clients to make strategic
                  investment decisions, offering insights and recommendations
                  without executing trades unless authorized.
                </p>
              </div>

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
                      Custom Investment Recommendations
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      We provide objective, client- specific advice tailored to
                      your financial goals and risk appetite.
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
                      Market Education & Strategic Planning
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Empowering you with insights and strategy to navigate
                      complex markets confidently and independently.
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
              <div className="flex flex-col gap-3">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
                >
                  Refined{" "}
                  <span className="text-gc_primary_500">Portfolios</span>{" "}
                  Maximum <span className="text-[#0E8216]">Value</span>
                </motion.h4>

                <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                  Through advanced analysis and real time market monitoring, we
                  rebalance client portfolios to enhance returns while
                  maintaining risk alignment.
                </p>
              </div>

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
                      Higher Long-Term Returns with Controlled Risk
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      We optimize your portfolio to seek strong returns while
                      staying within your defined risk parameters.
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
                      Alignment with Evolving Goals & Market Conditions
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Portfolios are actively adjusted to reflect life changes,
                      market shifts, and emerging opportunities.
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
        {active === "securities" && (
          <motion.div
            key="trading-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-y-9 items-center w-full h-full lg:pt-10"
          >
            <div className="w-full flex flex-col gap-6 lg:w-1/2 lg:gap-10">
              <div className="flex flex-col gap-3">
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                  className="text-2xl font-semibold leading-[2.25rem] lg:text-[2rem] lg:w-10/12 xl:w-8/12"
                >
                  <span className="text-gc_primary_500">Disciplined</span> {""}
                  Execution. Transparent{" "}
                  <span className="text-gc_primary_500">Results</span>
                </motion.h4>
                <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                  We execute equity, bond and ETF trades for both proprietary
                  accounts and client mandates with speed, accuracy, and
                  regulatory integrity.
                </p>
              </div>

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
                      Higher Long-Term Returns with Controlled Risk
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      We optimize your portfolio to seek strong returns while
                      staying within your defined risk parameters.
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
                      Alignment with Evolving Goals & Market Conditions
                    </h5>
                    <p className="text-sm text-gc_grey_300 font-normal leading-[1.5rem] lg:text-base lg:w-11/12 xl:w-9/12">
                      Portfolios are actively adjusted to reflect life changes,
                      market shifts, and emerging opportunities.
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
