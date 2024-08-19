"use client";
import { CarouselBanner } from "@/components/Carousel";
import FaqAccordian from "@/components/FaqAccordian";
import GuestReviews from "@/components/GuestReviews";
import { Hotels } from "@/components/HotelsList";
import NearbyAttractions from "@/components/NearbyAttractions";
import { Reviews } from "@/components/Reviews";
import React from "react";

export default function HeroPage() {
  return (
    <>
      <CarouselBanner/>
      <Reviews/>
      <Hotels/>
      <NearbyAttractions/>
      <GuestReviews/>   
      <FaqAccordian/>    
    </>
  );
}
