import { DepartmentsInterface } from "../Departments";

interface SorterProps {
  type: string;
  departments: DepartmentsInterface[];
}

const Sorter = ({ type, departments }: SorterProps) => {
  return (
    <div>
      <ul>
        {departments
          .filter((department) => department.type === type)
          .map((department, index) => (
            <li key={index}>{department.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Sorter;
