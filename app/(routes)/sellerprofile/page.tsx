"use client"

import React, { useState } from "react";
import UserProfile from "@/app/components/profile/profilesection";
import Toggle from "@/app/components/profile/togglebuttton";


export default function Shop() {
    return (
        <div>
        <UserProfile/>
        <Toggle/>
        </div>
    )
}