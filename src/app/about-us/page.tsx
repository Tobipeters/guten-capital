"use client";
import { SecureYourFuture } from "../components";
import { CoreValues, Header, MeetTheTeam, OurHistory, OurMissionAndVision } from "./components";


export default function AboutUs() {
  return (
    <>
      <Header />
      <OurHistory />
      <OurMissionAndVision />
      <CoreValues />
      <MeetTheTeam />
      <SecureYourFuture />
    </>
  );
}
