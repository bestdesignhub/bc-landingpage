import Image from "next/image";

const SweaterImage = () => {
  return (
    <div className="sweaterImg">
      <h2 className="main-title"><span>Your Style & Colors –</span><strong>We Create Custom Solutions</strong></h2>
      <p className="subtext text-sm text-black text-center mb-3">We will replicate your desired product with the exact design, fabric, and color while ensuring top-quality craftsmanship. Simply take a photograph and send it to us via email at &nbsp; &nbsp; 
      <a href="mailto:contact@bespokecashmere.eu"><strong>contact@bespokecashmere.eu</strong></a> or WhatsApp at <a href="tel:+453132 7890"><strong>+45 3132 7890</strong></a>, and we will deliver a high-quality sweater as the final product.</p>
      <p className="subtext text-sm text-black text-center mb-3">We also offer an in-house custom sweater facility, and wholesale inquiries are welcome!</p>
      {/* Landscape Image */}
      {/* <img
        src="/sweater-img.jpg"
        alt="Your Style & Colors – We Create Custom Solutions"
      /> */}
    </div>
  );
};

export default SweaterImage;
