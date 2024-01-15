"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

//=================Types================//
type HashTypes = "one" | "two" | "three" | "four";
type MenuListItemType = {
  id: number;
  name: string;
  hash: HashTypes;
};
//======================================//

const menuList: MenuListItemType[] = [
  {
    id: 1,
    name: "Menu 1",
    hash: "one",
  },
  {
    id: 2,
    name: "Menu 2",
    hash: "two",
  },
  {
    id: 3,
    name: "Menu 3",
    hash: "three",
  },
  {
    id: 4,
    name: "Menu 4",
    hash: "four",
  },
];

export function Header() {
  const [currentHash, setCurrentHash] = useState<HashTypes>("one");

  useEffect(() => {
    document
      .getElementById(currentHash)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [currentHash]);

  return (
    <header className="border-4 border-black rounded-3xl rounded-b-none flex items-center justify-center gap-x-4">
      {menuList.map((menuItem) => (
        <button
          key={menuItem.id}
          onClick={() => setCurrentHash(menuItem.hash)}
          className={`p-2 hover:bg-black hover:text-white ${
            currentHash === menuItem.hash ? "bg-black text-white" : ""
          }`}
        >
          {menuItem.name}
        </button>
      ))}
    </header>
  );
}
