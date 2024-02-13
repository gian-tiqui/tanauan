import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

const USERS_URI = "https://jsonplaceholder.typicode.com/users";

const City = () => {
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(USERS_URI);

      setUsers(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default City;
