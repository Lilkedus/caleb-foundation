import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Caleb Foundation – Save Life with Pennies INC is a 501-c3 nonprofit organization licensed in the USA by the Internal Revenue Service since July 3, 2012. Caleb Foundation is currently operational in Addis Ababa with a registration certificate from the FDRE Civil Societies Agency with certificate number 3683.
        <br />
        <br />
        The main objective of the organization is to make a lifetime impact in the lives of underprivileged families through our focus on health, education, nutrition, livelihood improvement, child & youth empowerment, and women empowerment. The goal of our programs are to bring sustainable change so that ultimately, the families will be able to support themselves.
      </p>
    </div>
  );
}
