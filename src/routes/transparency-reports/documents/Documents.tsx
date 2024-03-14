import { useContext, useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { SetShowFooterContext, SetShowHeaderContext } from "../../../App";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

interface FileInterface {
  name: string;
  files: string;
}

interface FullDisclosureReportInterface {
  quarter: string;
  files: FileInterface[];
}

const Documents = () => {
  const data: FullDisclosureReportInterface[] = [
    {
      quarter: "FIRST",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "70 % LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "SECOND",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "70 % LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "THIRD",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "FOURTH",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Annual Procurement Plan 2023",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/APP-2023.pdf",
        },
        {
          name: "Annual Budget Report 2023",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Annual-Budget-Report-2023.pdf",
        },
        {
          name: "Bid results 4Q 2022",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Bid-results-4Q-2022.pdf",
        },
        {
          name: "Annual Statement of Indebtedness, Payments and Balances (SIPB)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Debt-Service-2023.pdf",
        },
        {
          name: "Final-Consolidated-2022-GAD-Accomplishment-Report",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Final-Consolidated-2022-GAD-Accomplishment-Report.pdf",
        },
        {
          name: "STATEMENT OF RECEIPTS AND EXPENDITURES CY 2022",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SRE-2022.pdf",
        },
      ],
    },
  ];

  const setShowHeader = useContext(SetShowHeaderContext);
  const setShowFooter = useContext(SetShowFooterContext);

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);

    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  const [selectedQuarter, setSelectedQuarter] =
    useState<FullDisclosureReportInterface>(data[0]);

  return (
    <div className="container">
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Link to={"/"}>
            <img src={logo} alt="Tanauan" className="w-auto h-16" />
          </Link>
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedQuarter(item)}
                className="cursor-pointer"
              >
                {item.quarter} QUARTER
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-screen col-span-3 gap-4 p-4 overflow-auto bg-gray-100 rounded-t-xl">
          {selectedQuarter.files.map((file, index) => (
            <a
              key={index}
              href={file.files}
              className="flex items-center gap-4 p-4 transition-colors bg-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <FaFilePdf className="text-red-500" />
              <div>
                <h2 className="text-lg font-semibold">{file.name}</h2>
                <p className="text-gray-600">PDF Document</p>
              </div>
            </a>
          ))}
        </div>
        <div className="grid col-span-1 gap-4 p-4 overflow-auto">
          <Link to={"/"}>go home pls</Link>
        </div>
      </div>
    </div>
  );
};

export default Documents;
