import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex gap-4 mt-6">
        <Button title="Small Rounded" styles="rounded-sm text-xs px-2 py-1" />
        <Button title="Medium Rounded" styles="rounded-md text-base px-4 py-2" />
        <Button title="Large Full" styles="rounded-full text-lg px-6 py-3" />
      </div>
    </div>
  )
}
export default Landing;
