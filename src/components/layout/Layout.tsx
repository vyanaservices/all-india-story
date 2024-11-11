"use client";
import { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1/Header1";
import ScrollToTopButton from "../elements/ScrollToTopButton";
import { usePathname, useRouter } from "next/navigation";
import { header } from "@/data/layout";
import Header2 from "./header/Header2/Header2";

export default function Layout({
  headerStyle = 1,
  footerStyle = 1,
  children,
}: any) {
  // Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<string>("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [upperNavItems, setUpperNavItems] = useState<any[]>(header?.upperNav);
  const [lowerNavItems, setLowerNavItems] = useState<any[]>(header?.lowerNav);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const getBasePath = (url: string) => {
    const urlSegments = url.split("/");
    return `/${urlSegments[1]}`;
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((pre) => !pre);
  };
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!isSidebar);
  };
  const [isSearchModal, setIsSearchModal] = useState<Boolean>(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
          setShow("-translate-y-[40px]");
        } else {
          setShow("shadow-sm");
        }
      } else {
        setShow("translate-y-0");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    const activeItem =
      upperNavItems.find((item) => item.href === getBasePath(pathname)) ||
      upperNavItems.find((item) =>
        item.subNav?.some(
          (subItem: { href: string }) => subItem.href === getBasePath(pathname),
        ),
      );
    if (activeItem) {
      setActiveItemId(activeItem.id.toString());
    } else {
      setActiveItemId(null);
    }
  }, [pathname, upperNavItems]);

  useEffect(() => {
    const activeItem =
      lowerNavItems.find((item) => item.href === getBasePath(pathname)) ||
      lowerNavItems.find((item) =>
        item.subNav?.some(
          (subItem: { href: string }) => subItem.href === getBasePath(pathname),
        ),
      );
    if (activeItem) {
      setActiveItemId(activeItem.id.toString());
    } else {
      setActiveItemId(null);
    }
  }, [pathname, lowerNavItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, isMobileMenuOpen]);

  const handleNavItemClick = (itemId: string, href: string) => {
    setActiveItemId(itemId);
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      {headerStyle == 1 && (
        <Header1
          show={show}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          upperNavItems={upperNavItems}
          lowerNavItems={lowerNavItems}
          activeItemId={activeItemId}
          handleNavItemClick={handleNavItemClick}
          handleSearchModal={() => setIsSearchModal((pre) => !pre)}
          handleSidebar={handleSidebar}
          handleLogout={() => {}}
        />
      )}
      {headerStyle == 2 && (
        <Header2
          show={show}
          handleMobileMenu={handleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          upperNavItems={upperNavItems}
          lowerNavItems={lowerNavItems}
          activeItemId={activeItemId}
          handleNavItemClick={handleNavItemClick}
          handleSearchModal={() => setIsSearchModal((pre) => !pre)}
          handleSidebar={handleSidebar}
          handleLogout={() => {}}
        />
      )}
      {isSearchModal && (
        <Search handleSearchModal={() => setIsSearchModal(false)} />
      )}
      <main>{children}</main>
      {footerStyle == 1 && <Footer1 />}
      <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
      <ScrollToTopButton />
    </>
  );
}
