"use client";
import { ParallaxProvider } from "react-scroll-parallax";

const ParallaxProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ParallaxProviderWrapper;
