import fPic from "../../assets/application-pic-1.jpg";
import sPic from "../../assets/application-pic-2.jpg";
import tPic from "../../assets/application-pic-3.jpg";
import foPic from "../../assets/application-pic-4.jpg";

interface FeatureInterface {
  name: string;
  description: string;
}

const features: FeatureInterface[] = [
  {
    name: "Fire",
    description:
      "By long pressing the fire icon, it will alert the government in case of fire incidents occur",
  },
  {
    name: "Emergency Hotlines",
    description:
      "By pressing the C with Sun, the user will be able to contact numbers of Tanauan",
  },
  {
    name: "Medical",
    description:
      "By long pressing the Medical Button, it will alert hospitals to send ambulances and medical assistance",
  },
  {
    name: "Police",
    description:
      "By long pressing the shield like button, in case of criminal incidents happen.",
  },
  {
    name: "Capture",
    description:
      "Press the camera button to take pictures of different incidents.",
  },
];

const EmergencyApp = () => {
  return (
    <div className="bg-white">
      <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            The Tanauan 911 is called the "SOPHISTICATED MOBILE APPLICATION"
            which was developed for the safety and security of the people of
            Tanauan. In just one click, it will immediately alert the users
            regarding different emergencies in the city
          </p>

          <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="pt-4 border-t border-gray-200">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={fPic}
            alt="Tanauan Application"
            className="w-auto bg-gray-100 rounded-lg h-52"
          />
          <img
            src={sPic}
            alt="Tanauan Application Features"
            className="w-auto bg-gray-100 rounded-lg h-52"
          />
          <img
            src={tPic}
            alt="What is the Tanauan Application"
            className="w-auto bg-gray-100 rounded-lg h-52"
          />
          <img
            src={foPic}
            alt="Tanauan Application Summary"
            className="w-auto bg-gray-100 rounded-lg h-52"
          />
        </div>
      </div>
    </div>
  );
};

export default EmergencyApp;
