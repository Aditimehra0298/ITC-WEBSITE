import type { Metadata } from "next";
import Iec60335Page from "@/components/Iec60335Page";

export const metadata: Metadata = {
  title: "IEC 60335-1 Safety Testing for Household Appliances in India | ITC India",
  description:
    "ITC India provides IEC 60335-1 / IS 302 (Part 1) / BS EN 60335-1 safety testing for household and similar electrical appliances.",
};

export default function Page() {
  return <Iec60335Page />;
}
