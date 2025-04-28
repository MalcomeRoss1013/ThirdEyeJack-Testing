// import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Entertainment",
	path: "/Entertainment",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Games",
		path: "/entertainment/games",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "VideoPlayers",
		path: "/videoplayers",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Officeware",
	path: "/Officeware",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Organization and Management",
		path: "/OM",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Presentation",
		path: "/Presentation",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},   
{
	title: "Tools",
	path: "/Tools",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "3D Printing",
		path: "/3D Printing",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Accounting",
		path: "/Accounting",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Animation",
		path: "/Animation",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Architecture",
		path: "/Architecture",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Art",
		path: "/Art",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Engineering",
		path: "/Engineering",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Music",
		path: "/Music",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Data-Recovery",
		path: "/Data-Recovery",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "Operating Systems",
	path: "/OS",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Windows",
		path: "/Windows",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Linux",
		path: "/Linux",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
    {
		title: "Mac",
		path: "/Mac",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	],
},
{
	title: "Antivirus",
	path: "/Antivirus",
	icon: <FaIcons.FaPhone />,
},
{
	title: "Contact",
	path: "/contact-us",
	icon: <FaIcons.FaPhone />,
},
];
