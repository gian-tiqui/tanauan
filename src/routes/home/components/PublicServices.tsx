import { useEffect, useState } from "react";

interface Services {
  title: string;
  description: string;
  imageURI: string;
}

const PublicServices = () => {
  const [services, setServices] = useState<Services[] | undefined>(undefined);

  useEffect(() => {
    const setDaServices = () => {
      const svs: Services[] = [
        {
          title: "BUSINESS PERMIT AND LICENSING OFFICE",
          description: "Online Registration for New and Renewal of Business",
          imageURI:
            "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
        },
        {
          title: "BUSINESS PERMIT AND LICENSING OFFICE",
          description: "Online Registration for New and Renewal of Business",
          imageURI:
            "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
        },
        {
          title: "BUSINESS PERMIT AND LICENSING OFFICE",
          description: "Online Registration for New and Renewal of Business",
          imageURI:
            "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
        },
        {
          title: "BUSINESS PERMIT AND LICENSING OFFICE",
          description: "Online Registration for New and Renewal of Business",
          imageURI:
            "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
        },
        {
          title: "BUSINESS PERMIT AND LICENSING OFFICE",
          description: "Online Registration for New and Renewal of Business",
          imageURI:
            "https://eservices.tanauancity.gov.ph/assets/images/tanauan_core/business_permit.png",
        },
      ];

      setServices(svs);
    };

    setDaServices();
  }, []);

  return (
    <div className="mt-10" style={{ backgroundColor: "#031525" }}>
      <div className="container mx-auto px-3 pt-10">
        <p className="text-2xl font-bold text-white text-center mb-14">
          The City's Modern Public Services
        </p>
        <div className="flex justify-center gap-20 text-white">
          {services?.map((service, index) => (
            <div key={index}>
              <img
                src={service.imageURI}
                alt={service.title}
                style={{ width: "130px", height: "130px" }}
              />
              <p
                className="text-sm"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "130px",
                  textAlign: "center",
                }}
              >
                {service.title}
              </p>
              <p
                className="text-xs"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: "130px",
                  textAlign: "center",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 px-64 text-center text-lg text-white">
          The Official eService Portal of Tanauan City, created to provide
          citizens of Tanauan City a convenient one-stop solution platform for
          online services and information.
        </p>
        <div className="container flex justify-center mx-auto">
          <div className="mt-10 mx-auto px-3 flex flex-col">
            <button
              className="rounded-md my-2 py-1 font-bold text-white w-40"
              style={{ backgroundColor: "#7CACF8" }}
            >
              SIGN UP
            </button>
            <button
              className="rounded-md my-2 py-1 font-bold mb-7 w-40"
              style={{
                borderColor: "#7CACF8",
                borderWidth: 1,
                color: "#7CACF8",
              }}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;
