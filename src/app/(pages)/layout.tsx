import { Title } from "@/components/Title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emir's Resume",
  description: "Website for Emir's Resume",
  authors: [
    {
      name: "Emir",
      url: "https://www.github.com/emirchus",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {/* <Title /> */}
      {children}
    </div>
  );
}
