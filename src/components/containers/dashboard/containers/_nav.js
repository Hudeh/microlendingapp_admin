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
        name: "Regular Contributions",
        to: "/dashboard/contribution/daily"
      },
      {
        _tag: "CSidebarNavItem",
        name: "Targeted Contributions",
        to: "/dashboard/contribution/monthly"
      }
    ]
  }
];

export default _nav;
