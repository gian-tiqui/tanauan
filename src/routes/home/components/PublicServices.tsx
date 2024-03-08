import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { PreventContextMenu } from "../../../App";
import servicesBg from "../../../assets/services-bg.png";

interface Services {
  title: string;
  description: string;
  imageURI: string;
}

const PublicServices = () => {
  const [services] = useState<Services[] | undefined>([
    {
      title: "BUSINESS PERMIT AND LICENSING OFFICE",
      description: "Online Registration for New and Renewal of Business",
      imageURI:
        "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
    },
    {
      title: "PAY YOUR REAL PROPERTY TAX",
      description: "Online payment of Real property tax",
      imageURI:
        "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/real_property_tax.png",
    },
    {
      title: "BUSINESS ESTABLISH CENTER",
      description: "Business safety seal application",
      imageURI:
        "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/safety_seal.png",
    },
    {
      title: "TANAUAN CITY CARD",
      description: "(Coming soon)",
      imageURI:
        "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/citizen_card.png",
    },
    {
      title: "PEOPLE'S CORNER",
      description: "File, Report, Complain or ask information",
      imageURI:
        "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/peoples_corner.png",
    },
  ]);

  const servicesRef = useRef(services);

  const preventMenu = useContext(PreventContextMenu);

  return (
    <div
      className="mt-20 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${servicesBg})`,
      }}
    >
      <div className="container px-3 pt-6 mx-auto sm:pt-8 md:pt-10">
        <p className="font-bold text-center text-white text-md sm:text-md md:text-lg mb-14">
          The City's Modern Public Services
        </p>
        <div className="flex justify-center gap-20 text-white">
          <Swiper
            spaceBetween={1}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
          >
            {servicesRef.current?.map((service, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src={service.imageURI}
                    alt={service.title}
                    className="w-20 h-20 mx-auto sm:w-24 sm:h-24 md:w-32 md:h-32"
                    onContextMenu={preventMenu}
                  />
                  <p className="max-w-xs mx-auto mt-5 text-sm font-bold text-center text-black truncate sm:text-xs md:text-lg">
                    {service.title}
                  </p>
                  <p className="max-w-xs mx-auto text-xs text-center text-black truncate sm:text-sm md:text-md lg:text-lg">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container px-8 mx-auto mt-16 sm:mt-24 sm:px-0">
          <p className="text-sm font-bold text-center text-black md:text-base lg:text-lg">
            The Official eService Portal of Tanauan City, created to provide
            citizens of Tanauan City a convenient one-stop solution platform for
            online services and information.
          </p>
        </div>

        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col mt-3 sm:mt-5 md:mt-10">
            <button className="w-24 py-1 my-1 text-xs font-bold text-white bg-blue-900 rounded-md sm:my-1 md:my-2 sm:text-sm md:text-md sm:w-32 md:w-40">
              SIGN UP
            </button>
            <button className="w-24 py-1 my-1 mb-5 text-xs font-bold text-blue-900 bg-white border border-blue-900 rounded-md sm:mb-7 md:mb-10 sm:my-1 md:my-2 md:w-40 sm:w-32 sm:text-sm md:text-md">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;
