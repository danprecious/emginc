"use client";

import Link from "next/link";

const CustomButton = ({ text, href, children }) => {
  return (
    text && (
      <Link
        href={href}
        className="px-10 text-center py-3 rounded-lg hover:grow transition-all  bg-primary dark:hover:text-secondary text-primaryContrast hover:bg-primaryShade hover:text-secondary"
      >
        {text}
        {children}
      </Link>
    )
  );
};

export default CustomButton;
