import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home/Home";
import {
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import NewsArticle from "./routes/news-article/NewsArticle";
import News from "./routes/news/News";
import Barangays from "./routes/barangays/Barangays";
import CityOfficials from "./routes/government/city-officials/CityOfficials";
import MissionVision from "./routes/government/mission-vision/MissionVision";
import Departments from "./routes/government/departments/Departments";
import CSDWServices from "./routes/city-transactions/csdw-services/CSDWServices";
import SeniorCitizenIdAndBenefits from "./routes/city-transactions/senior-citizen-id-and-benefits/SeniorCitizenIdAndBenefits";
import PwdIdAndServices from "./routes/city-transactions/pwd-id-and-services/PwdIdAndServices";
import TanauanEServices from "./routes/business/tanauan-e-services/TanauanEServices";
import Assesors from "./routes/transparency-reports/assesors/Assesors";
import JobFair from "./routes/careers/job-fair/JobFair";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./routes/home/components/Footer";
import ContextContainer from "./context-container/ContextContainer";
import footerBg from "./assets/footer-bg.png";
import SignIn from "./routes/auth/sign-in/SignIn";
import SignUp from "./routes/auth/sign-up/SignUp";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Destinations from "./routes/tourism/destinations/Destinations";
import History from "./routes/tourism/history/History";
import EmergencyApp from "./routes/emergency-app/EmergencyApp";
import Documents from "./routes/transparency-reports/documents/Documents";
import NotFound from "./routes/not-found/NotFound";
import { BiExit, BiMessageAlt, BiSend } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FieldValues, useForm } from "react-hook-form";
import DestinationIndiv from "./routes/single-destination/DestinationIndiv";

interface RouteMapping {
  path: string;
  element: ReactNode;
}

export const SetShowFooterContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

export const SetShowHeaderContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

export const PreventContextMenu = createContext<
  MouseEventHandler<HTMLImageElement> | undefined
>(undefined);

export const ExitNewsContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => {}
);

const routeMaps: RouteMapping[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/barangays",
    element: <Barangays />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/news/:id",
    element: <NewsArticle />,
  },
  {
    path: "/city-officials",
    element: <CityOfficials />,
  },
  {
    path: "/mission-vision",
    element: <MissionVision />,
  },
  {
    path: "/departments",
    element: <Departments />,
  },
  {
    path: "/csdw-services",
    element: <CSDWServices />,
  },
  {
    path: "/senior-citizen-id-and-benefits",
    element: <SeniorCitizenIdAndBenefits />,
  },
  {
    path: "/pwd-id-and-services",
    element: <PwdIdAndServices />,
  },
  {
    path: "/tanauan-e-services",
    element: <TanauanEServices />,
  },
  {
    path: "/assesors",
    element: <Assesors />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
  {
    path: "/job-fair",
    element: <JobFair />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/emergency-application",
    element: <EmergencyApp />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/destinations/:id",
    element: <DestinationIndiv />,
  },
];

const MessageContainer = ({ message }: { message: string }) => {
  return (
    <p className="p-2 text-sm text-justify bg-gray-100 rounded-md max-w-52">
      {message}
    </p>
  );
};

const UserMessageContainer = ({ message }: UserChatInterface) => {
  return (
    <p className="self-end p-2 mt-2 mr-5 text-sm bg-gray-100 rounded-md">
      {message}
    </p>
  );
};

interface UserChatInterface {
  message: string;
  timestamp: Date;
}

const App = () => {
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showExit, setShowExit] = useState<boolean>(false);
  const [chatExtended, setChatExtended] = useState<boolean>(false);
  const [userChats, setUserChats] = useState<UserChatInterface[]>([]);
  const { handleSubmit, register, reset } = useForm();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const appendChat = (data: FieldValues) => {
    const newChat: UserChatInterface = {
      message: data.message,
      timestamp: new Date(),
    };
    setUserChats((prevChats) => [...prevChats, newChat]);
    reset();
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [userChats]);

  useEffect(() => {
    Aos.init();
  }, []);

  const preventContextMenu: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <ContextContainer>
        <SetShowHeaderContext.Provider value={setShowHeader}>
          <SetShowFooterContext.Provider value={setShowFooter}>
            <ExitNewsContext.Provider value={setShowExit}>
              <PreventContextMenu.Provider value={preventContextMenu}>
                <Router>
                  <ScrollToTop />
                  {showHeader && <Navbar />}
                  <div className="relative">
                    <Routes>
                      {routeMaps.map((routeMap, index) => (
                        <Route
                          key={index}
                          path={routeMap.path}
                          element={routeMap.element}
                        />
                      ))}
                    </Routes>

                    {showExit && (
                      <Link
                        to="/"
                        className="fixed z-10 flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-2xl cursor-pointer md:hidden top-2 right-5"
                      >
                        <BiExit className="w-full h-full m-2 rotate-180" />
                      </Link>
                    )}

                    <div className="fixed bottom-0 z-10 bg-white shadow-xl cursor-pointer w-72 rounded-t-xl right-5">
                      <div>
                        <div
                          className={`flex items-center justify-between p-1 border-t border-s border-e rounded-t-xl ${
                            chatExtended
                              ? "border-b bg-gray-100 hover:bg-white"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setChatExtended((prevVal) => !prevVal)}
                        >
                          <div className="flex items-center">
                            <BiMessageAlt className="ml-3" />
                            <p className="ml-2">Support</p>
                          </div>
                          {chatExtended && (
                            <CgClose className="mr-2 hover:text-gray-600" />
                          )}
                        </div>
                        <div
                          className={`flex flex-col justify-between ${
                            chatExtended ? "h-52" : "hidden"
                          } p-2`}
                        >
                          <div
                            ref={chatContainerRef}
                            className="pb-3 overflow-auto"
                          >
                            <MessageContainer
                              message="Welcome to City Government of Tanauan's Website! How
                          can we help you?"
                            />
                            <div className="flex flex-col justify-center mt-5">
                              <ul className="p-0 mx-10 mb-5 list-none border rounded-lg">
                                <li className="flex items-center px-2 py-1 border-b rounded-t-lg hover:bg-gray-200">
                                  <Link to={"/tanauan-e-services"}>
                                    Services
                                  </Link>
                                </li>
                                <li className="flex items-center px-2 py-1 border-b hover:bg-gray-200">
                                  <Link to={"/news"}>News</Link>
                                </li>
                                <li className="flex items-center px-2 py-1 border-b hover:bg-gray-200">
                                  <Link to={"/destinations"}>Places</Link>
                                </li>
                                <li className="flex items-center px-2 py-1 rounded-b-lg hover:bg-gray-200">
                                  <Link to={"/documents"}>Documents</Link>
                                </li>
                              </ul>
                              {userChats.map((chat, key) => (
                                <UserMessageContainer key={key} {...chat} />
                              ))}
                            </div>
                          </div>
                          <form onSubmit={handleSubmit(appendChat)}>
                            <div className="flex items-center justify-between">
                              <input
                                autoComplete="off"
                                {...register("message")}
                                className="w-full px-2 mr-2 bg-gray-100 rounded-lg focus:outline-none"
                                placeholder="Enter your chat here"
                              />
                              <button type="submit">
                                <BiSend className="w-auto h-5 mr-2" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showFooter && <Footer />}
                </Router>
              </PreventContextMenu.Provider>
            </ExitNewsContext.Provider>
          </SetShowFooterContext.Provider>
        </SetShowHeaderContext.Provider>
      </ContextContainer>
    </div>
  );
};

export default App;
