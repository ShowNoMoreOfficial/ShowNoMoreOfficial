// Central GSAP initialisation.
// Import { gsap, ScrollTrigger, SplitText, useGSAP } from here so plugins are
// only registered once, on the client. GSAP 3.13+ ships every plugin for free.
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { EASE, SNM_BEZIER } from "./motion";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

	// Register the site's signature easing curve once, so every reveal across
	// every page settles with the same premium motion.
	if (!gsap.parseEase(EASE.reveal)) {
		CustomEase.create(EASE.reveal, `M0,0 C${SNM_BEZIER} 1,1`);
	}
}

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP };
