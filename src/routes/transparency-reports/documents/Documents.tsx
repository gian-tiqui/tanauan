import { useContext, useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { SetShowFooterContext, SetShowHeaderContext } from "../../../App";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import bg from "../../../assets/red-art-bg.png";
import { BiChevronRight } from "react-icons/bi";

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
      quarter: "FIRST QUARTER",
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
      quarter: "SECOND QUARTER",
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
      quarter: "THIRD QUARTER",
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
      quarter: "FOURTH QUARTER",
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
    {
      quarter: "INVITATION TO BID",
      files: [
        {
          name: "Supply, Delivery, and Installation of Christmas Decorations",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Christmas-Decor-2021.pdf",
        },
        {
          name: "Supply and Delivery of Vehicle for City Cooperative and Livelihood Development Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Coop-Vehicle.pdf",
        },
        {
          name: "Supply and Delivery of Various Deped Forms for end of school year rites of Deped Tanauan City school year 2020-2021",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-DEPED-FORMS.pdf",
        },
        {
          name: "Supply and Delivery of Tablets to be used by Learners/Students of Deped Tanauan City",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-deped-tablets.pdf",
        },
        {
          name: "Supply and Delivery of Tablet to be used by Learners/Students of Deped Tanauan City",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Supply-and-Delivery-of-Tablet.pdf",
        },
        {
          name: "Supply and Delivery of Rice for Covid-19 Positive and PUI’s Patients",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-rice-covid-patients.pdf",
        },
        {
          name: "Supply and Delivery of Passenger Van (Flexi Truck) for CSWD used",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Vehicle-Cswd.pdf",
        },
        {
          name: "Supply and Delivery of Passenger Van (Flexi Truck) for CSWD used.(Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Supply-Delivery-of-Passenger-Van.pdf",
        },
        {
          name: "Supply and Delivery of Motor Vehicle for official use in the Office of the building Official",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Vehicle-OBBO.pdf",
        },
        {
          name: "Supply and Delivery of Motor Vehicle for official use in Tanauan City College",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/TCC-Vehicle.pdf",
        },
        {
          name: "Supply and Delivery of Motor Vehicle",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/OBBO-Vehicle.pdf",
        },
        {
          name: "Supply and Delivery of Mobile Clinic for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Supply-Delivery-of-Mobile-Clinic.pdf",
        },
        {
          name: "Supply and Delivery of Mini Multi-Purpose Vehicle",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-GSO-Service-Vehicle.pdf",
        },
        {
          name: "Supply and Delivery of Medical and Laboratory Supplies for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Medical-Supplies-6.8.21-1.pdf",
        },
        {
          name: "Supply and Delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-medical-supplies-sambat-and-pagaspas.pdf",
        },
        {
          name: "Supply and Delivery of Machine Tools for CDRRMO in response operation particularly vehicular accident",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Machine-Tools-CDRRMO.pdf",
        },
        {
          name: "Supply and Delivery of Grocery Items for Covid-19 Position and PUI’s patients. (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Grocery-Covid.pdf",
        },
        {
          name: "Supply and Delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Grocery-Re-Bid.pdf",
        },
        {
          name: "Supply and Delivery of Furniture for Teaching and Non-Teaching Personnel in Deped Tanauan City Division",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-deped-table-chairs.pdf",
        },
        {
          name: "Supply and Delivery of Educational Materials and Supplies for kindergarten pupils in Tanauan City Schools Division of Tanauan City",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/EDUCATIONAL-MATERIALS.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for the implementation of Family Planning Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Family-Planning.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Medicines-Birthing-Homes.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-medicines-10.19.2021.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Drugs-and-Medicine-8.5.2021.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Posting-Medicines-05.28.21.pdf",
        },
        {
          name: "Supply and Delivery of Disaster Response & Rescue Equipment",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Speedboat.pdf",
        },
        {
          name: "Supply and Delivery of Disaster Response & Rescue Equipment",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Outboard-Motor.pdf",
        },
        {
          name: "Supply and Delivery of Deped 5D Hub Facility & Installed Software to be used by the Learners/Students of Deped Tanauan City in their remote/distance learning",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Depe-5D-Hub-Final.pdf",
        },
        {
          name: "Supply and Delivery of Chemicals for the implementation of Dengue Prevention and Control Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Dengue-Program.pdf",
        },
        {
          name: "Supply and Delivery of Cellphone to ensure that all schools with all of its learners, teachers and staff are ready in the delivery of educational support services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-deped-cellphone.pdf",
        },
        {
          name: "Supply and Delivery of Antigen Covid-19 Rapid Test Kit",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-antigen-kit.pdf",
        },
        {
          name: "Supply and Delivery Multifunction Printer for Deped Tanauan City Division",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Deped-Printer.pdf",
        },
        {
          name: "Supply and Delivery of Office Supplies for Teachers of Deped Tanauan City in Their remote/distance teaching",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Supply-and-Delivery-of-Office-Supplies.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-drugs-and-medicines-3rd-and-4th-qtr.pdf",
        },
        {
          name: "Supply, Delivery and Installation of Panels, Cubicles and Tablets at Tanauan City College (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-TCC-Panels-Cubicles-and-Tables.pdf",
        },
        {
          name: "Supply, Delivery and Installation of Panels, Cubicles and Tablets at Tanauan City College",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-TCC-PANELS-AND-CUBICLES.pdf",
        },
        {
          name: "Supply and Delivery of Medical and Laboratory Supplies for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Medical-Supplies-6.8.21.pdf",
        },
        {
          name: "Supply and Delivery of Manipulative and Educational Toys for Kindergarten",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Manipulative.pdf",
        },
        {
          name: "Supply and Delivery of Grocery Items for Covid-19 Position and PUI’s patients",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Grocery-Covid-1.pdf",
        },
        {
          name: "Supply and Delivery of Grocery Items for Tulong Handog sa Tanaueno Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/itb-grocery-christmas-2021.pdf",
        },
      ],
    },
    {
      quarter: "BAC RESOLUTION",
      files: [
        {
          name: "Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GROCERY-BAC-RES-20M.pdf",
        },
        {
          name: "Supply and Delivery of Mobile Clinic for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Always-Right-BAC-RESO.pdf",
        },
        {
          name: "Supply and delivery of Manipulative and Educational Toys for Kindergarten pupils in City Schools Division of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/bac-res-books-on-wheels.pdf",
        },
        {
          name: "Supply and delivery (IT) Laptop for Teachers of Deped Tanauan City in their remote/distance learning",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/cosmic-laptop-bac-res.pdf",
        },
        {
          name: "Supply and Delivery of Emergency Alert and Dispatch System",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/TWIS-BAC-RES.pdf",
        },
        {
          name: "Supply and Delivery of Emergency Alert and Dispatch System in the City of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/TWIS-CONTRACT.pdf",
        },
        {
          name: "Supply, Delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and Surveillance System of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/bac-res-cctv-LRN.pdf",
        },
        {
          name: "Supply, Delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and Surveillance System of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/CONTRACT-CCTV-LRN.pdf",
        },
        {
          name: "Supply and delivery of Passenger Van (Flexi Truck) for CSWD used (Re-bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GENCARS-BAC-RESOLUTION.pdf",
        },
        {
          name: "Supply and delivery of Motor Vehicle for official use in the Office of the Building official",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/bac-res-vehicle-obo.pdf",
        },
        {
          name: "Emergency Procurement",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Angelmai-Trading-Bac-Res.pdf",
        },
        {
          name: "Supply and Delivery of Mini Multi-Purpose Vehicle",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Toyota-Bats-BAC-Res.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and medicines for City Health Medicines",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/BAC-RES-SESE.pdf",
        },
        {
          name: "Supply and Delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-BAC-RESO-898K.pdf",
        },
        {
          name: "Supply and delivery of Drugs and Medicines and Medical Supplies in the implementation of Rabies Prevention and Control Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-BAC-RESO-3.9M.pdf",
        },
        {
          name: "Supply and delivery of Drugs and Medicines for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-BAC-RESO-7.4M.pdf",
        },
        {
          name: "Supply and delivery of Drugs and Medicines for the implementation of Family Planning Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-BAC-RESO-1.3M.pdf",
        },
        {
          name: "Supply and Delivery of Educational Materials and Supplies for Kindergarten Pupils in City Schools Division of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/vicarish-bac-resolution.pdf",
        },
        {
          name: "Garbage Hauling Services for April 1, 2020 – December 31, 2020",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/metrowaste-bac-res.pdf",
        },
        {
          name: "Supply and Delivery of Covid-19 Test Kit",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/BAC-RES-COVID-TEST.pdf",
        },
        {
          name: "Supply and Delivery of Medical and Laboratory Supplies",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/BAC-Res.-Med-and-Lab-Supplies.pdf",
        },
        {
          name: "Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GROCERY-BAC-RES-20M.pdf",
        },
      ],
    },
    {
      quarter: "NOTICE TO PROCEED",
      files: [
        {
          name: "ALWAYS RIGHTPHARMACUETICALS CO./JC HIGH EAGLE MARKETING CO.JVA THAT SUPPLY AND DELIVERY OF MOBILE CLINIC FOR CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ALWAYS-RIGHT-NTP.pdf",
        },
        {
          name: "ANGELMAI TRADING THAT PURCHASE OF GROCERY ITEM IN ASSISTANCE TO COVID-19 CONFIRMED CASE, PUI AND PUM",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/angelmai-ntp.pdf",
        },
        {
          name: "COSMIC TECH NOLOGIES, INC. THAT SUPPLY AND DELIVERY OF (IT) LAPTOP FOR TEACHERS OF DEPED TANAUAN CITY IN THEIR REMOTE/DISTANCE LEARNING",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/cosmic-ntp-1.pdf",
        },
        {
          name: "GENNCARS SAN PABLO INC THAT SUPPLY AND DELIVERY OF PASSENGER VAN (FLEXI TRUCK) FOR CSWD USED",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GENCARS-NTP.pdf",
        },
        {
          name: "ZPM TRADING THAT SUPPLY AND DELIVERY OF GROCERY ITEMS FOR TULONG HANDOG SA TANAUEÑO PROGRAM(RE-BID)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GROCERY-NTP-20M.pdf",
        },
        {
          name: "METROWASTE SOLID WASTE MANAGEMENT CORP. THAT GARBAGE HAULING SERVICES FOR APRIL 1, 2021 – DECEMBER 31, 2021",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/metrowaste-ntp.pdf",
        },
        {
          name: "BOOKS ON WHEELS ENTERPRISES, INC. THAT SUPPLY AND DELIVERY OF MANIPULATIVE AND EDUCATIONAL TOYS FOR KINDERGARTEN PUPILS IN CITY SCHOOLS DIVISION OF TANAUAN",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ntp-books-on-wheels.pdf",
        },
        {
          name: "L.R.N VENTURES INC. THAT SUPPLY DELIVERY, INSTALLATION AND COMMISSIONING FOR THE REHABILITATION OF THE CITY-WIDE SECURITY AND SURVEILLANCE SYSTEM OF TANAUAN",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NTP-CCTV-LRN.pdf",
        },
        {
          name: "PRIME LUCK ENTERPRISES THAT SUPPLY AND DELIVERY OF COVID-19 TEST KIT",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NTP-COVID-TEST-KIT.pdf",
        },
        {
          name: "PRIME LUCK ENTERPRISES THAT SUPPLY AND DELIVERY OF MEDICAL AND LABORATORY SUPPLIES",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ntp-med-and-lab-supplies.pdf",
        },
        {
          name: "SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR CITY HEALTH OFFICE",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NTP-SESE.pdf",
        },
        {
          name: "TOYOTA BATANGAS CITY, INC. THAT SUPPLY AND DELIVERY OF MOTOR VEHICLE FOR OFFICIAL USE IN THE OFFICE OF THE BUILDING OFFICIAL",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NTP-Vehicle-OBO.pdf",
        },
        {
          name: "SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR THE IMPLEMENTATION OF FAMILY PLANNING PROGRAM",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NTP-1.3M.pdf",
        },
        {
          name: "SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES AND MEDICAL SUPPLIES IN THE IMPLEMENTATION OF RABIES PREVENTION AND CONTROL PROGRAM",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NTP-3.9M.pdf",
        },
        {
          name: "SOUTH EAST STAR ENTERPRISES THAT SUPPLY AND DELIVERY OF DRUGS AND MEDICINES FOR CITY HEALTH OFFICE",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NTP-7.4M.pdf",
        },
        {
          name: "TOYOTA BATANGAS CITY, INC. THAT SUPPLY AND DELIVERY OF MINI MULTI-PURPOSE VEHICLE",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Toyota-Bats-NTP.pdf",
        },
        {
          name: "TWIS TRADING THAT SUPPLY AND DELIVERY OF EMERGENCY ALERT AND DISPATCH SYSTEM",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/TWIS-NTP.pdf",
        },
        {
          name: "WIN GOLD MARKETING INTERNATIONAL DEVELOPMENT THAT SUPPLY, DELIVERY AND CONVERSION OF AMBULANCE FOR CDRRMO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/wingold-ntp-ambulance.pdf",
        },
        {
          name: "WIN GOLD MARKETING INTERNATIONAL DEVELOPMENT THAT SUPPLY, DELIVERY AND INSTALLATION OF SIREN TO BE USED FOR DISASTER PREPAREDNESS OF 4B BARANGAYS",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/wingold-ntp-siren.pdf",
        },
      ],
    },
    {
      quarter: "NOTICE OF AWARD",
      files: [
        {
          name: "Supply and delivery of Mobile Clinic for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Always-Right-NOA.pdf",
        },
        {
          name: "Procurement Emergency Purchase",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/angelmai-noa.pdf",
        },
        {
          name: "Supply and Delivery of Tablet for Learners/Students of Deped Tanauan City in their remote/distance learning",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/cosmic-noa-tablet.pdf",
        },
        {
          name: "Supply and delivery of Passenger Van (Flexi Truck for CSWD used)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Gencars-NOA.pdf",
        },
        {
          name: "Supply and delivery of Grocery Items for Tulong Handog sa Tanaueno Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/GROCERY-NOA-20M.pdf",
        },
        {
          name: "Garbage Hauling Services for April 1, 2021 – December 31, 2021",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/metrowaste-noa.pdf",
        },
        {
          name: "Cargo Forwarding and Hauling Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Metrowaste-philgeps-award.pdf",
        },
        {
          name: "Supply, delivery, installation and commissioning for the Rehabilitation of the City-Wide Security and surveillance System of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NOA-CCTV-LRN.pdf",
        },
        {
          name: "Supply and Delivery of Covid-19 Test Kit",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NOA-COVID-TEST-KIT.pdf",
        },
        {
          name: "Supply and Delivery of Medical and Laboratory Supplies",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NOA-MED-AND-lab-supplies.pdf",
        },
        {
          name: "Supply and delivery of drugs and medicines for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NOA-SESE.pdf",
        },
        {
          name: "Supply and delivery of Motor Vehicle for official use in the Office of the Building Official",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/NOA-VEHICLE-OBO.pdf",
        },
        {
          name: "Supply and Delivery of Grocery Items",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/PhilGEPS-Angelmai-Trading.pdf",
        },
        {
          name: "Supply and delivery of drugs and medicines for the Implementation of Family Planning Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NOA-1.3M.pdf",
        },
        {
          name: "Supply and delivery of drugs and medicines and medical supplies in the implementation of Rabies Prevention and Control Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NOA-3.9M.pdf",
        },
        {
          name: "Supply and delivery of drugs and medicines for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NOA-7.4M.pdf",
        },
        {
          name: "Supply and delivery of Medical Supplies for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SESE-NOA-898K.pdf",
        },
        {
          name: "Supply and Delivery of Mini Multi-Purpose Vehicle",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Toyota-Bats-NOA.pdf",
        },
        {
          name: "Supply and Delivery of Emergency Alert and Dispatch System",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/TWIS-NOA.pdf",
        },
        {
          name: "Supply and Delivery of Educational Materials and Supplies for Kindergarten pupils in City Schools Division of Tanauan",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/vicarish-noa.pdf",
        },
        {
          name: "Supply and Delivery of Educational Materials",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/vicarish-philgeps-award.pdf",
        },
      ],
    },
    {
      quarter: "FULL DISCLOSURE REPORT",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "70% LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2022/10/Unliquidated-Cash-Advances-UCA-4.pdf",
        },
      ],
    },
  ];

  const data2022: FullDisclosureReportInterface[] = [
    {
      quarter: "INVITATION TO BIDS",
      files: [
        {
          name: "Garbage Hauling Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/1.-ITB-Garbage-Hauling-2022.pdf",
        },
        {
          name: "Supply & Delivery of Brand New 4×4 Backhoe (GSO)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/backhoe-final.pdf",
        },
        {
          name: "Supply & Delivery of Sump Pump & Controller",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/3.-ITB-Sump-Pump.pdf",
        },
        {
          name: "Supply & Delivery of Laptop for Child Dev. Workers",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/4.-ITB-CSWD-Laptop.pdf",
        },
        {
          name: "Supply and Delivery of Motor Vehicle (Animal Control Mobile)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/ITB-Animal-Control-Vehicle.pdf",
        },
        {
          name: "Supply and Delivery of Insecticides & Chemicals for Dengue Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-for-Dengue-Program.pdf",
        },
        {
          name: "Supply and Delivery of Medical and Laboratory Supplies for City Health Office",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-for-Lab-Supplies.pdf",
        },
        {
          name: "Supply and Delivery of Business Plates",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/philgeps-bus-plates.pdf",
        },
        {
          name: "Supply and Delivery of Veterinary Supplies",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/philgeps-vet-supplies.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for TB Control Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/philgeps-tb-program.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/philgeps-med-3rd-qtr.pdf",
        },
        {
          name: "Supply & Delivery of Laboratory Supplies & Equipment",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/equipment-Philgeps.pdf",
        },
        {
          name: "EBPLs",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/EBPLS-PHILGEPS.pdf",
        },
        {
          name: "Christmas Decorations",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/CHRISTMAS-DECOR-PHILGEPS-POSTING.pdf",
        },
        {
          name: "Various Computers",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Computer-Various-Office.pdf",
        },
        {
          name: "Supply and Delivery of Sound System",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Sound-System.pdf",
        },
        {
          name: "Supply and Delivery of Armchair",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/philgeps-armchair.pdf",
        },
        {
          name: "Supply & Delivery of Responder’s Equipment",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/CDRRMO-Equipment.pdf",
        },
        {
          name: "Supply & Delivery of Grocery",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Posting-Groceries.pdf",
        },
        {
          name: "Supply and Delivery of Tempered Glass Board",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Posting-Groceries.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Med for Maternal Health Program",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/MATERNAL-PROGRAM-PHILGEPS-POSTING.pdf",
        },
        {
          name: "Supply and Delivery of Motor Vehicle for Office of the City Vice Mayor",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SP-VEHICLE-PHILGEPS.pdf",
        },
        {
          name: "Supply and Delivery of Furniture & Fixture for Office of the City Mayor",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Furniture-M.O.pdf",
        },
        {
          name: "Supply and Delivery of Live Animals for Dispersal",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Philgeps-Live-Animals-for-Dispersal.pdf",
        },
        {
          name: "Supply & Delivery of Drugs & Med for CHO (3rd qtr) Re-Bid",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/MED-3RD-QTR-RE-BID.pdf",
        },
        {
          name: "Supply and Delivery of Dugs & Med & Medical Supplies for Rabies Control Program (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/RABIES-RE-BID.pdf",
        },
        {
          name: "Supply and Delivery of Flu Vaccine (Re-Bid)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/FLU-VACCINE-RE-BID.pdf",
        },
      ],
    },
    {
      quarter: "NOTICE OF AWARDS",
      files: [
        {
          name: "Supply and Delivery of Rice and Sticker Provision of Welfare Goods Assistance for the poor families affected",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Rice-and-Sticker-Provision-of-Welfare-Goods-Assistance-for-the-poor-families-affected.pdf",
        },
        {
          name: "Supply and Delivery of Medical & Laboratory Supplies for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Medical-Laboratory-Supplies-for-CHO.pdf",
        },
        {
          name: "Supply and Delivery of Dump Truck",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Dump-Truck.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Drugs-and-Medicines-ofr-Sambat-and-Pagaspas-Birthing-Homes.pdf",
        },
        {
          name: "Supply and Delivery of Backhoe Loader",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-delivery-of-Backhoe-Loader.pdf",
        },
        {
          name: "Supply and Delivery of Assorted Groceries in Christmas Design",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Assorted-Groceries-in-Christmas-Design.pdf",
        },
        {
          name: "Supply and Delivery of Armchair for Various School",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Armchair-for-Various-School.pdf",
        },
      ],
    },
    {
      quarter: "BIDS NOTICE TO PROCEED",
      files: [
        {
          name: "Supply and Delivery of Armchair for Various Schools",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Armchair-for-Various-Schools.pdf",
        },
        {
          name: "Supply and Delivery of Assorted Groceries in Christmas Design",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Assorted-Groceries-in-Christmas-Design-1.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines for Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Drugs-and-Medicines-for-Sambat-and-Pagaspas-Birthing-Homes.pdf",
        },
        {
          name: "Supply and Delivery of Dump Truck",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Dump-Truck-1.pdf",
        },
        {
          name: "Supply and Delivery of Laboratory Supplies for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Laboratory-Supplies-for-CHO.pdf",
        },
        {
          name: "Supply and Delivery of Rice and Sticker provision of welfare goods assistance for the poor families affected",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Rice-and-Sticker-provision-of-welfare-goods-assistance-for-the-poor-families-affected.pdf",
        },
      ],
    },
    {
      quarter: "BIDS BAC",
      files: [
        {
          name: "Supply and Delivery of Armchair for Various School",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Armchair-for-Various-School-1.pdf",
        },
        {
          name: "Supply and Delivery of Assorted Groceries in Christmas Design",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Assorted-Groceries-in-Christmas-Design-2.pdf",
        },
        {
          name: "Supply and Delivery of Drugs and Medicines ofr Sambat and Pagaspas Birthing Homes",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Drugs-and-Medicines-ofr-Sambat-and-Pagaspas-Birthing-Homes-1.pdf",
        },
        {
          name: "Supply and Delivery of Dump Truck",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Dump-Truck-2.pdf",
        },
        {
          name: "Supply and Delivery of Medical & Laboratory Supplies for CHO",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Medical-Laboratory-Supplies-for-CHO-1.pdf",
        },
        {
          name: "Supply and Delivery of Rice and Sticker Provision of Welfare Goods Assistance for the poor families affected",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/Supply-and-Delivery-of-Rice-and-Sticker-Provision-of-Welfare-Goods-Assistance-for-the-poor-families-affected-1.pdf",
        },
      ],
    },
  ];

  const data2023: FullDisclosureReportInterface[] = [
    {
      quarter: "Full Disclosure Report",
      files: [
        {
          name: "20% Component of the IRA Utilization (IRAU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/20-IRA-Utilization-1Q-2023.pdf",
        },
        {
          name: "LDRRM Utilization Fund (LDRRMFU)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/LDRRMF-1Q-2023.pdf",
        },
        {
          name: "Bid Results on Civil Works, Goods & Services, Consulting Services",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/BID-RESULTS-1Q-2023.pdf",
        },
        {
          name: "Human Resource Complement (ManCom)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/HUMAN-RESOURCE-COMPLEMENT-1Q-2013.pdf",
        },
        {
          name: "Quarterly Statement of Cash Flow (QSCF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/CASH-FLOW-1Q-2023.pdf",
        },
        {
          name: "SEF Utilization Fund (SEF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/SEF-1Q-2023.pdf",
        },
        {
          name: "Trust Fund Utilization (PDAF)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/PDAF-1Q-2023.pdf",
        },
        {
          name: "Unliquidated Cash Advances (UCA)",
          files:
            "https://tanauancity.gov.ph/wp-content/uploads/2020/07/UNLIQUIDATED-CASH-ADVANCES-1Q-2023.pdf",
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

  const filterFiles = (
    dataset: FullDisclosureReportInterface[],
    bids: boolean = true
  ) => {
    const quarters = [
      "FIRST QUARTER",
      "SECOND QUARTER",
      "THIRD QUARTER",
      "FOURTH QUARTER",
    ];
    const filteredDataset = dataset.filter((item) => {
      return bids
        ? quarters.includes(item.quarter)
        : !quarters.includes(item.quarter);
    });

    return filteredDataset;
  };

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col w-full h-screen text-black bg-white shadow-2xl">
          <div
            className="bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Tanauan"
                className="w-auto h-20 mx-auto mt-5 mb-10 "
              />
            </Link>
          </div>
          <div className="flex flex-col pt-5 mx-2 space-y-4 overflow-auto">
            <p className="text-lg font-extrabold">BIDS AND AWARDS</p>{" "}
            <div className="flex items-center pb-2 border-b border-gray-700">
              <p className="text-lg font-extrabold">2021</p>
              <ul className="pl-2 ml-4 list-none">
                {filterFiles(data, false).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuarter(item)}
                    className="flex font-semibold text-black transition duration-200 cursor-pointer hover:text-gray-700"
                  >
                    <BiChevronRight className="mr-2 text-black" />{" "}
                    {item.quarter}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center pb-2 border-b border-gray-700">
              <p className="text-lg font-extrabold">2022</p>
              <ul className="pl-2 ml-4 list-none">
                {filterFiles(data2022, false).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuarter(item)}
                    className="flex font-semibold text-black transition duration-200 cursor-pointer hover:text-gray-700"
                  >
                    <BiChevronRight className="mr-2 " />
                    {item.quarter}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg font-extrabold">FULL DISCLOSURE REPORT</p>{" "}
            <div className="flex items-center pb-2 border-b border-gray-700">
              <p className="text-lg font-extrabold">2021</p>
              <ul className="pl-2 ml-4 list-none">
                {filterFiles(data).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuarter(item)}
                    className="flex font-semibold text-black transition duration-200 cursor-pointer hover:text-gray-700"
                  >
                    <BiChevronRight className="mr-2" />
                    {item.quarter}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center pb-2 border-b border-gray-700">
              <p className="text-lg font-extrabold">2022</p>
              <ul className="pl-2 ml-4 list-none">
                {filterFiles(data2022).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuarter(item)}
                    className="flex font-semibold text-black transition duration-200 cursor-pointer hover:text-gray-700"
                  >
                    <BiChevronRight className="mr-2" />
                    {item.quarter}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center pb-2 border-b border-gray-700">
              <p className="text-lg font-extrabold">2023</p>
              <ul className="pl-2 ml-4 list-none">
                {filterFiles(data2023).map((item, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedQuarter(item)}
                    className="flex font-semibold text-black transition duration-200 cursor-pointer hover:text-gray-700"
                  >
                    <BiChevronRight className="mr-2" />
                    {item.quarter}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid h-screen col-span-3 gap-4 p-4 overflow-auto bg-gray-100 sm:col-span-2 lg:col-span-3 rounded-t-xl">
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
      </div>
    </div>
  );
};

export default Documents;
