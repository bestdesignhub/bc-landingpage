import Image from "next/image";

const ResponsiveImage = () => {
  return (
    <div className="logo">
      {/* Landscape Image */}
      <img
        src="/logo.png"
        className="landscape"
        alt="Bespoke Cashmere"
      />
    </div>
  );
};

export default ResponsiveImage;
