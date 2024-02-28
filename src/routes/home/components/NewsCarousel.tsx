import { useRef, useState } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export interface News {
  header: string;
  date: string;
  link: string;
  imageURI: string;
}

export const mNews: News[] = [
  {
    header:
      "2022 Census of Agriculture and Fisheries (CAF) sa Lungsod ng Tanauan",
    date: "September 18, 2023",
    link: "https://tanauancity.gov.ph/2022-census-of-agriculture-and-fisheries-caf-sa-lungsod-ng-tanauan/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/380271437_611149711228610_7526371682444393102_n.jpg",
  },
  {
    header: "Flag Raising Ceremony",
    date: "September 18, 2023",
    link: "https://tanauancity.gov.ph/flag-raising-ceremony/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/379122520_611065821236999_6258564747192293800_n-1024x683.jpg",
  },
  {
    header:
      "Libreng Medical Consultation, inihatid ng Jose P. Laurel Masonic Lodge No. 325 at Tanauan Medical Society",
    date: "September 16, 2023",
    link: "https://tanauancity.gov.ph/libreng-medical-consultation-inihatid-ng-jose-p-laurel-masonic-lodge-no-325-at-tanauan-medical-society/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/378971750_610018294675085_2932710066745674974_n-1024x683.jpg",
  },
  {
    header: "1st Fluvial Marian Parade sa Lawa ng Taal",
    date: "September 16, 2023",
    link: "https://tanauancity.gov.ph/1st-fluvial-marian-parade-sa-lawa-ng-taal/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/379413233_609869441356637_3968842840098101040_n-1024x576.jpg",
  },
  {
    header: "DSWD AICS para sa 56 na mga kababayan",
    date: "September 15, 2023",
    link: "https://tanauancity.gov.ph/dswd-aics-para-sa-56-na-mga-kababayan/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/378960890_609416001401981_1320504079983902771_n-1024x683.jpg",
  },
  {
    header:
      "Pagsisigurong natutugunan ang pangangailangang pinansyal ng ating mga kababayan",
    date: "September 15, 2023 ",
    link: "https://tanauancity.gov.ph/%f0%9d%90%8f%f0%9d%90%9a%f0%9d%90%a0%f0%9d%90%ac%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%a2%f0%9d%90%a0%f0%9d%90%ae%f0%9d%90%ab%f0%9d%90%a8%f0%9d%90%a7%f0%9d%90%a0-%f0%9d%90%a7%f0%9d%90%9a%f0%9d%90%ad-6/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/379045967_609317161411865_6797615672029630587_n-1024x683.jpg",
  },
  {
    header:
      "Blood Donation Drive bilang bahagi ng ika- 123rd Philippine Civil Service Anniversary",
    date: "September 15, 2023",
    link: "https://tanauancity.gov.ph/blood-donation-drive-bilang-bahagi-ng-ika-123rd-philippine-civil-service-anniversary/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/379004526_609297044747210_8982707934294406156_n-1024x683.jpg",
  },
  {
    header: "Interview and Orientation ng Food for Work Program",
    date: "September 14, 2023",
    link: "https://tanauancity.gov.ph/interview-and-orientation-ng-food-for-work-program/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/378999686_608951401448441_7806421420150584850_n-1024x683.jpg",
  },
  {
    header: "Technical Vocational Training Programs Graduation Ceremony",
    date: "September 14, 2023",
    link: "https://tanauancity.gov.ph/technical-vocational-training-programs-graduation-ceremony/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/378859207_608932228117025_3265470915006930097_n-1024x683.jpg",
  },
  {
    header: "School Bags at Supplies para sa ALS Learners!",
    date: "September 14, 2023",
    link: "https://tanauancity.gov.ph/school-bags-at-supplies-para-sa-als-learners-2/",
    imageURI:
      "https://tanauancity.gov.ph/wp-content/uploads/2023/10/378960906_608903124786602_6990550710391691449_n-1024x683.jpg",
  },
];

const NewsCarousel = () => {
  const [news] = useState<News[]>(mNews);

  const newsRef = useRef(news);

  return (
    <div className="container px-4 mx-auto">
      {/* large screens */}
      <div className="hidden sm:hidden md:block lg:block">
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
        >
          {news.map((ns, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                header={ns.header}
                date={ns.date}
                link={ns.link}
                imageURI={ns.imageURI}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block sm:block md:hidden lg:hidden">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 1400,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="p-5 mx-3 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
        >
          {newsRef.current.map((ns, index) => (
            <SwiperSlide key={index}>
              <NewsCard
                header={ns.header}
                date={ns.date}
                link={ns.link}
                imageURI={ns.imageURI}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel;
