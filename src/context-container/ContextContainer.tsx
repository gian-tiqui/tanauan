import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { News } from "../routes/home/components/NewsCarousel";
import { City } from "../routes/home/components/CityHighlights";
import { CityOfficialInterface } from "../routes/government/city-officials/CityOfficials";
import { DepartmentsInterface } from "../routes/government/departments/Departments";

interface ContextContainerProps {
  children: ReactNode;
}

export const NewsContext = createContext<News[]>([]);
export const SetNewsContext = createContext<Dispatch<SetStateAction<News[]>>>(
  () => {}
);

export const CityContext = createContext<City[]>([]);
export const SetCityContext = createContext<Dispatch<SetStateAction<City[]>>>(
  () => {}
);

export const CityOfficialContext = createContext<CityOfficialInterface[]>([]);
export const SetCityCityOfficialContext = createContext<
  Dispatch<SetStateAction<CityOfficialInterface[]>>
>(() => {});

export const DepartmentContext = createContext<DepartmentsInterface[]>([]);
export const SetDepartmentContext = createContext<
  Dispatch<SetStateAction<DepartmentsInterface[]>>
>(() => {});

const ContextContainer = ({ children }: ContextContainerProps) => {
  const [news, setNews] = useState<News[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [cityOfficial, setCityOfficial] = useState<CityOfficialInterface[]>([]);
  const [departments, setDepartments] = useState<DepartmentsInterface[]>([]);

  return (
    <SetDepartmentContext.Provider value={setDepartments}>
      <DepartmentContext.Provider value={departments}>
        <SetCityCityOfficialContext.Provider value={setCityOfficial}>
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
  );
};

export default ContextContainer;
