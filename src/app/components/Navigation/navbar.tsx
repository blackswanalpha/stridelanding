"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/app/components/ui/navigation-menu";
import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  logo?: React.ReactNode;
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

const Navbar = ({
  logo = (
    <span className="text-xl font-bold bg-gradient-to-r from-[#C850C0] to-[#FFAA6C] bg-clip-text text-transparent">
      Stride.
    </span>
  ),
  onLoginClick = () => console.log("Login Clicked"),
  onSignUpClick = () => console.log("Sign Up Clicked"),
}: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full h-20 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed top-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">{logo}</div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/features"
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
                )}
                aria-label="Features"
              >
                Features
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/pricing"
                className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
                )}
                aria-label="Pricing"
              >
                Pricing
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={onLoginClick}
            className="hidden sm:inline-flex"
          >
            Login
          </Button>
          <Button
            onClick={onSignUpClick}
            className="bg-gradient-to-r from-[#C850C0] to-[#FFAA6C] text-white hover:opacity-90 transition-opacity"
          >
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col py-4 px-6">
          <Link
              href="/features"
              className="py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="/features"
              className="py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="py-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <hr className="my-2" />
            <Button
             
              onClick={() => {
                setMobileOpen(false);
                onLoginClick();
              }}
              className="w-full"
            >
              Get Started
            </Button>
            <Button
              onClick={() => {
                setMobileOpen(false);
                onSignUpClick();
              }}
              className="w-full bg-gradient-to-r from-[#C850C0] to-[#FFAA6C] text-white hover:opacity-90 transition-opacity"
            >
              Learn More
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
