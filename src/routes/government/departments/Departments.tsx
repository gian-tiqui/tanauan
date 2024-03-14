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
    <div className="container px-3 mx-auto">
      <div className="grid grid-cols-2">
        <div className="grid">
          {departments.map((department) => (
            <button
              onClick={() => setDepartmentContent(department)}
              key={department.id}
              className="px-4 py-2 m-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {department.title.rendered}
            </button>
          ))}
        </div>
        <div>
          <pre>{JSON.stringify(selectedDepartment, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Departments;
