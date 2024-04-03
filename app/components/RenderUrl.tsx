"use client";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import SectionLinks from "./SectionLinks";
import Link from "next/link";

const RenderUrl = () => {
  const { arr } = useContext(AuthContext);
  return (
    <>
      {arr.map((links: Array<string>) => {
        return (
          <Link href={links[1]} target="_blank">
            <SectionLinks key={links[0]}>
              <span>
                {links[0].length > 8 ? `${links[0].substring(0, 6)}...` : links[0]}
              </span>
            </SectionLinks>
          </Link>
        );
      })}
    </>
  );
};

export default RenderUrl;
