"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Wrapper from "@/components/elements/Wrappers";
import Button from "@/components/elements/Button";
import Logo from "@/components/elements/Logo";
import { footer } from "@/data/layout";

export default function Footer1() {
  return (
    <Wrapper
      as="footer"
      containerClassName="w-full text-black border-t border-gray-300"
      className="pt-5 md:pt-12"
      bgColor="bg-white"
    >
      {/* NewsLetter Section  */}
      <div className="mb-5 flex w-full items-center justify-between gap-3 border-b border-white max-sm:flex-wrap">
        <Logo />
        <p className="mb-4 max-w-[400px] text-wrap max-sm:mt-3 max-sm:!w-[80vw]">
          <TextWithLineBreak text={footer?.text} />
        </p>
      </div>
      {/* Footer links section  */}
      {/* copyright  */}
      <div className="border-grey-300 w-full  border-t py-5">
        <p className="text-center text-sm">{footer?.copyrightText}</p>
      </div>
    </Wrapper>
  );
}
