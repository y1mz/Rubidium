import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";

function AboutBox({ pp, name, description }) {
    return (
        <div className="mx-auto my-40 ">
            <div className="flex flex-wrap gap-5 text-center justify-center">
                <Image src={pp} width={200} height={200} alt="Avatar Image" className="rounded-full"/>
                <div className="flex flex-col gap-5">
                    <h4 className="text-2xl">{name}</h4>
                    <p className="max-w-md text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;