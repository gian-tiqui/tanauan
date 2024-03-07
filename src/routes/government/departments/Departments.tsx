import Sorter from "./components/Sorter";

export interface DepartmentsInterface {
  name: string;
  url: string;
  type: string;
}

const STATIC_DEPARTMENTS: DepartmentsInterface[] = [
  {
    name: "Mayor's Office",
    url: "/",
    type: "institutional",
  },
  {
    name: "Gender and Developnent Office (GAD)",
    url: "/",
    type: "institutional",
  },
  {
    name: "Business Permit and Licensing Office (BPLO)",
    url: "/",
    type: "institutional",
  },
  {
    name: "Human Resource Management and Developnent Office (HRDMO)",
    url: "/",
    type: "institutional",
  },
  {
    name: "City Social Welfare and Development Office (CSWD)",
    url: "/",
    type: "institutional",
  },
  {
    name: "Office of the Public Market (OPM)",
    url: "/",
    type: "institutional",
  },
  {
    name: "Management Information Office (MIS)",
    url: "/",
    type: "institutional",
  },
  {
    name: "Traffice Management Office (TMO)",
    url: "/",
    type: "social",
  },
  {
    name: "Sports Development Office (SDO)",
    url: "/",
    type: "social",
  },
  {
    name: "City Engineering Office",
    url: "/",
    type: "infrastructure",
  },
  {
    name: "Office of the Building Official (OBO)",
    url: "/",
    type: "infrastructure",
  },
];

const Departments = () => {
  return (
    <div className="container px-3 mx-auto">
      <Sorter departments={STATIC_DEPARTMENTS} type="institutional" />
    </div>
  );
};

export default Departments;
