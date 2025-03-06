import { GcButton } from "../button";

export const ContactUs = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
          Business Name<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          placeholder="Enter business name"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px] lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg lg:pt-3"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
        Enter business email<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          placeholder="Enter business email"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px] lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg lg:pt-3"
        />
      </div>

      <div className="flex items-center flex-wrap justify-between py-2 border-b border-b-gc_gray_200 mb-4 lg:py-6 lg:flex-nowrap">
        <label className="text-gc_gray_200 text-sm font-normal w-full lg:font-bold lg:text-2xl lg:text-gc_grey_800">
        How can we help you?<sup className="text-[#FF0A0A]">*</sup>
        </label>

        <input
          placeholder="Enter message"
          className="w-full px-0 pb-0 outline-none placeholder:text-[0px] lg:placeholder:text-gc_gray_200 lg:placeholder:text-lg lg:pt-3"
        />
      </div>

      <GcButton fullWidth variant="secondary" text="Send" />
    </form>
  );
};
