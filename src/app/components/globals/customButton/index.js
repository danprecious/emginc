"use client";

import Link from "next/link";

const CustomButton = ({ text, href }) => {
  return (
    text && (
      <Link
        href={href}
        className="px-10 text-center py-3 rounded-[2em] hover:grow transition-all bg-gradient text-white"
      >
        {text}
      </Link>
    )
  );
};

export default CustomButton;
