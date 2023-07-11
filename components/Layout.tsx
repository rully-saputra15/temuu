import { FC } from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={`h-screen ${oswald.className}`}>{children}</div>;
};

export default Layout;
