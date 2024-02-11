import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

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

  return (
    <div className="mt-10 bg-slate-900">
      <div className="container mx-auto px-3 pt-6 sm:pt-8 md:pt-10">
        <p className="text-md sm:text-md md:text-lg font-bold text-white text-center mb-14">
          The City's Modern Public Services
        </p>
        <div className="flex justify-center gap-20 text-white">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="mySwiper"
          >
            {services?.map((service, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img
                    src={service.imageURI}
                    alt={service.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto"
                  />
                  <p className="text-sm sm:text-xs md:text-sm truncate max-w-xs mx-auto text-center">
                    {service.title}
                  </p>
                  <p className="text-xs sm:text-xs md:text-sm truncate max-w-xs mx-auto text-center">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="mt-5 sm:mt-10 md:mt-16 text-center text-sm sm:text-md md:text-lg text-white">
          The Official eService Portal of Tanauan City, created to provide
          citizens of Tanauan City a convenient one-stop solution platform for
          online services and information.
        </p>
        <div className="container flex justify-center mx-auto">
          <div className="mt-3 sm:mt-5 md:mt-10 flex flex-col">
            <button className="rounded-md mt-1 sm:my-1 md:my-2 py-1 font-bold text-white text-sm sm:text-md md:text-lg w-24 sm:w-32 md:w-40 bg-blue-500">
              SIGN UP
            </button>
            <button className="rounded-md mb-5 sm:mb-7 md:mb-10 my-1 sm:my-1 md:my-2 py-1 font-bold w-24  md:w-40 sm:w-32 border border-blue-500 text-blue-500 text-sm sm:text-md md:text-lg">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;
