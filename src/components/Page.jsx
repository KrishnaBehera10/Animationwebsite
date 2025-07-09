import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { useEffect, useState } from "react";

function Page() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const timeframe = gsap.timeline();
    timeframe.to(".heading h1", {
      opacity: 1,
      duration: 3,
    });
    timeframe.to(
      "#loader",
      {
        opacity: 0,
        duration: 1,
        display: "none",
      },
      "same"
    );
    timeframe.to(
      "#page_1",
      {
        duration: 1,
        height: "40vh",
      },
      "same"
    );
    timeframe.call(() => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    });
  }, []);
  return (
    <div id="main">
      {/* page_1 */}
      <div id="page_1" className="w-full h-screen relative">
        <div id="loader"></div>
        <div className="heading">
          <h1>
            <em> We are a</em> CREATIVE <em>studio</em> DEDICATED <em>to </em>
            CULTURAL ADVANCEMENT <em>through</em> STRATEGY <em>and</em> DESIGN.
          </h1>
        </div>
      </div>

      {/* Page_2 */}
      <div className="text-black flex gap-5 text-sm">
        <p className="bg-gray-200 p-2 rounded font-semibold">Featured</p>
        <p className="p-2 rounded text-gray-500">Sectors</p>
        <p className="p-2 rounded text-gray-500">Clients</p>
      </div>

      <div
        id="page_2"
        className="w-full min-h-screen mt-5 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-12"
      >
        {/* //first section */}

        <div className="col-span-3  cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1738687527-works_apparatus_subjects_design_thumbnail.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Apparatus <br /> ‘Subjects’ Film Series
          </p>
        </div>

        <div id="video_contain" className="col-span-3 cursor-pointer">
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/bmyyTV_uRveh7V7B9gli_w-works_mineralhealth_brand_identity_hoverv2_vp9.webm"
            ></video>
          </div>
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726409479-works_mineralhealth_brand_identity_01.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Mineral Health <br />
            Branding & Identity
          </p>
        </div>

        <div
          id="video_contain"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/MSuoHS0BRmejaIX0H_f5TA-works_virginmusic-design_thumbnail_hoverv2_av1.mp4"
            ></video>
          </div>

          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1727537111-works_virginmusic-design_thumbnail.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Virgin Music <br /> Branding & Identity
          </p>
        </div>

        <div
          id="image-container"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <div id="image-box">
            <img
              src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1728929074-works_essentials-identity_thumbnail-1.jpg&w=768&q=96"
              alt=""
              className="object-contain"
            />
          </div>

          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1749820683-works_essentials-identity_thumbnail.jpg&w=1024&q=96"
            alt=""
            className="object-cover"
          />
          <p id="title" className="text-2xl py-1">
            Fear of God <br />
            Essentials Identity
          </p>
        </div>

        <div className="col-span-3 lg:col-start-10 cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1741972100-works_nikeskims_identity_thumbnail.jpeg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            NikeSKIMS <br />
            Confidential
          </p>
        </div>

        {/* //2nd section */}
        <div className="col-span-3  cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726170418-works_thefrosthouse_02.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            The Frost House <br />
            Branding & Identity
          </p>
        </div>

        <div id="video_contain" className="col-span-3 cursor-pointer">
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/LKqGDbXJR7q_aEngPqvmRA-thumbnail_hover_av1.mp4"
            ></video>
          </div>
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1727627835-works_erthos_brandidentity_thumbnail.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Erthos <br />
            Brand Identity
          </p>
        </div>

        <div
          id="video_contain"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1744053214-thumbnail.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Converse <br />
            Heritage Campaign
          </p>
        </div>

        <div
          id="image-container"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1749834024-thumbnail.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Mineral Health <br />
            E-commerce Website Read
          </p>
        </div>

        <div className="col-span-3 lg:col-start-10 cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1727445385-works_converse_fa23_design_03.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Converse <br />
            Global Campaign
          </p>
        </div>

        {/* //3rd section */}

        <div id="video_contain" className="col-span-3 cursor-pointer">
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/Vp-a-iu2Q2Ca3buXSkL7Lg-works_americaneagle_life_your_life_design_hover_vp9.webm"
            ></video>
          </div>
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1740603450-works_americaneagle_life_your_life_design_thumb.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            out Converse American Eagle <br />
            Live Your Life
          </p>
        </div>

        <div className="col-span-3  cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726171535-cover.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Converse <br />
            nextStudio Design Tool Read th
          </p>
        </div>

        <div
          id="video_contain"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1728935746-.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            SKKY Partners <br />
            Branding & Identity
          </p>
        </div>

        <div
          id="image-container"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1736291430-thumbnail.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Directors Library <br />
            Editorial Platform
          </p>
        </div>

        <div className="col-span-3 lg:col-start-10 cursor-pointer">
          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1726235900-works_nike_fog_thumbnail.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Converse <br />
            Global Campaign
          </p>
        </div>

        {/* //4th section */}

        <div
          id="video_contain"
          className="col-span-3 lg:col-start-4 cursor-pointer"
        >
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/VKvYUXKuSOekRAmph-PkPA-works_nikechicago_strategy_01_hover_opt_vp9.webm"
            ></video>
          </div>

          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1741034359-works_nikechicago_strategy_01.jpg&w=768&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            Nike Chicago <br />
            Confidential
          </p>
        </div>

        <div
          id="video_contain"
          className="col-span-3 lg:col-span-6 cursor-pointer"
        >
          <div id="video_play">
            <video
              autoPlay
              loop
              muted
              src="https://videos.works.studio/EIPju61bR0-LHqnczTRzcA-comp-1_av1.mp4"
            ></video>
          </div>

          <img
            src="https://works.studio/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F136349%2F1728335298-comp-1-0-00-02-12.jpg&w=1024&q=96"
            alt=""
            className="object-contain"
          />
          <p id="title" className="text-2xl py-1">
            U.S. Soccer <br />
            OnlyForward Campaign Read th
          </p>
        </div>
      </div>

      {/* //page_3 */}
      <div
        id="page_3"
        className="w-full h-[400px] flex justify-center items-center mb-35"
      >
        <div className="w-full flex flex-col items-center gap-5">
          <h1
            id="footer"
            className="text-3xl sm:text-5xl max-w-2xl text-center"
          >
            We believe in the POWER of INTENTIONAL CREATIVITY.
          </h1>
          <p className="bg-gray-200 text-gray-800 p-2 w-fit rounded text-sm cursor-pointer">
            Partner with us
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="w-full flex gap-5 flex-wrap justify-between bg-yellow-300 absolute left-0 bottom-0 p-5">
          <div className="text-sm">
            <h1>New York City</h1>
            <p>{time}</p>
          </div>

          <div className="flex gap-5 flex-col flex-1">
            <div className="flex justify-between gap-5">
              <div className="text-sm">
                <p>Projects</p>
                <p>Ideas</p>
                <p>About</p>
              </div>
              <div className="text-sm">
                <p>Instagram</p>
                <p>LinkDln</p>
                <p>X(Twiiter)</p>
              </div>
              <div className="text-sm">
                <p>Hello@work.studio</p>
                <p>@2025</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="Enter Email to Subscribe"
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
