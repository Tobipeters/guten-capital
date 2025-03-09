import headerPattern from "../../../../public/images/pattern.png";
import headerBg from "../../../../public/images/header-bg.png";
import RightArrowIcon from "../../../../public/images/icons/arrow-right.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) ,rgba(0, 0, 0, 0.3)), url(${headerBg.src})`,
      }}
      className={`relative bg-cover bg-center h-[calc(100vh-48px)] w-full lg:h-[700px]`}
    >
      <div
        style={{
          backgroundImage: `url(${headerPattern.src})`,
        }}
        className="absolute w-full h-full left-0 right-0 top-0"
      ></div>
      <div className="relative z-10 container h-full flex items-center px-4">
        <div className="flex flex-col gap-[130px] w-full lg:gap-[150px]">
          <div className="text-white flex flex-col gap-4 w-full lg:w-7/12 xl:w-1/2">
            <h3 className="text-[2.5rem] leading-[120%] font-bold md:text-[3rem] lg:leading-[4.2rem] lg:text-[3.5rem]">
              Your Trusted Partner in Wealth Management
            </h3>
            <p className="text-sm font-normal md:text-base leading-[1.5rem] lg:w-10/12">
              With expertise-driven investment strategies, transparent advisory,
              and a commitment to long-term growth, we help you navigate the
              markets with confidence. Your success is our priority
            </p>
          </div>

          <div className="flex items-center w-full">
            <div className="w-7/12 flex flex-col gap-8 lg:flex-row lg:gap-16">
              <div className="text-white leading-[1.68rem] inline-flex flex-col gap-">
                <small className="text-base font-normal lg:text-lg">
                  Operating
                </small>
                <p className="text-lg font-bold lg:text-xl">Since 2020</p>
              </div>

              <div className="text-white leading-[1.68rem] inline-flex flex-col gap-">
                <small className="text-base font-normal lg:text-lg">
                  Tailored plans
                </small>
                <p className="text-lg font-bold lg:text-xl">
                  To Grow your Wealth
                </p>
              </div>
            </div>
            <div className="w-5/12 flex justify-end">
              <div className="relative inline-flex justify-center items-center">
                <div className="inline-flex items-center justify-center bg-gc_primary_500 absolute w-[67px] h-[67px] rounded-full cursor-pointer lg:w-[80px] lg:h-[80px]">
                  <Image
                    src={RightArrowIcon}
                    alt="right arrow"
                    width={30}
                    height={30}
                  />
                </div>

                <svg
                  viewBox="0 0 100 100"
                  width="100"
                  height="100"
                  className="w-[120px] h-[120px] md:w-[140px] lg:h-[140px]"
                >
                  <defs>
                    <path
                      id="circle"
                      d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text
                    font-size="12"
                    fill="white"
                    className="!text-white text-xs font-semibold"
                  >
                    <textPath xlinkHref="#circle">
                      &nbsp;&nbsp;&nbsp; CONTACT US &nbsp;&nbsp;&nbsp; .
                      &nbsp;&nbsp;&nbsp;CONTACT US &nbsp;&nbsp;&nbsp; .
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
