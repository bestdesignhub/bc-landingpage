import { PreRegisterForm } from "@/components";
import MainBannerImage from "@/components/common/MainBanner";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import SweaterImage from "@/components/common/Sweater";
import StepImage from "@/components/common/Stepbanner";



import { getCountryList, getGenderList } from "@/utils/server-api";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contries = await getCountryList();
  const genders = await getGenderList();
  return (
    <div className="relative h-screen">
      {/* Mobile Background */}
      {/* <ResponsiveImage />*/}
      <div className="header">
        <div className="container">
          <div className="flex">
            <div className="full-width-div">
          <ResponsiveImage />     
          <div className="contact-details">
            contact@bespokecashmere.com • Phone: +45 1565 6668 
          </div>      
          </div>
          </div>

        </div>
        </div>
      <div className="mainBanner">
        <MainBannerImage /> 
        <img className="arrow"
          src="/arrow.png"
          alt="Online Sweater"
        />
      </div>
      <div className="signup-form">
        <div className="flex justify-center">
          <div className="container">
            <div className="form-container">
          <div className="bg-white bg-transparent rounded-lg p-4 mt-10 signupform">
            <h2 className="main-title">
              <span>Sign up and Win </span>prizes worth <strong>$5.000</strong>
            </h2>
            <p className="subtext text-sm text-black text-center mb-3">
            Celebrate the launch of our exclusive cashmere sweater brand! <span className="font-bold uppercase">BESPOKE CASHMERES</span> coming soon.
            You now have a chance to win $5,000 worth of premium cashmere sweaters over the next 2 months. <strong>Create</strong> your unique cashmere sweater for both man or women.
            </p>
            <div className="signup-form-container">

            <PreRegisterForm countries={contries} genders={genders} />
            </div>
          </div>
          <div className="style-section">
            <h2 className="style-title">
              Our sweater Styles
            </h2>
            <p>We have a multiple style sweater and plan and cable patern We have a multiple style sweater and plan and cable paternWe have a multiple style sweater and plan and cable patern We have a multiple style sweater and plan and cable patern</p>
            <SweaterImage />
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className="step-section">
            <StepImage />
          </div>
    </div>
  );
}
