import React from "react";
import PackageItem from "./PackageItem.js";
import "../Styles/PackageList.css";

const PackageList = () => {
  const list = [
    {
      id: "1",
      time: "2 hours",
      desc: "(this package does not include corporate, school, or wedding events)",
      offer: (
        <ul>
          <li>Unlimited Slow Motion Video Captures</li>
          <li>2 On-site Video Attendants</li>
          <li>iPad Sharing Station</li>
          <li>Instant Video Downloads </li>
          <li>Security Stanchions</li>
          <li>Custom Video Overlay with Music</li>
          <li>Mini-Website with Video Gallery</li>
          <li>Themed Prop Table</li>
          <li>Free Travel Up to 25 Miles Included</li>
        </ul>
      ),
    },
    {
      id: "2",
      time: "3 hours",
      offer: (
        <ul>
          <li>Unlimited Slow Motion Video Captures</li>
          <li>2 On-site Video Attendants</li>
          <li>iPad Sharing Station</li>
          <li>Instant Video Downloads </li>
          <li>Security Stanchions</li>
          <li>Custom Video Overlay with Music</li>
          <li>Mini-Website with Video Gallery</li>
          <li>Free Travel Up to 25 Miles Included</li>
          <li>Red Carpet</li>
        </ul>
      ),
    },
    {
      id: "3",
      time: "4 hours",
      offer: (
        <ul>
          <li>Unlimited Slow Motion Video Captures</li>
          <li>2 On-site Video Attendants</li>
          <li>iPad Sharing Station</li>
          <li>Instant Video Downloads </li>
          <li>Security Stanchions</li>
          <li>Custom Video Overlay with Music</li>
          <li>Mini-Website with Video Gallery</li>
          <li>Free Travel Up to 25 Miles Included</li>
          <li>Red Carpet</li>
          <li>1 Minute Post Event Music Video</li>
        </ul>
      ),
    },
  ];

  const listOfItem = list.map((element) => {
    return (
      <PackageItem
        key={element.id}
        hours={element.time}
        desc={element.desc}
        offer={element.offer}
      />
    );
  });

  return <div className="listOfPackageItem">{listOfItem}</div>;
};

export default PackageList;
