"use client";
import Wrapper from "@/components/elements/Wrappers";
import Logo from "@/components/elements/Logo";
import { IoSearchOutline } from "react-icons/io5";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Button from "@/components/elements/Button";
import Link from "next/link";
import { ad1 } from "@/assets";
import Image from "next/image";
import { HeaderTrendingSlider } from "@/components/sections/cardsAndSliders/HeaderTrendingSlider";
export default function Header1({
  show,
  handleMobileMenu,
  isMobileMenuOpen,
  upperNavItems,
  lowerNavItems,
  activeItemId,
  handleNavItemClick,
  handleSearchModal,
}: any) {
  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white transition-transform duration-300 ${show}`}
    >
      {/* Desktop Section */}
      {/* Upper Nav  */}
      <Wrapper className="grid grid-cols-12 gap-5 border-b border-gray-300 text-sm max-md:hidden">
        <div className="col-span-8 flex">
          <p className="bg-bg1 px-4 py-2 text-white">Trending</p>
          <HeaderTrendingSlider />
        </div>
        <div className="text-grey1 col-span-4 my-auto text-end">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </Wrapper>
      {/* Mid Nav  */}
      <Wrapper className="flex w-full items-center justify-between py-2 max-md:hidden">
        {/* Logo with Link */}
        <Logo />
        {/* Ad Banner  */}
        <div className="max-h-[100px] max-w-[810px] max-md:hidden">
          <Image
            src={ad1}
            alt="adBanner"
            width={810}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
      </Wrapper>
      {/* Lower Nav  */}
      <Wrapper
        bgColor="bg-white"
        className="border-y border-gray-300 max-md:hidden"
      >
        <ul className="hidden items-center gap-x-5 font-medium text-zinc-800 md:flex">
          <Menu
            navItemsArray={lowerNavItems}
            activeItemId={activeItemId}
            onItemClick={handleNavItemClick}
          />
        </ul>
      </Wrapper>
      {/* -------------------------------------  */}
      {/* Mobile Section */}
      <Wrapper className="flex w-full items-center justify-between gap-3 py-2 md:hidden">
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-x-4">
          {/* HamMenu Icon  */}
          <HamIcon
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenu={handleMobileMenu}
          />
        </div>
      </Wrapper>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full md:hidden">
          <MenuMobile
            navItemsArray={upperNavItems}
            setIsMobileMenuOpen={handleMobileMenu}
            activeItemId={activeItemId}
          />
          <MenuMobile
            navItemsArray={lowerNavItems}
            setIsMobileMenuOpen={handleMobileMenu}
            activeItemId={activeItemId}
          />
        </div>
      )}
    </header>
  );
}

function HamIcon({ isMobileMenuOpen, handleMobileMenu }: any) {
  return (
    <button
      className={`navbar-toggle-btn ${isMobileMenuOpen ? "open" : ""}`}
      type="button"
      onClick={handleMobileMenu}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
}
