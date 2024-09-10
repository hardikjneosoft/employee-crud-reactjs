import { useRef, useState } from "react";
import {ContentCopy} from '@mui/icons-material'
import { OfficeLocationCard } from "./OfficeLocationCard";
import { Button } from "@mui/material";

export function Learning() {
  let companyName = "NEOSOFT";
  let [locationIndex, setLocationIndex] = useState(0);
  const showAddress = (index) => {
    return (
      <>
        <address>{locations[index].address}</address>
      </>
    );
  };
  const locations = [
    {
      city: "Mumbai",
      address:
        "The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028",
    },
    {
      city: "Parel, Mumbai",
      address:
        "Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013",
    },
    {
      city: "Rabale, Mumbai",
      address:
        "Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701",
    },
    {
      city: "Pune",
      address:
        "IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057",
    },
    {
      city: "Noida",
      address:
        "WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301",
    },
    {
      city: "Ahmedabad",
      address:
        "WestGate, True Value, Block-E, 5th Floor, Near YMCA Club, SG Road, Ahmedabad 380015 Gujarat, India",
    },
    {
      city: "Indore",
      address:
        "Virtual Co-Works, 41-42, First Floor, Pu4, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh 452010",
    },
    {
      city: "Bengaluru",
      address:
        "Novel MSR Building, Subbaiah Reddy Colony, Marathahalli Village, Marathahalli, Bengaluru, Karnataka - 560037",
    },
    {
      city: "Kolkata",
      address:
        "Technopolis Building 11th floor HCHQ+V3X, Street Number 1, BP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091",
    },
    {
      city: "Chennai",
      address:
        "Awfis Primus, 1st Floor, Door No. SP–7A, Guindy Industrial Estate, SIDCO, Industrial Estate, Guindy, Chennai, Tamil Nadu, 600032",
    },
    {
      city: "Hyderabad",
      address:
        "N-Heights buildings, AWFIS, 6th floor Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081",
    },
  ];

  return (
    <div className="p-4">
      <h2 className=" text-4xl ">{companyName}</h2>
      <h4 className="my-3 underline">Offices :</h4>
      {/* <select className="p-2 bg-blue-100 rounded-md ">
        {locations.map((item) => {
          return <option>{item.city}</option>;
        })}
      </select> */}
      <div className="shadow-md shadow-slate-400 m-2 p-2 flex">
      <Button onClick={($event)=>{$event.currentTarget = "none"}}><ContentCopy /></Button> {showAddress(locationIndex)}
      </div>
      <div className="flex flex-wrap gap-4">
        {locations.map((loc, index) => {
          return (
                <OfficeLocationCard office={loc} index={index} setLocation={setLocationIndex} />
          );
        })}
      </div>
    </div>
  );
}
