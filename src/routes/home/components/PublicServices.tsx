import { Container, Divider, Stack } from "@mui/material";
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
    <div className="w-screen mt-10" style={{ backgroundColor: "#031525" }}>
      <Container>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={5}
          sx={{ color: "white" }}
          paddingTop={5}
        >
          <p className="text-2xl font-bold">
            The City's Modern Public Services
          </p>
          <Stack direction="row" spacing={15}>
            {services?.map((service, index) => (
              <Stack
                key={index}
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{ textAlign: "center", maxWidth: "130px" }} // Added styling for text
              >
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
                    textAlign: "center", // Center the text
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
                    textAlign: "center", // Center the text
                  }}
                >
                  {service.description}
                </p>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <p className="mt-16 px-64 text-center text-lg text-white">
          The Official eService Portal of Tanauan City, created to provide
          citizens of Tanauan City a convenient one-stop solution platform for
          online services and information.
        </p>
        <div className="container flex justify-center">
          <Stack marginTop={5}>
            <button
              className="rounded-md my-2 py-1 font-bold text-white w-40"
              style={{ backgroundColor: "#7CACF8" }}
            >
              SIGN UP
            </button>
            <Divider />
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
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default PublicServices;
