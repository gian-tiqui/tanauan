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
  const [selectedDepartment, setSelectedDepartment] =
    useState<DepartmentsInterface>(departments[0]);

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
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-none">
          {departments.map((department) => (
            <li
              onClick={() => setDepartmentContent(department)}
              key={department.id}
              className="px-4 py-2 m-2 cursor-pointer hover:bg-red-100 hover:text-red-700"
            >
              {department.title.rendered}
            </li>
          ))}
        </ul>
        <div className="p-4 bg-white rounded-md shadow-sm">
          <h3 className="mb-2 font-bold text-red-700">
            Selected Department Details
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <div className="text-gray-600">Department Title:</div>
            <div className="font-medium">
              {selectedDepartment.title.rendered}
            </div>
            <div className="text-gray-600">Link:</div>
            <a
              href={selectedDepartment.link}
              target="_blank"
              rel="noreferrer noopener"
              className="text-red-500 hover:underline"
            >
              {selectedDepartment.link}
            </a>
            <div className="text-gray-600">Date:</div>
            <div>{selectedDepartment.date}</div>
            {/* Conditionally display content if available */}
            {selectedDepartment.content.rendered && (
              <>
                <div className="text-gray-600">Content:</div>
                {selectedDepartment.content.rendered !== "" && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedDepartment.content.rendered,
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
