"use client";
import Wrapper from "@/components/elements/Wrappers";
import Logo from "@/components/elements/Logo";
import { IoSearchOutline } from "react-icons/io5";
import Menu from "../Header1/Menu";
import MenuMobile from "../Header1/MenuMobile";
import Button from "@/components/elements/Button";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
export default function Header2({
  show,
  handleMobileMenu,
  isMobileMenuOpen,
  upperNavItems,
  activeItemId,
  handleNavItemClick,
  handleSearchModal,
}: any) {
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-300 bg-white transition-transform duration-300 ${show}`}
    >
      {/* Desktop Section */}
      {/* Upper Nav  */}
      <Wrapper className="flex w-full items-center justify-between py-2 max-md:hidden">
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="tel:+91 9999999999" className="flex items-center gap-1">
            <FaPhoneAlt />
            <span>+91 9999999999</span>
          </Link>
          <Button
            as={Link}
            href="/listing-login"
            variant="orange-gradient"
            leftIcon={<VscLaw className="text-xl" />}
          >
            LogIn
          </Button>
        </div>
      </Wrapper>
      {/* -------------------------------------  */}
      {/* Mobile Section */}
      <Wrapper className="flex w-full items-center justify-between gap-3 py-2 md:hidden">
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-x-4">
          <Button
            as={Link}
            href="/listing-login"
            variant="orange-gradient"
            leftIcon={<VscLaw className="text-xl" />}
          >
            LogIn
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
