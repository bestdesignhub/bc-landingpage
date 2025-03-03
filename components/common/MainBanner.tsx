import Image from "next/image";

const MainBannerImage = () => {
  return (
    <div className="relative">
 

      <div className="  container containe-bnr">
      <h2 className=" style-title bnr">Design Your <br/>
      Perfect Cashmere <br/> Sweater Online</h2>
      </div>
      <img
      className="w-full"
        src="/banner.jpg"
        alt="Create Your Perfect-Fit Sweater Online"
      />
    </div>
  );
};

export default MainBannerImage;
