interface SeniorIdRequirementsProps {
  title: string;
  items: string[];
}

interface CentenarianRequirementsProps {
  title: string;
  items: string[];
}

const CentenarianRequirements = ({
  title,
  items,
}: CentenarianRequirementsProps) => (
  <div className="w-full">
    <div className="p-4 rounded-md h-50">
      <h2 className="mb-4 text-xl font-semibold text-center">{title}</h2>
      <ul className="pl-4 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const SeniorIdRequirements = ({ title, items }: SeniorIdRequirementsProps) => (
  <div className="w-full">
    <div className="p-4 border rounded-md h-80 bg-slate-200">
      <h2 className="mb-4 text-xl font-semibold text-center">{title}</h2>
      <ul className="pl-4 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const SeniorCitizenIdAndBenefits = () => {
  const commonRequirements = [
    "REGISTRATION FORM SIGNED BY THE SENIOR CITIZENS PRESIDENT",
    "BIRTH CERTIFICATE (PHOTO COPY)",
    "VOTERS ID/ CERTIFICATE OR ANY VALID ID (PHOTO COPY)",
    "BRGY. RESIDENCY (ORIGINAL)",
    "2PCS 1X1 PICTURE",
  ];

  const seniorIdTypes = [
    { title: "FOR NEW SENIOR I.D", items: commonRequirements },
    {
      title: "FOR LOST SENIOR I.D",
      items: [...commonRequirements, "AFFIDAVIT OF LOST (ORIGINAL)"],
    },
    {
      title: "FOR SENIOR CITIZEN TRANSFEREES",
      items: [
        ...commonRequirements,
        "CERTIFICATION OF CANCELLATION (ORIGINAL)",
      ],
    },
  ];

  const centenarianRequirements = [
    "SENIOR CITIZEN ID (PHOTO COPY)",
    "BIRTH CERTIFICATE (PHOTO COPY)",
    "WHOLE BODY PICTURE 3R SIZE (LATEST PICTURE)",
    "BARANGAY CLEARANCE (ORIGINAL)",
    "CERTIFICATE OF INDIGENCE",
    "VALID ID OF RECIPIENT (PHOTO COPY) & CONTACT NO. SOCIAL CASE STUDY REPORT OF CSWD ",
  ];

  return (
    <div className="max-w-6xl px-6 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        ISSUANCE OF IDENTIFICATION CARD OF SENIOR CITIZENS
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <div className="grid grid-cols-1 gap-8 py-4 mx-auto text-justify sm:grid-cols-2 lg:grid-cols-3">
        {seniorIdTypes.map((type, index) => (
          <SeniorIdRequirements
            key={index}
            title={type.title}
            items={type.items}
          />
        ))}
      </div>
      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>
          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              SUBMIT DULY ACCOMPLISHED APPLICATION FORM AND OTHER DOCUMENTS
              NEEDED FOR INITIAL EVALUATION AND WAIT FOR TEXT MESSAGE/CALL WHEN
              TO PICK-UP SENIOR ID
            </li>
            <br />
            <li>
              PROCEED TO OSCA OFFICE TO RECEIVE THE SENIOR CITIZEN ID AND SIGN
              ON THE LOGBOOK
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>13 MINUTES</p>
          </div>
        </div>
      </div>

      <h1 className="mt-8 mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        ISSUANCE OF PURCHASE BOOKLET
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <h2 className="pl-4 mb-4 text-center ">
        1. ANY OF PHOTOCOPY OR ORIGINAL SENIOR CITIZEN I.D
      </h2>

      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>

          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              PRESENT SENIOR ID TO OSCA STAFF AND SIGN ON THE CLIENT LOGBOOK
              <br />
              <i>WAIT FOR TEXT MESSAGE/CALL WHEN TO PICK-UP SENIOR I.D</i>
            </li>
            <br />
            <li>
              PROCEED TO OSCA OFFICE TO CLAIM THE SENIOR PURCHASE BOOKLET.
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>10 MINUTES</p>
          </div>
        </div>
      </div>

      <h1 className="mt-8 mb-4 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        PROCESSING OF CENTENARIAN AWARD
      </h1>

      <CentenarianRequirements
        title="CENTENARIAN AWARD REQUIREMENTS"
        items={centenarianRequirements}
      />
      <h2 className="pl-4">IF THE CLAIMANT SON OR DAUGHTER:</h2>
      <br />
      <ol className="pl-10 mb-4 text-justify list-decimal">
        <li>BIRTH CERTIFICATE</li>

        <li>BARANGAY CERTIFICATE OF LIVING IN ONE ROOF/HOUSE</li>
      </ol>

      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>

          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              SUBMIT REQUIRED DOCUMENTS NEEDED FOR INITIAL EVALUATION/ASSESSMENT
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>27 MINUTES</p>
          </div>
        </div>
      </div>

      <h1 className="mt-8 mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        MORTUARY ASSISTANCE
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <ul className="pl-6 mb-6 list-disc">
        <li>SURRENDER SENIOR CITIZEN ID WITH PHOTO COPY</li>
        <li>CERTIFICATION FROM BARANGAY</li>
        <li>CERTIFICATION FORM BRGY. SENIOR PRESIDENT</li>
      </ul>
      <h2 className="ml-2">
        IF CLAIMANT IS THE SON/DAUGHTER:
        <ul className="pl-6 list-disc">
          <li>BIRTH CERTIFICATE (PHOTO COPY)</li>
          <li>KASUNDUAN NG MAG KAKAPATID</li>
        </ul>
      </h2>
      <br />
      <h2 className="ml-2">
        IF CLAIMANT IS THE WIFE/HUSBAND:
        <ul className="pl-6 mb-6 list-disc">
          <li>MARRIAGE CONTRACT</li>
          <li>VALID ID CLAIMANT (PHOTO COPY) W/CONTACT NUMBER</li>
          <li>DEATH CERTIFICATE (PHOTO COPY)</li>
        </ul>
      </h2>

      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>
          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              SUBMIT REQUIRED DOCUMENTS NEEDED FOR INITIAL EVALUATION/ASSESSMENT
            </li>
            <br />
            <li>
              SUBMIT REQUIRED DOCUMENTS NEEDED FOR INITIAL EVALUATION
              <br />
              <i>
                WAIT FOR TEXT MESSAGE/CALL WHEN TO CLAIM THE MORTUARY ASSISTANCE
              </i>
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>24 MINUTES</p>
          </div>
        </div>
      </div>

      <h1 className="mt-8 mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        PROCESSING OF SENIOR CITIZEN BIRTHDAY GIFT/ CHRISTMAS GIFT
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <h2 className="pl-4 mb-4 text-center ">
        1. MASTER LIST OF SENIOR CITIZEN IN RESPECTIVE BARANGAY
      </h2>

      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>

          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              SUBMIT THE MASTER LIST OF SENIOR CITIZEN IN RESPECTIVE BARANGAY
              <br />
              <i>
                WAIT FOR TEXT MESSAGE/CALL THE SCHEDULE OF RELEASE OF BIRTHDAY
                GIFT
              </i>
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>1 DAY AND 2 MINUTES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorCitizenIdAndBenefits;
