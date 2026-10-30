import type { Metadata } from "next";
import Iec6033523Page from "@/components/Iec6033523Page";

export const metadata: Metadata = {
  title: "IEC 60335-2-3 Electric Irons Safety Testing | ITC India",
  description:
    "ITC India provides IEC 60335-2-3 / IS 302-2-3 electric irons safety testing for household and similar ironing appliances.",
};

export default function Page() {
  return <Iec6033523Page />;
}
