import { useState, useEffect, useContext } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import axios, { AxiosResponse } from "axios";
import News from "../../news-article/NewsArticle";
import CardSkeleton from "./NewsCardSkeleton";
import {
  NewsContext,
  SetNewsContext,
} from "../../../context-container/ContextContainer";

export interface News {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
  categories: number[];
  tagss: number[];
}

const NewsCarousel = () => {
  const [loading, setLoading] = useState(true);
  const news = useContext(NewsContext);
  const setNews = useContext(SetNewsContext);

  useEffect(() => {
    const fetchData = async () => {
      const DATA_PER_PAGE = 100;

      try {
        const NEWS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/posts?per_page=${DATA_PER_PAGE}`;

        if (news.length === 0) {
          const response: AxiosResponse<News[]> = await axios.get(
            NEWS_ENDPOINT
          );

          const data = response.data;

          const modifiedData: News[] = data.map((ns) => ({
            categories: ns.categories,
            content: ns.content,
            date: ns.date,
            featured_media: ns.featured_media,
            id: ns.id,
            link: `/news/${ns.id}`,
            tagss: ns.tagss,
            title: ns.title,
          }));

          setNews(modifiedData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [news.length, setNews]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const DATA_PER_PAGE = 100;
  //       const totalPosts = 100; // 2820 POSTS
  //       const totalPages = Math.ceil(totalPosts / DATA_PER_PAGE);
  //       const allPosts = [];

  //       for (let page = 1; page <= totalPages; page++) {
  //         const offset = (page - 1) * DATA_PER_PAGE;
  //         const NEWS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/posts?per_page=${DATA_PER_PAGE}&offset=${offset}`;
  //         const response: AxiosResponse<News[]> = await axios.get(
  //           NEWS_ENDPOINT
  //         );
  //         const data = response.data;

  //         const modifiedData = data.map((ns) => ({
  //           categories: ns.categories,
  //           content: ns.content,
  //           date: ns.date,
  //           featured_media: ns.featured_media,
  //           id: ns.id,
  //           link: `/news/${ns.id}`,
  //           tagss: ns.tagss,
  //           title: ns.title,
  //         }));

  //         allPosts.push(...modifiedData);
  //       }

  //       setNews(allPosts);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   if (news.length === 0) {
  //     fetchData();
  //   }
  // }, [news.length, setNews]);

  return (
    <div className="container px-4 mx-auto">
      {loading ? (
        <div>
          <div className="hidden sm:hidden md:block lg:block">
            <Swiper
              spaceBetween={15}
              slidesPerView={3}
              className="p-10 mt-10 sm:mx-5 md:mx-5 lg:mx-44"
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
              className="p-10 mt-10 sm:mx-5 md:mx-5 lg:mx-44"
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
              className="p-10 mt-10 sm:mx-5 md:mx-5 lg:mx-44"
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
                    tagss={ns.tagss}
                    categories={ns.categories}
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
              className="p-5 mx-3 mt-10 sm:mx-5 md:mx-5 lg:mx-44"
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
                    tagss={ns.tagss}
                    categories={ns.categories}
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
