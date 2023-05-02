import React from "react";
import "react-toastify/dist/ReactToastify.css";
import verifiedIcon from "../../assets/icon/verified.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | Pricing`;

  let navigate = useNavigate();
  const { user, subscriptionStatus } = useContext(AuthContext);

  const handleSubscribe = async (productId) => {
    const stripe = window.Stripe(process.env.REACT_APP_stripePublicKey);
    const { error } = await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [{ price: productId, quantity: 1 }],
      customerEmail: user?.email,
      successUrl: process.env.REACT_APP_stripeSuccessUrl,
      cancelUrl: process.env.REACT_APP_stripeSuccessUrl,
    });
    if (error) {
      console.error(error);
    }
  };

  //stripe checkout
  const handleCheckout = (productId) => {
    if (user) {
      handleSubscribe(productId);
    } else {
      navigate("/login");
    }
    console.log(productId);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 md:py-8">
      <div className="text-center">
        <p className="text-3xl">Choose a plan</p>
        <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-aboutGradientStart to-aboutGradientEnd font-bold pb-10">
          That Fits For You
        </h2>
      </div>
      <section className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6">
        {/* card 1 */}
        <div className="w-[300px] h-[500px] bg-whiteHigh border border-whiteMid shadow-sm shadow-whiteLow  rounded-3xl relative">
          <section className="text-center">
            <p className="text-3xl font-bold py-6">Silver</p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cardGradientStart to-cardGradientEnd">
              $100
            </p>
            <p className="text-base text-brownFadeColor">Monthly</p>
          </section>
          <section className="p-6">
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
          </section>
          <div className="flex items-center justify-center">
            <button
              disabled={subscriptionStatus}
              onClick={() => {
                handleCheckout(process.env.REACT_APP_stripeProductMonthly);
              }}
              className="btn rounded-full my-4 absolute bottom-0 bg-btnColor border-none"
            >
              Purchase
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-[300px] h-[550px] border border-btnColor rounded-3xl relative">
          <section className="text-center">
            <span className="text-whiteHigh bg-btnColor px-6 pb-2 pt-[2px] rounded-b-xl">
              Popular
            </span>
            <p className="text-3xl font-bold py-6">Gold</p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cardGradientStart to-cardGradientEnd">
              $500
            </p>
            <p className="text-base text-brownFadeColor">Half Yearly</p>
          </section>
          <section className="p-6">
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
          </section>
          <div className="flex items-end justify-center">
            <button
              disabled={subscriptionStatus}
              onClick={() => {
                handleCheckout(process.env.REACT_APP_stripeProductHalfYearly);
              }}
              className="btn rounded-full my-4 absolute bottom-0 bg-btnColor border-none"
            >
              Purchase
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-[300px] h-[500px] bg-whiteHigh border border-whiteMid shadow-sm shadow-whiteLow  rounded-3xl relative">
          <section className="text-center">
            <p className="text-3xl font-bold py-6">Platinum</p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cardGradientStart to-cardGradientEnd">
              $1000
            </p>
            <p className="text-base text-brownFadeColor">Yearly</p>
          </section>
          <section className="p-6">
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
            <div className="flex items-center justify-start gap-3 py-1 text-brownTextColor">
              <img className="h-5 w-5" src={verifiedIcon} alt="" />
              <span>1 Credit per year</span>
            </div>
          </section>
          <div className="flex items-center justify-center">
            <button
              disabled={subscriptionStatus}
              onClick={() => {
                handleCheckout(process.env.REACT_APP_stripeProductYearly);
              }}
              className="btn rounded-full my-4 absolute bottom-0 bg-btnColor border-none"
            >
              Purchase
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
