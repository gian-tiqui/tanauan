import { Link } from "react-router-dom";
import Divider from "../home/components/Divider";

const News = () => {
  return (
    <>
      <Divider text="News" />
      <div className="container px-3 mx-auto mt-10 sm:px-5 md:px-7 lg:px-32">
        <div className="grid grid-cols-3 border-t-2 border-black">
          <div className="col-span-2">
            <div className="h-screen border-r-2 border-black">
              <div className="flex justify-start gap-10 pl-2 border-b-2 border-black">
                <Link to={""}>hi</Link>
                <Link to={""}>hi</Link>
                <Link to={""}>hi</Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 px-4 pt-4">
            <div className="grid gap-4 grid-cols">
              <div className="p-4 shadow-lg rounded-2xl h-52">
                alknalknsdanklskldn
              </div>
              <div className="p-4 shadow-lg rounded-2xl h-52">aksdbjnjksaj</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
