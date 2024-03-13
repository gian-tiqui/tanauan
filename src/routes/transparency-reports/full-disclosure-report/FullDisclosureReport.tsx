import { useState } from "react";

interface FileInterface {
  name: string;
  files: string;
}

interface FullDisclosureReportInterface {
  quarter: string;
  files: FileInterface[];
}

const FullDisclosureReport = () => {
  const data: FullDisclosureReportInterface[] = [
    {
      quarter: "FIRST",
      files: [
        {
          name: "• 20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "• 70 % LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "• Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "• Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "• Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "• SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "• Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "• Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "SECOND",
      files: [
        {
          name: "• 20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "• 70 % LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "• Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "• Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "• Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "• SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "• Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "• Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "THIRD",
      files: [
        {
          name: "• 20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "• LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "• Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "• Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "• Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "• SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "• Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "• Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
    {
      quarter: "FOURTH",
      files: [
        {
          name: "• 20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/20-Component-of-the-IRA-Utilization-IRAU-4.pdf",
        },
        {
          name: "• LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/70-LDRRM-Utilization-Fund-LDRRMFU-4.pdf",
        },
        {
          name: "• Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Bid-Results-on-Civil-Works-Goods-Services-Consulting-Services-2.pdf",
        },
        {
          name: "• Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Human-Resource-Complement-ManCom-4.pdf",
        },
        {
          name: "• Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Quarterly-Statement-of-Cash-Flow-QSCF-4.pdf",
        },
        {
          name: "• SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/SEF-Utilization-Fund-SEF-4.pdf",
        },
        {
          name: "• Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Trust-Fund-Utilization-PDAF-4.pdf",
        },
        {
          name: "• Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "• Annual Procurement Plan 2023",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/APP-2023.pdf",
        },
        {
          name: "• Annual Budget Report 2023",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Annual-Budget-Report-2023.pdf",
        },
        {
          name: "• Bid results 4Q 2022",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Bid-results-4Q-2022.pdf",
        },
        {
          name: "• Annual Statement of Indebtedness, Payments and Balances (SIPB)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Debt-Service-2023.pdf",
        },
        {
          name: "• Final-Consolidated-2022-GAD-Accomplishment-Report",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Final-Consolidated-2022-GAD-Accomplishment-Report.pdf",
        },
        {
          name: "• STATEMENT OF RECEIPTS AND EXPENDITURES CY 2022",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SRE-2022.pdf",
        },
      ],
    },
  ];

  const [selectedQuarter, setSelectedQuarter] = useState("");

  const handleQuarterChange = (quarter: string) => {
    setSelectedQuarter((prevQuarter) =>
      prevQuarter === quarter ? "" : quarter
    );
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="mx-auto overflow-hidden bg-white rounded-lg shadow max-w-[700px]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold">Full Disclosure Report</div>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {data.map((item, index) => (
                  <li key={index} className="flex justify-between py-1">
                    <div
                      className="px-4 pr-0 font-bold text-blue-600 cursor-pointer"
                      onClick={() => handleQuarterChange(item.quarter)}
                    >
                      {item.quarter} QUARTER
                    </div>
                    {selectedQuarter === item.quarter && (
                      <div className="px-4 ml-auto">
                        <div>
                          {item.files.map((file, index) => (
                            <>
                              <a
                                key={index}
                                href={file.files}
                                className=" hover:underline"
                              >
                                {file.name}
                              </a>
                              <br />
                            </>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullDisclosureReport;
