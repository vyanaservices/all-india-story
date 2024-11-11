import React from "react";
import Navbar from "./Navbar";
import { IoFilter, IoLocationOutline } from "react-icons/io5";
import LocationTypeHead from "./globalSearch/LocationTypeHead";
import Dropdown, { DropdownItem } from "./Dropdown";
import Button from "./Button";

export default function Filters() {
  return (
    <div className="grid grid-cols-[repeat(22,minmax(0,1fr))] gap-2 border-b border-zinc-400">
      {/* 1 st  */}
      <div className="col-[_span_20_/_span_20]">
        <Navbar>
          {/* Location */}
          <div className="flex min-w-44 items-center space-x-2">
            <IoLocationOutline className="text-lg" />
            <LocationTypeHead />
          </div>
          {/* Sort by  */}
          <Dropdown text="Sort by" isRelative={false}>
            <DropdownItem>Alphabetically</DropdownItem>
            <DropdownItem>Popular</DropdownItem>
            <DropdownItem>Rating</DropdownItem>
          </Dropdown>
          {/* Price  */}
          <Dropdown text="Price" isRelative={false}>
            <DropdownItem>Low to High</DropdownItem>
            <DropdownItem>High to Low</DropdownItem>
          </Dropdown>
          {/* Ratings */}
          <Dropdown text="Ratings" isRelative={false}>
            <DropdownItem>3.5+</DropdownItem>
            <DropdownItem>3</DropdownItem>
            <DropdownItem>4.5+</DropdownItem>
            <DropdownItem>4</DropdownItem>
            <DropdownItem>5</DropdownItem>
          </Dropdown>
          {/* Verified  */}
          <Button variant={false ? "orange" : "white"}>
            Verified Businesses
          </Button>
          {/* Most Reviewed  */}
          <Button variant={false ? "orange" : "white"}>Most Reviewed</Button>
          {/* Most Experienced */}
          <Button variant={false ? "orange" : "white"}>Most Experienced</Button>
        </Navbar>
      </div>
      {/* 2 nd  */}
      <div className="col-span-2 flex items-center justify-end">
        <Button
          leftIcon={<IoFilter className="text-lg text-white" />}
          variant="orange"
        >
          <p className="max-md:hidden">Filters</p>
        </Button>
      </div>
    </div>
  );
}
