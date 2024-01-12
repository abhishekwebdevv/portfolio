import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Menu 1",
  },
  {
    id: 2,
    name: "Menu 2",
  },
  {
    id: 3,
    name: "Menu 3",
  },
  {
    id: 4,
    name: "Menu 4",
  },
];

export function Header() {
  return (
    <header className="border-4 border-black rounded-3xl rounded-b-none flex items-center justify-center gap-x-4">
      {menuList.map((menuItem) => (
        <Link
          href="/"
          key={menuItem.id}
          className="p-2 hover:bg-black hover:text-white"
        >
          {menuItem.name}
        </Link>
      ))}
    </header>
  );
}
