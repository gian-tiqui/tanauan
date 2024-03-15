import { useContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  DepartmentContext,
  SetDepartmentContext,
} from "../../../context-container/ContextContainer";

export interface DepartmentsInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

export const DATA_PER_PAGE = 11;

const DepartmentCard: React.FC<DepartmentsInterface> = ({
  title,
  content,
  date,
}) => {
  const formatDate = (dateString: string): string => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="grid h-full p-10">
      <div>
        {title && title.rendered && (
          <p className="text-3xl font-bold text-center">{title.rendered}</p>
        )}
        {date && (
          <p className="mt-3 text-center text-gray-900">{formatDate(date)}</p>
        )}
      </div>
      {content && content.rendered && (
        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{ __html: content.rendered }}
        ></div>
      )}
    </div>
  );
};

const Departments = () => {
  const departments = useContext(DepartmentContext);
  const setDepartments = useContext(SetDepartmentContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedDepartment, setSelectedDepartment] =
    useState<DepartmentsInterface>(departments[0]);

  console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        if (departments.length === 0) {
          const DEPS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/ova_dep?per_page=${DATA_PER_PAGE}`;

          const response: AxiosResponse<DepartmentsInterface[]> =
            await axios.get(DEPS_ENDPOINT);

          const data = response.data;

          setDepartments(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDepartments();
  }, [departments.length, setDepartments]);

  const setDepartmentContent = (department: DepartmentsInterface) => {
    setSelectedDepartment(department);
  };

  return (
    <div className="container px-10 py-10 mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 shadow-xl rounded-xl">
          <p className="ml-3 text-2xl font-bold">Departments</p>
          <ul>
            {departments.map((department) => (
              <li
                onClick={() => setDepartmentContent(department)}
                key={department.id}
                className="px-2 py-1 m-2 text-sm rounded-md cursor-pointer hover:bg-gray-200"
              >
                {department.title && department.title.rendered}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span:1 sm:col-span-3">
          <DepartmentCard {...selectedDepartment} />
        </div>
      </div>
    </div>
  );
};

export default Departments;
