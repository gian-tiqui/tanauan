import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios, { AxiosResponse } from "axios";
import News from "../../news-article/NewsArticle";
import CardSkeleton from "./CardSkeleton";

export interface News {
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featuredMedia: string;
}

const MAX_PAGE_NUMS = 1;

const NewsCarousel = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allData: News[] = [];

        for (let pageNum = 1; pageNum <= MAX_PAGE_NUMS; pageNum++) {
          const response: AxiosResponse<News[]> = await axios.get(
            `https://tanauancity.gov.ph/wp-json/wp/v2/posts?page=${pageNum}`
          );
          allData = allData.concat(response.data);
        }

        const modifiedNews: News[] = allData.map((item: any) => ({
          title: item.title,
          date: item.date,
          link: `/news/${item.id}`,
          content: item.content,
          featuredMedia: item._links["wp:featuredmedia"][0].href,
        }));

        setNews(modifiedNews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-4 mx-auto">
      {loading ? (
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
        >
          <SwiperSlide>
            <CardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <CardSkeleton />
          </SwiperSlide>
          <SwiperSlide>
            <CardSkeleton />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
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
                    title={ns.title}
                    date={ns.date}
                    link={ns.link}
                    featuredMedia={ns.featuredMedia}
                    content={{ rendered: ns.content.rendered }}
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
              {news.map((ns, index) => (
                <SwiperSlide key={index}>
                  <NewsCard
                    title={ns.title}
                    date={ns.date}
                    link={ns.link}
                    featuredMedia={ns.featuredMedia}
                    content={{ rendered: ns.content.rendered }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsCarousel;
