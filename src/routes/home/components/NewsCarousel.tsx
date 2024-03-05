import { useState, useEffect, useContext } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios, { AxiosResponse } from "axios";
import News from "../../news-article/NewsArticle";
import CardSkeleton from "./NewsCardSkeleton";
import { NewsContext, SetNewsContext } from "../../../App";

export interface News {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

const MAX_PAGE_NUMS = 1;

const NewsCarousel = () => {
  const [loading, setLoading] = useState(true);
  const news = useContext(NewsContext);
  const setNews = useContext(SetNewsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (news.length === 0) {
          let allData: News[] = [];

          for (let pageNum = 1; pageNum <= MAX_PAGE_NUMS; pageNum++) {
            const response: AxiosResponse<News[]> = await axios.get(
              `https://tanauancity.gov.ph/wp-json/wp/v2/posts?page=${pageNum}`
            );
            allData = allData.concat(response.data);
          }

          const modifiedNews: News[] = allData.map((item: News) => ({
            title: item.title,
            date: item.date,
            link: `/news/${item.id}`,
            content: item.content,
            featured_media: item.featured_media,
            id: item.id,
          }));

          console.log("News modified");

          setNews(modifiedNews);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [news.length, setNews]);

  return (
    <div className="container px-4 mx-auto">
      {loading ? (
        <div>
          <div className="hidden sm:hidden md:block lg:block">
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
          </div>
          <div className="block sm:block md:hidden lg:hidden">
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              className="p-10 mt-10 mySwiper sm:mx-5 md:mx-5 lg:mx-44"
            >
              <SwiperSlide>
                <CardSkeleton />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
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
                    featured_media={ns.featured_media}
                    content={{ rendered: ns.content.rendered }}
                    id={ns.id}
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
                    featured_media={ns.featured_media}
                    content={{ rendered: ns.content.rendered }}
                    id={ns.id}
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
