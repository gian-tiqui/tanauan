import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

interface Services {
  title: string;
  description: string;
  imageURI: string;
}

const PublicServices = () => {
  const [services, setServices] = useState<Services[] | undefined>(undefined);

  useEffect(() => {
    const setDaServices = () => {
      const svs: Services[] = [
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
      ];

      setServices(svs);
    };

    setDaServices();
  }, []);

  return (
    <div className="mt-10 bg-slate-900">
      <div className="container mx-auto px-3 pt-10">
        <p className="text-2xl font-bold text-white text-center mb-14">
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
                    className="w-32 h-32 mx-auto"
                  />
                  <p className="text-sm truncate max-w-xs mx-auto text-center">
                    {service.title}
                  </p>
                  <p className="text-xs truncate max-w-xs mx-auto text-center">
                    {service.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="mt-16 px-4 text-center text-lg text-white">
          The Official eService Portal of Tanauan City, created to provide
          citizens of Tanauan City a convenient one-stop solution platform for
          online services and information.
        </p>
        <div className="container flex justify-center mx-auto">
          <div className="mt-10 flex flex-col">
            <button className="rounded-md my-2 py-1 font-bold text-white w-40 bg-blue-500">
              SIGN UP
            </button>
            <button className="rounded-md my-2 py-1 font-bold mb-7 w-40 border border-blue-500 text-blue-500">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;
