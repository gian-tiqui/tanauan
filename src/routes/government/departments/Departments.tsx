import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        if (departments.length === 0) {
          const DEPS_ENDPOINT = `https://tanauancity.gov.ph/wp-json/wp/v2/ova_dep?per_page=${DATA_PER_PAGE}`;

          const response: AxiosResponse<DepartmentsInterface[]> =
            await axios.get(DEPS_ENDPOINT);

          const data = response.data;

          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDepartments();
  }, [departments.length, setDepartments]);

  return <div className="container px-3 mx-auto"></div>;
};

export default Departments;
