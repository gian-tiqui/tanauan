import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const MAX_PAGE_NUMS = 120;

// development

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
}

const Careers: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let allData: Post[] = [];
      try {
        for (let pageNum = 1; pageNum <= MAX_PAGE_NUMS; pageNum++) {
          const res: AxiosResponse<Post[]> = await axios.get(
            `https://tanauancity.gov.ph/wp-json/wp/v2/posts?page=${pageNum}`
          );
          allData = allData.concat(res.data);
        }
        setData(allData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="flex flex-wrap gap-10">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((d: Post, i: number) => (
          <div
            key={i}
            className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-gray-800">
                {d.title.rendered}
              </div>
              <div className="mb-2 font-bold text-gray-800 text-md">
                {formatDate(d.date)}
              </div>
              <div className="text-base text-gray-700">
                <div>
                  {extractStrings(d.content.rendered).map(
                    (string: string, index: number) => (
                      <p key={index} className="text-sm text-gray-800">
                        {string}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Careers;
