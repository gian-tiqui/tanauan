import { useContext, useEffect, useState } from "react";
import Divider from "../home/components/Divider";
import LatestNewsContainer from "./components/LatestNewsContainer";
import {
  NewsContext,
  SetTagsContext,
  TagsContext,
} from "../../context-container/ContextContainer";
import axios, { AxiosResponse } from "axios";
import NewsContainer from "./components/NewsContainer";
import TrendsForYou from "./components/TrendsForYou";
import { SetShowFooterContext } from "../../App";

const TAGS_ENDPOINT =
  "https://tanauancity.gov.ph/wp-json/wp/v2/tagss?per_page=100";

// const EXAMPLE_GLOBAL_PARAMS: string[] = [
//   "https://tanauancity.gov.ph/wp-json/wp/v2/posts?categories=3&tags=315",
//   "https://tanauancity.gov.ph/wp-json/wp/v2/posts?categories=3",
//   "https://tanauancity.gov.ph/wp-json/wp/v2/posts?tags=315",
// ];

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

  const news = useContext(NewsContext);

  useEffect(() => {
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
  });

  const handleTagsClicked = (tag: TagsInterface) => {
    setSelectedTag(tag);

    const modifiedNews = news.filter((ns) => {
      return ns.tagss.includes(tag.id);
    });

    console.log(modifiedNews);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <Divider text="News" />
      <div className="container px-3 mx-auto mt-10 sm:px-5 md:px-7 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-2">
            <div className="h-full border-t border-l border-r border-l-black border-t-black border-r-black">
              <div className="flex flex-wrap justify-start gap-2 p-2 border-b border-black">
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
              <div className="p-2 overflow-y-auto max-h-[1000px]">
                {selectedTag && <NewsContainer id={selectedTag.id} />}
              </div>
            </div>
          </div>
          <div className="hidden col-span-1 px-4 pt-4 border-t border-black sm:block md:block lg:block">
            <div className="grid gap-4">
              <div className="p-4 bg-white shadow-lg rounded-2xl">
                <p className="mb-3 text-lg font-bold">Latest News</p>
                <LatestNewsContainer />
              </div>
              <div className="p-4 bg-white shadow-lg rounded-2xl">
                <p className="mb-3 text-lg font-bold">Trends for you</p>
                <TrendsForYou tags={tags} setSelectedTag={setSelectedTag} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
