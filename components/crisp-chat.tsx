"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("fe5453a8-5111-45ac-a525-5010014fb8a8");
    }, []);

    return null;
}