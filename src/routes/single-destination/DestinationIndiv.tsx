import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CityContext,
  SetCityContext,
} from "../../context-container/ContextContainer";
import { SetShowFooterContext, SetShowHeaderContext } from "../../App";
import axios, { AxiosResponse } from "axios";
import {
  CITIES_ENDPOINT,
  CityInterface,
} from "../home/components/CityHighlights";

const DestinationIndiv = () => {
  const cities = useContext(CityContext);
  const setCities = useContext(SetCityContext);
  const { id } = useParams();
  const setShowHeader = useContext(SetShowHeaderContext);
  const setShowFooter = useContext(SetShowFooterContext);
  const [imageURI, setImageURI] = useState<string | undefined>(undefined);
  const [nextPlace, setNextPlace] = useState<CityInterface | null>(null);
  const [prevPlace, setPrevPlace] = useState<CityInterface | null>(null);

  const city = cities.find((city) => city.id.toString() === id);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (cities.length === 0) {
          const response: AxiosResponse<CityInterface[]> = await axios.get(
            CITIES_ENDPOINT
          );

          const data: CityInterface[] = response.data.map((item) => ({
            title: item.title,
            content: item.content,
            date: item.date,
            featured_media: item.featured_media,
            id: item.id,
            link: `/city-highlight/${item.id}`,
          }));

          setCities(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, [cities.length, cities, setCities]);

  useEffect(() => {
    const getImage = async () => {
      try {
        const URI = `https://tanauancity.gov.ph/wp-json/wp/v2/media/${city?.featured_media}`;
        const res = await axios.get(URI);
        const data = res.data;

        setImageURI(data.guid.rendered);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (city?.featured_media) {
      getImage();
    }
  }, [city?.featured_media]);

  useEffect(() => {
    const currNewsId = id;
    const currentIndex = cities.findIndex(
      (item) => item.id.toString() === currNewsId
    );

    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex =
      currentIndex < cities.length - 1 ? currentIndex + 1 : null;

    const prev = prevIndex !== null ? cities[prevIndex] : null;
    const next = nextIndex !== null ? cities[nextIndex] : null;

    setPrevPlace(prev);
    setNextPlace(next);
  }, [cities, id]);

  useEffect(() => {
    setShowFooter(false);
    setShowHeader(false);

    return () => {
      setShowFooter(true);
      setShowHeader(true);
    };
  }, [setShowHeader, setShowFooter]);

  const extractLastParagraph = (htmlContent: string): string | null => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const paragraphs = doc.querySelectorAll("p");
    if (paragraphs.length > 0) {
      const lastParagraph = paragraphs[paragraphs.length - 1];
      return lastParagraph.textContent?.trim() ?? null;
    }
    return null;
  };

  return (
    <div
      style={{ backgroundImage: `url(${imageURI})` }}
      className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
    >
      <div className="absolute inset-0 object-cover w-full h-full bg-black opacity-60"></div>

      <div className="z-10 flex flex-col mx-auto my-auto text-justify text-white">
        <p className="text-3xl font-extrabold text-center">
          {city?.title.rendered}
        </p>
        {city?.content.rendered && (
          <p className="mx-auto mt-10 text-justify max-w-[1000px]">
            {extractLastParagraph(city?.content?.rendered)}
          </p>
        )}
        <div className="flex h-8 mx-auto mt-10 rounded-lg">
          {prevPlace && (
            <Link
              to={`/destinations/${prevPlace?.id}`}
              className="flex items-center justify-center w-24 border rounded-s-md"
            >
              <p>Previous</p>
            </Link>
          )}
          <Link
            to={"/destinations"}
            className="flex items-center justify-center w-24 border"
          >
            <p>Home</p>
          </Link>
          {nextPlace && (
            <Link
              to={`/destinations/${nextPlace?.id}`}
              className="flex items-center justify-center w-24 border rounded-e-md"
            >
              <p>Next</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationIndiv;
