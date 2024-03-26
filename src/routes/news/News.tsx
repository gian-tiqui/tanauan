import { useContext, useEffect, useState } from "react";
import LatestNewsContainer from "./components/LatestNewsContainer";
import {
  NewsContext,
  SetNewsContext,
  SetTagsContext,
  TagsContext,
} from "../../context-container/ContextContainer";
import axios, { AxiosResponse } from "axios";
import NewsContainer from "./components/NewsContainer";
import TrendsForYou from "./components/TrendsForYou";
import { SetShowFooterContext, SetShowHeaderContext } from "../../App";
import { Link } from "react-router-dom";
import { News as NewsInterface } from "../home/components/NewsCarousel";

const TAGS_ENDPOINT =
  "https://tanauancity.gov.ph/wp-json/wp/v2/tagss?per_page=100";

export interface CategoryInterface {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
}

export interface TagsInterface {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
}

const News = () => {
  const tags = useContext(TagsContext);
  const setTags = useContext(SetTagsContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTag, setSelectedTag] = useState<TagsInterface>(tags[0]);
  const setShowFooter = useContext(SetShowFooterContext);
  const setShowHeader = useContext(SetShowHeaderContext);
  const news = useContext(NewsContext);
  const setNews = useContext(SetNewsContext);

  useEffect(() => {
    setShowHeader(false);

    return () => {
      setShowHeader(true);
    };
  }, [setShowHeader]);

  useEffect(() => {
    setSelectedTag(tags[0]);
  }, [tags]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    /*

      HELLO DEVELOPER! 👋 
      
      If you happen to stumble into this file and you encounter issues, please contact me, Michael Gian Tiqui
      you can find me on Facebook. That's all, see youuuu~

    */

    setShowFooter(false);
    const fetchTags = async () => {
      try {
        if (tags.length === 0) {
          const response: AxiosResponse<TagsInterface[]> = await axios.get(
            TAGS_ENDPOINT
          );

          const data = response.data;

          data.sort((a: TagsInterface, b: TagsInterface) => b.count - a.count);

          setTags(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTags();

    return () => {
      setShowFooter(true);
    };
  }, [setShowFooter, setTags, tags.length]);

  const handleTagsClicked = (tag: TagsInterface) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const fetchData = async () => {
      const DATA_PER_PAGE = 100;

      try {
        const NEWS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/posts?per_page=${DATA_PER_PAGE}`;

        if (news.length === 0) {
          const response: AxiosResponse<NewsInterface[]> = await axios.get(
            NEWS_ENDPOINT
          );

          const data = response.data;

          const modifiedData: NewsInterface[] = data.map((ns) => ({
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [news, setNews]);

  return (
    <div className="h-screen">
      <div className="container px-3 mx-auto sm:px-5 md:px-7 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="h-full border-t border-l border-r border-l-black border-t-black border-r-black">
              <div className="hidden fixed flex-wrap justify-start gap-2 p-2 border-b border-black lg:w-[841px] bg-white opacity-95">
                {tags.length !== 0 ? (
                  tags.slice(0, 3).map((tag) => (
                    <button
                      onClick={() => handleTagsClicked(tag)}
                      key={tag.id}
                      className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      {tag.name}
                    </button>
                  ))
                ) : (
                  <p>Loading categories...</p>
                )}
                {tags.length > 3 && (
                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="px-10 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      {showDropdown ? "Hide" : "Show More"}
                    </button>
                    {showDropdown && (
                      <div className="absolute left-0 z-10 p-2 mt-2 overflow-y-auto bg-white shadow-md max-h-48">
                        {tags.slice(3).map((tag) => (
                          <button
                            onClick={() => handleTagsClicked(tag)}
                            key={tag.id}
                            className="block w-full px-3 py-2 my-1 bg-gray-200 rounded-md hover:bg-gray-300"
                          >
                            {tag.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>{selectedTag && <NewsContainer id={selectedTag.id} />}</div>
            </div>
          </div>
          <div className="hidden col-span-1 px-4 pt-4 border-t border-black sm:hidden md:block lg:block">
            <div className="fixed grid gap-2">
              <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
                <p className="mb-3 ml-4 text-lg font-bold">Latest News</p>
                <LatestNewsContainer />
              </div>
              <div className="py-4 bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
                <p className="pl-4 mb-3 text-lg font-bold">Trends for you</p>
                <TrendsForYou tags={tags} setSelectedTag={setSelectedTag} />
              </div>
              <div className="bg-white shadow-lg sm:w-64 md:w-72 lg:w-96 rounded-2xl">
                <Link to={"/"} className="">
                  <div className="w-full px-5 py-1 text-white bg-red-800 rounded-lg">
                    <p className="font-bold text-center">Exit News</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
