import Image from "next/image";

const AllsweaterImage = () => {
  return (
    <div className="all-sweater">
      {/* Landscape Image */}
      <img
      className="w-full" loading="lazy"
        src="/all-sweater-style.jpg"
        alt="OUR SWEATER COLLECTION"
      />
    </div>
  );
};

export default AllsweaterImage;
