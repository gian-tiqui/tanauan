import { useContext, useEffect } from "react";
import { DepartmentContext, SetDepartmentContext } from "../../../App";
import axios from "axios";

export interface DepartmentsInterface {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  content: { rendered: string };
  featured_media: number;
}

export const MAX_PAGE_NUMS = 2;

const Departments = () => {
  const departments = useContext(DepartmentContext);
  const setDepartments = useContext(SetDepartmentContext);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        if (departments.length === 0) {
          let allData: DepartmentsInterface[] = [];

          for (let pageNum = 1; pageNum <= MAX_PAGE_NUMS; pageNum++) {
            const response = await axios.get(
              `https://tanauancity.gov.ph/wp-json/wp/v2/ova_dep?page=${pageNum}`
            );
            allData = allData.concat(response.data);
          }

          const modifiedDeps: DepartmentsInterface[] = allData.map(
            (item: DepartmentsInterface) => ({
              title: item.title,
              date: item.date,
              link: `/departments/${item.id}`,
              content: item.content,
              featured_media: item.featured_media,
              id: item.id,
            })
          );

          console.log(modifiedDeps);
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
