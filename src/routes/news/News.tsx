import { useState } from "react";
import Divider from "../home/components/Divider";

const Fcategory = () => {
  return <div>category 1</div>;
};

const Scategory = () => {
  return <div>category 2</div>;
};

const Tcategory = () => {
  return <div>category 3</div>;
};

const News = () => {
  const categories = ["Category 1", "Category 2", "Category 3"];
  const [showCat1, setShowCat1] = useState<boolean>(false);
  const [showCat2, setShowCat2] = useState<boolean>(false);
  const [showCat3, setShowCat3] = useState<boolean>(false);

  const handleChangeCategory = (category: string) => {
    switch (category) {
      case "Category 1":
        setShowCat1(true);
        setShowCat2(false);
        setShowCat3(false);
        break;
      case "Category 2":
        setShowCat1(false);
        setShowCat2(true);
        setShowCat3(false);
        break;
      case "Category 3":
        setShowCat1(false);
        setShowCat2(false);
        setShowCat3(true);
        break;
    }
  };

  return (
    <>
      <Divider text="News" />
      <div className="container px-3 mx-auto mt-10 sm:px-5 md:px-7 lg:px-32">
        <div className="grid grid-cols-3 border-t-2 border-black">
          <div className="col-span-2">
            <div className="h-screen border-r-2 border-black">
              <div className="flex justify-start gap-10 pl-2 border-b-2 border-black">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleChangeCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="p-2">
                {showCat1 && <Fcategory />}
                {showCat2 && <Scategory />}
                {showCat3 && <Tcategory />}
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
