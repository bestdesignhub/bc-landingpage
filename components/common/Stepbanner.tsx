import Image from "next/image";

const StepImage = () => {
  return (
    <div className="stepImg">
      {/* Landscape Image */}
      <img
      className="w-full"
        src="/step-banner.jpg"
        alt="Easy 4 steps for create online sweater"
      />
    </div>
  );
};

export default StepImage;
