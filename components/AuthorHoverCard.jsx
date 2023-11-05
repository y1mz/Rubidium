"use client"

import { readConfig } from "@/libs/readConfig"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import React from "react";

function AuthorHoverCard() {
    const config = readConfig()

    return (
        <HoverCard className="bg-gray-800">
            <HoverCardTrigger asChild>
                <Button variant="link"><p className="text-sm text-white"><b className="text-md font-bold">{config.authorName}</b></p></Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gray-800">
                <div className="flex justify-between space-x-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src="/assets/img/avatar.png" />
                    </Avatar>
                    <div className="space-y-1 text-white">
                        <h4>{config.authorName}</h4>
                        <span className="-mt-1 text-xs text-gray-300">{config.authorEmail}</span>
                        <p className="text-sm">
                            {config.authorBio}
                        </p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default AuthorHoverCard