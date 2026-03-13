---
title: "Why I Wouldn't Mess With Iran"
date: "2025-06-19"
excerpt: "A deep dive into an Imperial Kitten campaign and a quick look at Iran’s recent cyber successes."
---


The countries you’ve probably seen most in the news when it comes to cyber threats are China, Russian, and North Korea. Rightfully so, they’re the big scaries. However, if you’ve kept up Iran’s growing cyber capabilities over the years, you’d know that they deserve to be right alongside the big 3 and that it is by their own design that they are not.

Iranian state-sponsored actors “choose their targets carefully and infiltrate them slowly, frequently silently, for reconnaissance, espionage, or later attacks.”(1) Iran’s state sponsored groups are incredibly skilled in maintaining elusive access to their carefully selected targets without raising alarms. They will conduct multi-year long campaigns to achieve their goals. That is to say that if the United States chooses to get involved in the current Israeli-Iranian conflict, I have a feeling Iran is going to come back with what Heather Gay from The Real Housewives of Salt Lake City would call, “receipts, proof, timeline, screenshots, fucking everything.”


![Sekoia breakdown of Iran-nexus intrusion sets](Iran-nexus-intrusion-sets.png)


[Iran Cyber Threat Overview](https://blog.sekoia.io/iran-cyber-threat-overview/) - Sekoia.io Blog (2)

**Case Study**

Using ProofPoint’s amazing reporting(2), we can take a look at a 2021 campaign attributed to TA456/Toroiseshell/Imperial Kitten. (Insert diatribe regarding ridiculous names here.)

Long before everyone and their mom had access to an LLM, Iranian threat actors were creating elaborate sock puppet accounts to create seemingly valid relationships with targets such as Marcella “Marcy” Flores.


![Proofpoint image of malicious Iranian persona](marcy.png)
ProofPoint image of malicious Iranian persona

Marcy became Facebook friends with a supply chain manager at a subsidiary of an aerospace defense contractor in 2019 and started up innocuous correspondence in November 2020, possibly before. For months the two exchanged emails, photos, and Marcy even sent a flirty video, really trying to sell the target on the actor’s authenticity. 

In June of 2021 is when Marcy sent the diet survey. The two had apparently previously discussed the topic of nutrition and how the pandemic had impacted health. The .rar file Marcy sent over sure as shit contained an Excel spreadsheet template to fill in your pandemic food habits. However, it requested the user to “enable content” to see the whole document under the guise of the sensitive nature of the data, which was all BS. 

“Enabling content” in Excel enables macros. Excel macros are powered by VBA (Visual Basic for Applications), meaning they’re wonderful little scripts that can help automate your repetitive tasks both inside and outside of Excel, if you’re using them benignly. If you’re Marcy, they’re wonderful scripts that can create and hide a directory, write a plaintext stealer malware to that hidden directory and add a registry key to make the malware run upon user login. 

They were off to the races, grabbing everything about the target and their computer, packaging it up, and exfiltrating it out over SMTPS on port 465.

You may be saying, “But, Jen, that was years ago. People are more observant of these campaigns. Why be afraid of them now?

(As a quick aside before we move into recent Iranian successes, people are still duped by imposters, desperate to believe them, or they just want to be nefarious. I don’t know why, I’ve seen enough in my day, but I was still shocked to find out that an Arizona woman ran laptop farms for malicious North Koreans(9). Social engineering has only gotten better. Stay vigilant, friends.)

**Recent Successes**

Thanks to reporting from Recorded Future and ESET (3, 4), we now know that Kurdish and Iraqi officials were targeted in, you guessed it, a long-running cyberespionage campaign associated with Iranian actors. 

BladedFeline is a supposed subgroup of OilRig (APT34). ESET reports that they believe the subgroup compromised officials within the Kurdistan Regional Government at least as early as 2017. 


Looking to the United States, the State Department has, just recently as of this publishing, issued an up to $10 million dollar reward for information regarding Iranian actors that compromised ICS/SCADA devices.(8)

Lastly, in possibly one of the most ridiculous and disgusting cyber intrusions, Handala, an Iranian group that has been tied to Iran’s Ministry of Intelligence (MOIS), claimed responsibility for compromising Israeli kindergarten PA systems.(9)

These are just a few recent successful cyber attacks that have been attributed to Iran, but given what we know about their tactics, it is likely that we may not know about an Iranian-aligned intrusion until it's too late.

**Conclusion**

With Iran’s determination, incredible funding and organization, and history of successful espionage campaigns, they are a more than formidable force when it comes to cyber warfare. As of June 17, “Radware, a U.S.-based cybersecurity firm, estimated there's been a 700% increase in Iranian cyberattacks against Israeli targets since Israel launched its initial missile strike on Tehran on June 12.”(6) This says to me that Iran is more than ready to take on and retaliate against whatever comes their way. Between script “kitties” (pun intended), emboldened hacktivists, and the ever-patient, ever-persistent Iranian Government’s Islamic Revolutionary Guard Corps (IRGC), potential targets need to begin hardening infrastructure and hunting for Iranian TTPs, preferably yesterday.

**Sources**


1. Proofpoint. (n.d.). Iranian State-Sponsored and Aligned Attacks: What You Need to Know and Steps to Protect. Retrieved from https://www.proofpoint.com/us/corporate-blog/post/iranian-state-sponsored-and-aligned-attacks-what-you-need-know-and-steps-protect

2. Proofpoint. (2023, July 13). I knew you were trouble: TA456 targets defense contractor with alluring social media persona. Retrieved from https://www.proofpoint.com/us/blog/threat-insight/i-knew-you-were-trouble-ta456-targets-defense-contractor-alluring-social-media

3. The Record. (2024, April 8). Iran-linked hackers target Kurdish politicians in Iraq in cyber espionage campaign. Retrieved from https://therecord.media/iran-linked-hackers-target-kurdish-iraq-cyber-espionage

4. ESET Research. (2024, August 24). BladeFeline and the whispering dark: New APT activity uncovered. Retrieved from https://www.welivesecurity.com/en/eset-research/bladedfeline-whispering-dark/

5. CISA. (2023, December 1). AA23-335A: Iranian Government-Sponsored APT Cyber Actors Compromise U.S. Critical Infrastructure. Retrieved from https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-335a

6. Axios. (2025, June 17). U.S., Iran, Israel clash in quiet cyberwar over critical infrastructure. Retrieved from https://www.axios.com/2025/06/17/us-iran-israel-cyberattacks-critical-infrastructure

7. SEKOIA.IO. (n.d.). Iran cyber threat overview. Retrieved from https://blog.sekoia.io/iran-cyber-threat-overview/

8. Industrial Cyber. (2024, November 29). US offers $10 million for intel on Iran-linked hacker in ICS malware campaign against critical infrastructure. Retrieved from https://industrialcyber.co/industrial-cyber-attacks/us-offers-10-million-for-intel-on-iran-linked-hacker-in-ics-malware-campaign-against-critical-infrastructure/

9. Iran International. (2025, January 26). US ramps up pressure on Iran amid wave of cyberattacks. Retrieved from https://www.iranintl.com/en/202501265679

10. The Hacker News. (2025, June). U.S. Seizes $774M in Crypto Tied to North Korea Hacker Network. Retrieved from https://thehackernews.com/2025/06/us-seizes-774m-in-crypto-tied-to-north.html
