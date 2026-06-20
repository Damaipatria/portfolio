import { PortofolioHeader as Header } from "@/features/portfolio/layout/portfolio-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My Portofolio",
    template: "My Portofolio - %s",
  },
  description: "Menampilkan portofolio saya",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}