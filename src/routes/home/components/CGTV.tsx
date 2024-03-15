import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { PreventContextMenu } from "../../../App";

interface Video {
  title: string;
  src: string;
  imageURI: string;
  thumbnail: string;
}

const Cgtv = () => {
  const preventMenu = useContext(PreventContextMenu);
  const videos: Video[] = [
    {
      title:
        "GAME: Tanauan City vs Zambales (Senior League Baseball) CHAMPIONSHIP GAME",
      src: "https://www.youtube.com/embed/Whv42_oz4bQ",
      imageURI: "",
      thumbnail: "",
    },
    {
      title:
        "Watch Live | Protect Our Nation's Youth | Philippines Vs. China (SEMIFINAL)",
      src: "https://www.youtube.com/embed/NOqAoiiyn2s",
      imageURI: "",
      thumbnail: "",
    },
    {
      title: "GAME: Tanauan City vs Negros (Senior League Softball)",
      src: "https://www.youtube.com/embed/BjICDZ1qkbA",
      imageURI: "",
      thumbnail: "",
    },
    {
      title:
        "Watch Live | Protect Our Nation's Youth | Philippines Vs. Japan (Championship Game)",
      src: "https://www.youtube.com/embed/FQlLdRThpug",
      imageURI: "",
      thumbnail: "",
    },
    {
      title: "GAME: Tanauan City vs Northen Samar (Junior League Baseball)",
      src: "https://www.youtube.com/embed/YFL-qbitRN8",
      imageURI: "",
      thumbnail: "",
    },
    {
      title: "GAME: Tanauan City vs Davao City (Major League Softball)",
      src: "https://www.youtube.com/embed/yukQzNh0MnQ",
      imageURI: "",
      thumbnail: "",
    },
    {
      title: "🔴 Watch Live | Protect Our Nation's Youth (JAPAN Vs. CHINA )",
      src: "https://www.youtube.com/embed/ntrAtyccNyw",
      imageURI: "",
      thumbnail: "",
    },
    {
      title: "GAME: Tanauan City vs Zambales (Junior League Baseball)",
      src: "https://www.youtube.com/embed/1HnXZl73u3M",
      imageURI: "",
      thumbnail: "",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const selectVideo = (index: number) => {
    setSelectedVideoIndex(index);
  };

  const cgtvRef = useRef(videos);

  return (
    <div className="pt-20">
      <div className="hidden sm:hidden md:block lg:block sm:px-14 md:px-24 lg:px-40">
        <div className="my-24 sm:my-24 md:my-14 lg:my-20 sm:mx-2 md:mx-3">
          <div className="container flex flex-col justify-center mx-auto rounded-lg shadow-xl md:flex-row md:items-stretch h-96">
            <div className="relative md:w-2/3">
              <iframe
                className="inset-0 w-full h-full rounded-s-lg"
                src={cgtvRef.current[selectedVideoIndex].src}
                title={cgtvRef.current[selectedVideoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>

            <div className="relative mx-4 mt-4 md:w-1/3 md:mt-auto rounded-e-lg">
              <div className="mb-2 space-y-2">
                <Swiper
                  spaceBetween={1}
                  slidesPerView={5}
                  direction="vertical"
                  modules={[Pagination]}
                  className="mySwiper sm:h-44 md:h-80"
                >
                  {cgtvRef.current.map((video, index) => (
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className={`cursor-pointer rounded-lg shadow-md border hover:bg-gray-200  flex ${
                          selectedVideoIndex === index ? "bg-gray-300" : ""
                        }`}
                        onClick={() => selectVideo(index)}
                      >
                        <div>
                          <img
                            onContextMenu={preventMenu}
                            className="bg-cover h-14 w-96 max-w-32 rounded-s-md"
                            src={
                              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABa1BMVEX////+AAAASq3f6e8AQKoAN6T///2Fn8gASa7wAAD8AAD9+PgARaz11dT5AAAASqyUqs8ARKxMcrYAO6oAP6s6YqztAABegb6WsdQAN6dHOons8/fl7vQASKUAMqHC0ePZ5PAAP6PL2eY9Z63rGBnoSUkAL6X13dz2/f0AOqKmutWbss9TersAS6TwxMPwVFXwg4J5lcWzxd3qNjjoLCzrlZbuqKbwvLvpa2vqiYnse3rrWFn02NjoYGDmJSPtsbLYUVHYR0PbNzfnbm8AJaFmhbkAIJ/pkpUkWqpxjcDwv7zmLzEcU6cAJZgAKZb78evGhpOpIUxzMHK4HUO2xsxliZxHdo+Lrbl7naowPpPM2t5qkqCEpbAtaIOt0t1nqsgATnEmkrjtvqjGrKLTn4fc0MUANI8AMFjsVgD35NbvkGMIUJba3tPllmscXJEASXDvg1Lxxa32tZXuby5OhZqFvNJea6WEKmK2i59sUrl1AAAM1UlEQVR4nO2biX/aRhbHB5CEELIASwZTgbh8CAxODHHio7Z3GzslNan3wNjrI+ttd9s03e2R9R5//s4picOxA3hT9/O+n5iPNDMS89Obee/NiCAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3BuKMurw18Xq1mJr8fHMx+7GPaGg1QUjRDCezNDzXx3rsZAg9vRjd+Y+eGqENI0r1GLPPnZ3ps+yb0FCOj6izUP2PwraCGl9Ejc/dpemTbzfhKHQwlCT1a3t7c1PH6wLmjEGFBrLwWoFLR/SFrGd+AOVuKcNKuyPistpOoo1TXsyaoY+AG5TuOvXbHykLk7ILaN0T/OfQGz5ppv8ornF02wEq9Y/Uh8nQkE7Awr7o8WTYNXWR+rkhAxE/Fi/P9n9FShE630zUeu34cMfpYTNPonGXrBuL2jeh+lpvNWTFuIJeGzGD+1xbx7igPict1fInyJyHHwkmiuiSuSxCuqrVIJLbeS14zUK4vUDH9MR+YysgFs8MgSS70XN8KJFK84l2UVCRHQPH4vbuMWirSD8Ia6PFIsuP8R1rpIrFhX/LjnxjHAxLUDKb1qtp8pvW63V+Get1tRW5OJJxRe4uRZF8XPNW1gZG57u6L6cze4f8LPifvbLHL9H+YVTQe6LFzl+A9uR98u8XfnFqwiq788K6xwsLWX84/0CSu7XETpKh2Kr2PnFlldjofTytBNF7lY1bYt98ecGPYttPdr+PDAH12Ybanu2yb/8QFJloaJgqdVIJJundsPGSloJq8nrmmbDRRUryjudq6pqWwiY1fU6WstGWR9iyzNY3dEzI7Qw9URxz2AKDbrUx19BDMhO/KeJe942a6LEdubWsjVeW7NUKVrMztFTPK8apXnabcKK2UYob4qmyey8WhU2bOuqY2eyTeoUYlr6CHdkV8FOvjUdiYH5z92qhr0NmmEWNTaH25XMgjhMZpPJrDBM0pzTO81shtc1l14WvJOoiY8cdiFu3XDsvMPmq+LmE21rvp4t06o9Q1tw17XQE/RYC21PRSE6+mJ9Y3uRwhyLFoq1WjE2A7XW4eHh4vbW02VPoOvIEe4kUMOMrGT5hEJrTqGjdixhtkq2UDA7/CRjRsm8jLDrmtm628ny0W1LnYLcaFDBCtomD/WzkLEe3w3F+kLXuKzuxAazb+5x+k+Nw6dcY0QuufywKatyVZ8TKpzyvKVaNSY+4qjVqi5z9XPmPCrLVe5aKylJVqUav58zhxo6HrTkqueascNUHmrGNHKM+I4xuH66EWNhlV5TMPNCYd2q1GdTKu93w4nYsi7zIbxmzdXrejbCJFas/EHDZGNWKTr5et0zdsGpo6ilNsjxpoFd+XNN20DbmjGNNHE5rQ3a6kY0Nimxi3TaLEyj4qtXLvlgg9Z99aWLMvKrIg3ddnWpiIuWCiy6RzqyI2dcFtYPll6Sjzq9DY4TL1HuVbWCG2Lv8kTB3mARbRCVkwd9HALvbEFmRuJ3XFuEcWTjuaPkctyk9Mzm8V7hdXGRy+SKgcvcwG3oAS1S9vb2juL4I36EP6YRDHc+UCCW+Lv5ZJBoLUKdrF2IRpODRJNlqs8tr5DK+YHqwXNShCEfSfaRjJYnkzm0wL8VLZT+xpI4llOK5rybuSuNJVzmVZpLmYL/VYX6kknrzAEsy7tkGKvhjuj2nRle/d5BoRb6vRpmqHLUDQRJPNuisqgLh83Zoj+LyDgtd1Lkos7cAI3wzVQLo7t+V4VHYvGrhYzYLfjWTucT9NtTjWLfZjhZHRSqTGJCdZJslRH4PrcuhVVzqM8Z/UaB0sFg4w9E7LNpGs7laW9G/8N/8Zltb8b+gQlsu0OODkt0aKVebY7ygnUpIecGCzvqTQJVHHYnm4aPRZ8f3eU+W6L1H7GNwnrb9taI/lyhyTbum9wcfNdBn5Tb0auDpXY1cZNCeeRjujsKWuRdjh3dpX08za24S7pUjXALd4+Pe8fnXXFTpaMnwlJUfIVbO5itRwtiRpadChLPhXe+IN8kMDU7iTxKmits3eFRKf6eTSwfTpgr7Jqz3vnJyen5xXnvjDermQm9IyxYq5q6rqecilgTV6L8QXg3ns/iFmJY6gRVjNHIxPFeKHwUvNPN2wdiUGt/Cusd1uisd3He7Z6cXpxeXHIzuqrK0zYFL/lU7pU6LkuCmvkKdp8VmiGU2/jw4CCD0UkzNdwmx5kKk4jzWHLFWh0zO55PVUYqxEuNmdGPzpu2n5Dkmngm+/Lk9PWfIydXV+enFz22bEAZSSTiUSEwHLbWuP5SKpWS2PCrZVMpnpqWsKiEzlfSFWpSMhAQyVlTum61xxLob3c/CspGezEj/VQZ9BT9ChMsTTu/Pu6+/svrs+Orq+vzi2PXxrhJhy8Zyg6OGrjnhHCqMkvBTiosMbkvcXxU56ihZkmoTB3Q4btiMjdDV4vYN+FG1cgUFSKF7NYYT1aHh6qvEPeFVNrX1yenka++iqPI13/92/XxN47sOHLJ4gGhTiO8qmOrpfQUyXYsyaIGZY+A2EqV6AyNkqZsfWhXseETKn8KUYscR9F4jFZISjVNM7aHdkd9hRbbi+gen598q7x58x1Cb9+8Ozn/Hk8lLIkNL5RjYYDNLY8GbiLTDTeXDM2wTJYeqIntxrdwDiQ6J9n6rIiTpITaGTcs3qyQuczHA0EkoJBN/O75RRf9/e1brPAfb78+PfmBuEE1lWEBoRm0l0dbTahsp6pIw4SUJK3LskpGvuIFj2yBbQiRKemU0ZjcoNDLz7R0/29PfIV8L6L748W7n96ddH/+6a3Suzy9+iHBnQp95EnLm04eio0Np1foMXsCep0c46HJ40+HuplUnXqyFVOlqdu4QeMWGxKNraPA3X2FJld4fU1G59nPb/6Zu7o8Pf5eJeMutcauSUqkr1U7eHNsLCzqJT1ck1Q2HMlJm8ZQkhIR36SWbKKQPI6wmrDHTt1uVxgKLQZqhhTaV5dfv/vOfX307ufe1WnvMm9aZIVEfQQ2ALGROof6wIWJgKMJ00mJTzJLZOArOZbWUnsqKJOiqdv4Yf9WhThLS4+2YYEVH1+f/uvs+CxycnnVOz/vNQk1q84q6TxLZWgIscXCH/vXRLZIn0A1nPAnarJCNVH3S4YxiVbNLG5BUrexJd5hlPbtBQU8zQpzJnhsnpx92+3+eNXDJmR5W81qiN01kqmopVJJKkkvirSIjjvHJWIiPB9lY7ZZJpO3mSVXJBza2M2TAbs0tBaZqsLY4+Dz8xXqszwh6PZ6vW63e356fN3rUtU4RMtMDSo6ZKLpKg6JDt/bT+JQwDbzlabJ08884ss0xc2TcJMwWfhbw/NYtVYmyU09LdvDpTgihozF/pDoLZ8+UcWOMDq7vL6+xDJ7l13WFTzRvABdKFkkqKtWnieqNASmXlJJUYkndGznm5h1jXnXDtmSoj6JPI1JCChUhko1Lf1sYAYEFKaYOyTLoxOs7rJ3wudZDi/yiSdklXa0IzvVyorLz9eIp8RmIcyKBYX37iZC3EwiGApVeexQ+H6FZB0Y2xxKTQMKw0tlX763K4iXuDREk5iv8BemdHnMb0SmmcojpJIXS3vvdRRzrjT84bCBQ6FI3aasEH2GS4ydEW+0fYV4KDXs4QbInZXCJKnMjpg9eNyxTRzZJnURb+Gr80VxzSSRMFyl6VqO7Gmp3tb6NBUq6NN0urU6qr3vabAlUu1hiW5FzC25Nnx5ocpWRSxCFkyhEKdrpIC6WRxKatTidAw7E+5i+Cvg7YEb3fDS7jHbPta0T8hKXCqV+y5TqGPhpJZe9m104vm65uh0CZ+qFHDULBx4bXVzpYDJWKSeLx2bMktwJ8VX2MdNz03Y0Pg3W+pVksEtKDvKV4C8MtPnJMp1v7ZCCbb1CyrESSs2maRqaZJQyBA7UU8GykdK9PePh3+BOvqa8UYYcTMHUtjfChofBa0Lo3x6l9ZHwuT3/BtFhWwOePN1MpbFQmn3DtuJyiP+swzjiyl89ftwyR6xKjKjSSAbpvxNdnp95hae7oo974XI/ZKL4tQm4UXJyVjlRiTvPm/Bf+n9H1O+X8g2Bk7dpiGQvD/84BeIuzQZUVlGohJEXPOP2LGqihb9hNlH3zXeffgdncK4nmqAeFr7QIXpb6SUJNG/AVI3HAcLh8tHtpS8X3dMikJ+qP5BVoz9N/p/YVROOCbLC6G7/xgjlH54/71NIT83uas+smBU+I8l75npqlxdjN1uRU0zDh/w//paXt/eff9L7oXFzYc3QPtR4u9lysMGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgF83/AAsuZ+lA0gD3AAAAAElFTkSuQmCC"
                            }
                            alt={video.title}
                          />
                        </div>
                        <p className="px-5 my-auto text-xs font-semibold truncate sm:text-sm md:text-md">
                          {video.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="absolute z-10 sm:bottom-0 sm:right-0 sm:transform sm:translate-x-14 sm:-translate-y-5 md:top-0 md:right-0 md:transform md:translate-x-20 md:-translate-y-32">
                <img
                  alt="cgtv"
                  onContextMenu={preventMenu}
                  className="sm:h-20 sm:w-44 md:h-28 md:w-64"
                  src="https://tanauancity.gov.ph/wp-content/uploads/2023/01/FULL-1-e1673327794248-600x229.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block mx-3 sm:block md:hidden lg:hidden">
        <div className="my-10">
          <h1 className="mb-6 font-bold text-center text-md text-slate-900 sm:text-lg md:text-xl lg:text-3xl">
            Videos
          </h1>
        </div>
        <div className="container mx-auto border rounded-md">
          <div className="relative w-full mb-4">
            <iframe
              className="w-full h-52 rounded-t-md"
              src={cgtvRef.current[selectedVideoIndex].src}
              title={cgtvRef.current[selectedVideoIndex].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div className="w-full pb-5">
            <Swiper
              slidesPerView={2}
              direction="vertical"
              modules={[Pagination]}
              className="h-32 px-3 mySwipe"
            >
              {cgtvRef.current.map((video, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg border flex ${
                      selectedVideoIndex === index ? "bg-gray-300" : ""
                    }`}
                    onClick={() => selectVideo(index)}
                  >
                    <div>
                      <img
                        className="w-32 bg-cover h-11 max-w-24 rounded-s-md"
                        src={
                          "data:image/png;base64,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"
                        }
                        alt={video.title}
                      />
                    </div>
                    <p className="px-5 my-auto text-xs font-semibold truncate sm:text-sm md:text-md">
                      {video.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="mt-6 text-center">
          <img
            onContextMenu={preventMenu}
            alt="cgtv"
            className="relative mx-auto bottom-14 w-44"
            src="https://tanauancity.gov.ph/wp-content/uploads/2023/01/FULL-1-e1673327794248-600x229.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Cgtv;
