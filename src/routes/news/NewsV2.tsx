import { useContext, useEffect, useState } from "react";
import {
  NewsContext,
  SetNewsContext,
  SetTagsContext,
  TagsContext,
} from "../../context-container/ContextContainer";
import axios, { AxiosResponse } from "axios";
import NewsContainer from "./components/NewsContainer";
import { SetShowFooterContext, SetShowHeaderContext } from "../../App";
import {
  DATA_PER_PAGE,
  News as NewsInterface,
} from "../home/components/NewsCarousel";

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

const NewsV2 = () => {
  const tags = useContext(TagsContext);
  const setTags = useContext(SetTagsContext);
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

  useEffect(() => {
    const fetchData = async () => {
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
      <nav>
        <div className="grid grid-cols-3 bg-white shadow-2xl h-11">
          <div>block 1</div>
          <div>block 2</div>
          <div>block 3</div>
        </div>
      </nav>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
          <div className="h-screen overflow-auto">
            <div>{selectedTag && <NewsContainer id={selectedTag.id} />}</div>
          </div>
          <div className="h-full col-span-3">
            <div>{selectedTag && <NewsContainer id={selectedTag.id} />}</div>
          </div>
          <div className="h-screen overflow-auto">
            <div>{selectedTag && <NewsContainer id={selectedTag.id} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsV2;
