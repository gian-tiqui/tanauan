import axios, { AxiosResponse } from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  NewsContext,
  SetNewsContext,
} from "../../context-container/ContextContainer";
import { News } from "../home/components/NewsCarousel";
import LatestNewsContainer from "../news/components/LatestNewsContainer";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/news-loading.json";
import { BiShare } from "react-icons/bi";
import Modal from "../../components/modal/Modal";
import { Helmet } from "react-helmet";

const NewsArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [newsData, setNewsData] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [prevNews, setPrevNews] = useState<News | null>(null);
  const [nextNews, setNextNews] = useState<News | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const news = useContext(NewsContext);
  const setNews = useContext(SetNewsContext);

  useEffect(() => {
    const currNewsId = id;
    const currentIndex = news.findIndex(
      (item) => item.id.toString() === currNewsId
    );

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex = currentIndex < news.length - 1 ? currentIndex + 1 : null;

    const prev = prevIndex !== null ? news[prevIndex] : null;
    const next = nextIndex !== null ? news[nextIndex] : null;

    setPrevNews(prev);
    setNextNews(next);
  }, [id, news]);

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
  }, [news, setNews]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<News>(
          `https://tanauancity.gov.ph/wp-json/wp/v2/posts/${id}`
        );

        const data = response.data;
        setNewsData(data);

        if (data.featured_media) {
          const mediaResponse = await axios.get(
            `https://tanauancity.gov.ph/wp-json/wp/v2/media/${data.featured_media}`
          );
          const mediaData = mediaResponse.data;
          setImage(mediaData.source_url);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const extractStrings = (htmlContent: string): string[] => {
    const divElements = new DOMParser()
      .parseFromString(htmlContent, "text/html")
      .querySelectorAll(".x11i5rnm div");
    const strings: string[] = [];
    divElements.forEach((element) => {
      if (element.textContent) {
        strings.push(element.textContent.trim());
      }
    });
    return strings;
  };

  if (loading || !newsData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Lottie animationData={loadingAnimation} className="w-auto h-52" />
      </div>
    );
  }

  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const imageUrl = encodeURIComponent(image || "");
    const title = encodeURIComponent(newsData.title.rendered);
    const description = encodeURIComponent(
      extractStrings(newsData.content.rendered).join(" ")
    );
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&picture=${imageUrl}&title=${title}&description=${description}`;
    window.open(facebookShareUrl, "_blank");
  };

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = newsData.title.rendered;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterShareUrl, "_blank");
  };

  const handleSharePinterest = () => {
    const url = encodeURIComponent(window.location.href);
    const imageUrl = "";
    const description = newsData.title.rendered;
    const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${url}&media=${imageUrl}&description=${description}`;
    window.open(pinterestShareUrl, "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
    window.open(linkedInShareUrl, "_blank");
  };

  const handleShareArticle = () => {
    onClose();
  };

  const onClose = () => {
    setOpen((prevVal) => !prevVal);
  };

  return (
    <div className="grid gap-5 py-10 md:flex md:justify-center">
      <Helmet>
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={newsData.title.rendered} />
        <meta
          property="og:description"
          content={extractStrings(newsData.content.rendered).join(" ")}
        />
        <meta property="og:image" content={image ? image : ""} />
      </Helmet>
      <Modal
        handleShareFacebook={handleShareFacebook}
        handleShareLinkedIn={handleShareLinkedIn}
        handleSharePinterest={handleSharePinterest}
        handleShareTwitter={handleShareTwitter}
        open={open}
        onClose={onClose}
        selfURL={encodeURIComponent(window.location.href)}
      />
      <div className="max-w-xl bg-white rounded-md shadow-md">
        <div className="px-6 py-8">
          <div className="flex justify-end">
            <button
              onClick={handleShareArticle}
              className="p-1 mb-6 border-2 border-black rounded-full hover:bg-gray-200"
            >
              <BiShare className="w-6 h-6" />
            </button>
          </div>
          <h2 className="mb-2 text-2xl font-semibold">
            {newsData.title.rendered}
          </h2>
          {image && (
            <div className="mb-6">
              <img
                src={image}
                alt={newsData.title.rendered}
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
          <p className="mb-4 text-sm text-gray-600">
            Published on {formatDate(newsData.date)}
          </p>
          <div className="text-base text-gray-700">
            <div>
              <p className="text-sm text-justify text-gray-800">
                {extractStrings(newsData.content.rendered).join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col mx-auto md:mx-0 w-72">
        <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
          <p className="mb-3 ml-4 text-lg font-bold">Latest News</p>
          <LatestNewsContainer />
        </div>

        <div className="grid grid-cols-1 py-2 border-t-4 border-b-4 md:flex md:justify-between mt-7 md:w-96 border-t-red-800 border-b-red-800">
          <div>
            {prevNews && (
              <Link to={`/news/${prevNews?.id}`}>
                <div className="w-48 p-4 cursor-pointer hover:bg-gray-100">
                  <p className="text-red-800 truncate">
                    <strong>Previous News: </strong>
                  </p>
                  <p className="text-justify">
                    Previous: {prevNews?.title.rendered}
                  </p>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextNews && (
              <Link to={`/news/${nextNews?.id}`}>
                <div className="w-48 p-4 cursor-pointer hover:bg-gray-100">
                  <p className="text-red-800 truncate">
                    <strong>Next News: </strong>
                  </p>
                  <p className="text-justify">{nextNews?.title.rendered}</p>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
          <Link to={"/"} className="">
            <div className="w-full px-5 py-1 text-white bg-red-800 rounded-lg">
              <p className="font-bold text-center">Exit News Article</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
