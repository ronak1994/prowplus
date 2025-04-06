import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;
const ProjectIcon = <i className="bx bx-briefcase side-menu__icon"></i>;
const TeamIcon = <i className="bx bx-group side-menu__icon"></i>;
const TaskIcon = <i className="bx bx-task side-menu__icon"></i>;
const CommunicationIcon = <i className="bx bx-conversation side-menu__icon"></i>;
const PaymentIcon = <i className="bx bx-credit-card side-menu__icon"></i>;
const ChatIcon = <i className="bx bx-chat side-menu__icon"></i>;
const EmailIcon = <i className="bx bx-envelope side-menu__icon"></i>;
const FileManagerIcon = <i className="bx bx-folder side-menu__icon"></i>;
const SettingsIcon = <i className="bx bx-cog side-menu__icon"></i>;

// Badges if needed
const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-1">
    New
  </span>
);

export const MenuItems: any = [
  {
    menutitle: "MAIN",
  },

  {
    icon: DashboardIcon,
    title: "Dashboard",
    type: "link",
    active: false,
    selected: false,
    path: "/dashboards/main",
  },

  {
    icon: ProjectIcon,
    title: "Projects",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/projects",
    dirchange: true,
  },

  {
    icon: TeamIcon,
    title: "Teams",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/teams",
    dirchange: true,
  },

  {
    icon: TaskIcon,
    title: "Tasks",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/tasks",
    dirchange: true,
  },

  {
    icon: CommunicationIcon,
    title: "Communication",
    type: "sub",
    active: false,
    selected: false,
    children: [
      {
        icon: ChatIcon,
        path: "/pages/communication/chats",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
        title: "Chats",
      },
      {
        icon: EmailIcon,
        path: "/pages/communication/emails",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
        title: "Emails",
      },
    ],
  },

  {
    icon: PaymentIcon,
    title: "Payments",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/payments",
    dirchange: true,
  },

  {
    icon: FileManagerIcon,
    title: "File Manager",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/file-manager",
    dirchange: true,
  },

  {
    icon: SettingsIcon,
    title: "Settings",
    type: "link",
    active: false,
    selected: false,
    path: "/pages/settings",
    dirchange: true,
  },
];
