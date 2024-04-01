import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { News } from "../routes/home/components/NewsCarousel";
import { CityInterface } from "../routes/home/components/CityHighlights";
import { CityOfficialInterface } from "../routes/government/city-officials/CityOfficials";
import { DepartmentsInterface } from "../routes/government/departments/Departments";
import { CategoryInterface, TagsInterface } from "../routes/news/News";

interface ContextContainerProps {
  children: ReactNode;
}

export const NewsContext = createContext<News[]>([]);
export const SetNewsContext = createContext<Dispatch<SetStateAction<News[]>>>(
  () => {}
);

export const CityContext = createContext<CityInterface[]>([]);
export const SetCityContext = createContext<
  Dispatch<SetStateAction<CityInterface[]>>
>(() => {});

export const CityOfficialContext = createContext<CityOfficialInterface[]>([]);
export const SetCityCityOfficialContext = createContext<
  Dispatch<SetStateAction<CityOfficialInterface[]>>
>(() => {});

export const DepartmentContext = createContext<DepartmentsInterface[]>([]);
export const SetDepartmentContext = createContext<
  Dispatch<SetStateAction<DepartmentsInterface[]>>
>(() => {});

export const CategoriesContext = createContext<CategoryInterface[]>([]);
export const SetCategoryContext = createContext<
  Dispatch<SetStateAction<CategoryInterface[]>>
>(() => {});

export const TagsContext = createContext<TagsInterface[]>([]);
export const SetTagsContext = createContext<
  Dispatch<SetStateAction<TagsInterface[]>>
>(() => {});

export const DestinationIDContext = createContext<number>(0);
export const SetDestinationIDContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => {});

const ContextContainer = ({ children }: ContextContainerProps) => {
  const [news, setNews] = useState<News[]>([]);
  const [cities, setCities] = useState<CityInterface[]>([]);
  const [cityOfficial, setCityOfficial] = useState<CityOfficialInterface[]>([]);
  const [departments, setDepartments] = useState<DepartmentsInterface[]>([]);
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [tags, setTags] = useState<TagsInterface[]>([]);
  const [destinationID, setDestinationID] = useState<number>(0);

  return (
    <SetDestinationIDContext.Provider value={setDestinationID}>
      <DestinationIDContext.Provider value={destinationID}>
        <SetTagsContext.Provider value={setTags}>
          <TagsContext.Provider value={tags}>
            <SetCategoryContext.Provider value={setCategories}>
              <CategoriesContext.Provider value={categories}>
                <SetDepartmentContext.Provider value={setDepartments}>
                  <DepartmentContext.Provider value={departments}>
                    <SetCityCityOfficialContext.Provider
                      value={setCityOfficial}
                    >
                      <CityOfficialContext.Provider value={cityOfficial}>
                        <SetCityContext.Provider value={setCities}>
                          <CityContext.Provider value={cities}>
                            <SetNewsContext.Provider value={setNews}>
                              <NewsContext.Provider value={news}>
                                {children}
                              </NewsContext.Provider>
                            </SetNewsContext.Provider>
                          </CityContext.Provider>
                        </SetCityContext.Provider>
                      </CityOfficialContext.Provider>
                    </SetCityCityOfficialContext.Provider>
                  </DepartmentContext.Provider>
                </SetDepartmentContext.Provider>
              </CategoriesContext.Provider>
            </SetCategoryContext.Provider>
          </TagsContext.Provider>
        </SetTagsContext.Provider>
      </DestinationIDContext.Provider>
    </SetDestinationIDContext.Provider>
  );
};

export default ContextContainer;
