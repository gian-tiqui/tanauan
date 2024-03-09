import Divider from "../home/components/Divider";
import LatestNewsContainer from "./components/LatestNewsContainer";

const News = () => {
  return (
    <>
      <Divider text="News" />
      <div className="container px-3 mx-auto mt-10 sm:px-5 md:px-7 lg:px-32">
        <div className="grid md:grid-cols-3 lg:grid-cols-3">
          <div className="border-t-2 border-black md:col-span-2 lg:col-span-2">
            <div className="h-screen border-r-2 border-black">
              <div className="flex justify-start gap-10 pl-2 border-b-2 border-black">
                {Array(3)
                  .fill(3)
                  .map((_, i) => (
                    <p key={i}>hi</p>
                  ))}
              </div>
              <div className="p-2"></div>
            </div>
          </div>
          <div className="hidden col-span-1 px-4 pt-4 border-t-2 border-black sm:block md:block lg:block">
            <div className="grid gap-4 grid-cols">
              <div className="p-4 shadow-lg rounded-2xl">
                <p className="mb-3 text-lg font-bold">Latest News</p>
                <LatestNewsContainer />
              </div>
              <div className="p-4 shadow-lg rounded-2xl h-52">
                aksdbjnjkasdasssaj
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
