import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  const socials = [
    { _id: "1", url: "https://www.instagram.com/lusungundovi/?hl=en" },
    {
      _id: "2",
      url: "https://www.linkedin.com/in/lu-ndovi-713819208/?originalSubdomain=uk",
    },
    { _id: "3", url: "https://github.com/lmndovi" },
  ];

  return (
    <header>
      <div>
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
