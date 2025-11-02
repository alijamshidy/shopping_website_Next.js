import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-24"></div>
      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
};

export default layout;
