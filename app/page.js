"use client"

import ContactForm from "@/components/ContactForm";
import Section from "@/components/section";
import Features from "@/components/features";
import FeatureSections from '@/components/MainFeatures'
import Amenities from "@/components/Amenities";
import MapContainer from '@/components/maps'


import SiteHeader from "@/components/siteheader";

export default function Home() {
  return (
    <div className=" bg-white">
        <SiteHeader/>
        <Section/>
        <Features/>
        <FeatureSections/>
        <Amenities/>
        <MapContainer/>
        <ContactForm/>
    </div>
  );
} 