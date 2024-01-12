"use client";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Menu 1",
    hash: "#one",
  },
  {
    id: 2,
    name: "Menu 2",
    hash: "#two",
  },
  {
    id: 3,
    name: "Menu 3",
    hash: "#three",
  },
  {
    id: 4,
    name: "Menu 4",
    hash: "#four",
  },
];

export function Header() {
  console.log(window.location);
  const { hash } = window.location;

  return (
    <header className="border-4 border-black rounded-3xl rounded-b-none flex items-center justify-center gap-x-4">
      {menuList.map((menuItem) => (
        <Link
          href={menuItem.hash}
          key={menuItem.id}
          className={`p-2 hover:bg-black hover:text-white ${
            hash === menuItem.hash ? "bg-black text-white" : ""
          }`}
        >
          {menuItem.name}
        </Link>
      ))}
    </header>
  );
}
