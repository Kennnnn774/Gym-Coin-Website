import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/feifanjasmineguan/Blockchain-GymCoin" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🤾 Gym Coin"
        subTitle="A network of gym lovers"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
