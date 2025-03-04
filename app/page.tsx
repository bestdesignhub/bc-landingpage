import { PreRegisterForm } from "@/components";
import MainBannerImage from "@/components/common/MainBanner";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import SweaterImage from "@/components/common/Sweater";
import StepImage from "@/components/common/Stepbanner";

import { getCountryList, getGenderList } from "@/utils/server-api";
import Everyneed from "@/components/common/occasion";
import AllsweaterImage from "@/components/common/all-sweater";
import Profile from "@/components/common/Profile";

export const dynamic = "force-dynamic";

export default async function Home() {
  const contries = await getCountryList();
  const genders = await getGenderList();
  return (
    <div className="relative h-screen">
      <div className="header">
        <div className="container">
          <div className="flex">
            <div className="full-width-div  gap-2">
              <ResponsiveImage />
              <div className="contact-details">
              <a href="mailto:contact@bespokecashmere.eu">contact@bespokecashmere.eu</a>/<a href="tel:+453132 7890">+45 3132 7890</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBanner">
        <MainBannerImage />
      </div>
      <div className="signup-form">
        <div className="flex justify-center">
          <div className="container">
            <div className="form-container">
              <div className="bg-white bg-transparent rounded-lg p-4 mt-10 signupform">
                <h2 className="main-title">
                  <span>Sign up and Win </span>prizes worth <strong>$6.000</strong>
                </h2>
                <p className="subtext text-sm text-black text-center mb-3">
                  You're now officially part of our exciting competition, giving you the chance to win exclusive cashmere sweaters worth <strong>$6,000</strong> over the next two months!  For every <strong>200 sign-ups</strong>, we’ll draw one lucky winner who will receive a custom-designed cashmere sweater, tailored for either men or women.
                </p>
                <div className="signup-form-container">
                  <PreRegisterForm countries={contries} genders={genders} />
                </div>
              </div>
              <div className="bg-white bg-transparent rounded-lg p-4 mt-10 signupform style-section">
                <SweaterImage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="step-section">
        <AllsweaterImage />
        <Everyneed />
        <StepImage />
        <Profile />
      </div>
      <div className="thanks-message">
        <h4>Thank You for Signing Up!</h4>
        <p>Our technical team is working on our new website, where you'll soon be able to create your perfect online sweater.</p>
        <h5>Stay tuned for updates!</h5>
        <p>More details contact us : </p>
        <p><strong><a href="mailto:contact@bespokecashmere.eu">contact@bespokecashmere.eu</a></strong> / <strong><a href="tel:+453132 7890">+45 3132 7890</a> </strong></p>
      </div>
      <p className="copyright">
        @copyright 2025 Bespoke Cashmere. All Rights Reserved.
      </p>

    </div>
  );
}
