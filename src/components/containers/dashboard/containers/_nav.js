import React from "react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { CgProfile } from "react-icons/cg";
import { GiReceiveMoney, GiPayMoney, GiBuyCard } from "react-icons/gi";
import { SiCampaignmonitor } from "react-icons/si";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <CIcon
        content={freeSet.cilSpeedometer}
        customClasses="c-sidebar-nav-icon"
      />
    )
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["User Information"]
  },

  {
    _tag: "CSidebarNavItem",
    name: "Profile",
    icon: <CgProfile className="mr-3" />,
    to: "/dashboard/profile"
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Transactions",
    route: "/dashboard/transaction",
    icon: <GiBuyCard className="mr-3" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Daily Contribution",
        to: "/dashboard/contribution/daily"
      },
      {
        _tag: "CSidebarNavItem",
        name: "Monthly Contribution",
        to: "/dashboard/contribution/monthly"
      }
    ]
  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Project",
  //   route: "/dashboard/donation",
  //   icon: <SiCampaignmonitor className="mr-3" />,
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Create Projects",
  //       to: "/dashboard/project/create-project"
  //     },  {
  //       _tag: "CSidebarNavItem",
  //       name: "Project donations",
  //       to: "/dashboard/donation/donation-received"
  //     },
  //   ]
  // }
];

export default _nav;
