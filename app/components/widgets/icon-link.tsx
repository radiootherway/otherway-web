import React from "react";

type IconLinkProps = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

const IconLink: React.FC<IconLinkProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md border py-2 px-4 text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      {text}
    </a>
  );
};

export default IconLink;
