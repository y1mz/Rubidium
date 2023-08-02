import React from "react";

import Image from "next/image";

function AboutBox({ pp, name, description }) {
    return (
        <div className="mx-auto my-40 ">
            <div className="flex gap-5 text-center justify-center">
                <Image src={pp} width={200} height={200} alt="Avatar Image" className="rounded-full"/>
                <div className="flex flex-col gap-5">
                    <h2 className="text-2xl">{name}</h2>
                    <p className="max-w-md">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;