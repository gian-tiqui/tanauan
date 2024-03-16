interface IdentificationCardProps {
  items: string[];
}

const IdentificationCard = ({ items }: IdentificationCardProps) => (
  <div className="w-full">
    <div className="p-4 rounded-md h-50">
      <ul className="pl-4 list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const commonRequirements = [
  "VOTERS ID / VOTERS CERTIFICATION / (1 PHOTOCOPY)",
  "BIRTH CERTIFICATE (1 PHOTOCOPY)",

  "PICTURES (1X1 SIZE 4 PIECES, WHITE BACKGROUND)",

  "1 WHOLE BODY PICTURE (FOR CLIENTS THAT DISABLITITY IS ALREADY APPARENT)",
  "CERTIFICATION OF  DISABLITIY FROM THE DOCTOR (FOR CLIENTS THAT DISABILITY IS NON-APPARENT)",
];

const PwdIdAndServices = () => {
  return (
    <div className="max-w-6xl px-6 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        ISSUANCE OF TANAUAN CITY PWD IDENTIFICATION CARD
      </h1>
      <h2 className="text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <IdentificationCard items={commonRequirements} />
      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>
          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              GO TO INFORMATION DESK TO PRESENT THE REQUIREMENTS FOR EVALUATION.
            </li>
            <br />
            <li>
              FILL-OUT THE PWD ID APPLICATION FORM AND WAIT FOR TEXT
              MESSAGE/CALL WHEN TO PICK UP THE PWD ID AND SIGN ON THE LOGBOOK.
            </li>
            <br />
            <li>
              PROCEED TO PDAO TO CLAIM THE PWD ID AND SIGN ON THE LOGBOOK
              PICTURES
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>18 MINUTES</p>
          </div>
        </div>
      </div>
      <h1 className="mt-8 mb-8 text-3xl font-semibold text-center text-white bg-blue-800 sm:text-3xl">
        ISSUANCE OF TANAUAN CITY PURCHASE BOOKLET
      </h1>
      <h2 className="mb-4 text-xl font-semibold text-center">
        LIST OF REQUIREMENTS
      </h2>
      <h2 className="pl-4 mb-4 text-justify ">
        1. PICTURE (1X1 SIZE, 1 PIECE, WHITE BACKGROUND) <br />
        2. PWD ID
      </h2>

      <div className="col-span-3">
        <div className="p-4 border rounded-md">
          <h2 className="mb-4 text-xl font-semibold">CLIENT STEPS</h2>

          <ol className="pl-4 mb-4 text-justify list-decimal">
            <li>
              GO TO INFORMATION DESK TO PRESENT THE REQUIREMENTS FOR EVALUATION.
            </li>
            <br />
            <li>
              FILL-OUT THE PWD ID APPLICATION FORM AND WAIT FOR TEXT
              MESSAGE/CALL WHEN TO PICK UP THE PWD ID AND SIGN ON THE LOGBOOK.
            </li>
            <br />
            <li>
              PROCEED TO PDAO OFFICE AFTER RECIEVEING TEXT MESSAGE OR CALL AND
              CLAIM THE PURCHASE BOOKLET AND SIGN ON THE LOGBOOK
            </li>
          </ol>
          <div>
            <h2 className="mb-2 text-xl font-semibold">FEES TO BE PAID</h2>
            <p>NONE</p>
          </div>
          <div>
            <h2 className="mt-4 mb-2 text-xl font-semibold">PROCESSING TIME</h2>
            <p>8 MINUTES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PwdIdAndServices;
