import { useRef, useState } from "react";
import {Check, ContentCopy,CopyAll} from '@mui/icons-material'
import { OfficeLocationCard } from "./OfficeLocationCard";
import { Button } from "@mui/material";
import { useMemo } from "react";

export function Learning() {
  let companyName = "NEOSOFT";
  const [address, setaddress] = useState('');
  const [city,setCity] = useState('')
  const showAddress = (address) => {
    return (
      <>
        <address>{address}</address>
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
      city: "Mumbai",
      address:
        "Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013",
    },
    {
      city: "Mumbai",
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
  
  const [copyButton,changeCopyButton] = useState(true)

  const cities = useMemo(() => {
    const citySet = new Set(locations.map((location) => location.city));
    return Array.from(citySet);
  }, [locations]);

  return (
    <div className="p-4">
      <h4>
      </h4>
      <h2 className=" text-4xl ">{companyName}</h2>
      <h4 className="my-3 underline">Offices :</h4>
      <select className="p-2 bg-blue-100 rounded-md " onChange={(event)=>{setCity(event.target.value);changeCopyButton(true)}}>
        <option value=''>All</option>
        {
        cities.map((item,index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
      <div className="shadow-md shadow-slate-400 m-2 p-2 flex">
        {copyButton?<Button onClick={()=>changeCopyButton(false)}><ContentCopy /></Button>:<Check style={{color:'green'}}/>}
       {showAddress(address)}
      </div>
      <div className="flex flex-wrap gap-4">
        {
          locations.filter((item,index)=>item.city.toLowerCase().includes(city.toLowerCase())).map((loc, index) => {
            return (
                  <OfficeLocationCard key={index} office={loc} index={index} setLocation={setaddress} />
            );
          })
        }

      </div>
    </div>
  );
}
