---
title: "Scattered Spider MGM Intrusion: Diamond Model"
date: "2025-09-21"
excerpt: "Applying the Diamond Model of Intrusion Analysis to a Real Intrusion"
---



A fundamental skill in Cyber Threat Intelligence is mapping intrusions. There are several ways to portray such complicated events, each with various pros and cons. In this post, we’ll discuss the Diamond Model and use it to map Scattered Spider’s intrusion of MGM Resorts. 

### Some Diamond Model Background

Every intrusion event includes an adversary moving toward an objective by using a capability over infrastructure against a target. Those events can be chained into activity threads (sequence of steps) and clustered into activity groups (campaigns). For this mapping, we will be using one Diamond to map the entire intrusion. In a future post, we will look at creating more specific Diamonds for each intrusion event. 

The Diamond Model is “…purposefully generic and thereby expandable and flexible. It accurately captures the essential concepts of intrusion analysis and adversary operations. These attributes enhance the model’s utility, allowing it to grow and encompass new ideas and concepts.”¹

![Cyber threat intelligence diamond model of intrusion analysis](the-diamond-model.png)
*Diamond model of intrusion analysis*

That expand-ability and flexibility make the Diamond Model a great framework when an intrusion or incident is moving quickly. It provides 4 buckets to organize indicators or behaviors of suspicious nature. Such broad categories can also cause for confusion if there are multiple phases that utilize different or contradictory tradecraft. The Diamond Model does have the ability to scale up and down in technicality depending on what the analyst needs, as referenced above.

A brief example of a fast moving intrusion where a broader Diamond Model implementation may be useful could look like a phishing email. You as an analyst can add “phishing” as a capability. You can add the recipient address under “Target,” and the sender under “Adversary.” The IP address for the sender would go under “Infrastructure,” but when you find the region of the IP, that could be added to “Adversary”. Your intrusion mapping is already starting to take shape!

The Diamond Model’s shape plays an important role in showing synergies between the endpoints. Each side represents a relationship.

![Cyber threat intelligence diamond model of intrusion analysis with labeled sides showing relationships between nodes](the-diamond-model-with-side-labels.png)

These relationships are what help drive analytical pivoting. Knowing how the vertices interact allows an analyst to utilize the relationships to discover new knowledge of malicious activity.

The phishing example above demonstrates pivoting: The adversary developed the phishing email, exploiting the target. We used logs to find the IP infrastructure the adversary used to connect to the target. The source of that IP can be adversary related or further intel on the infrastructure architecture. 

Lastly, when you get stuck and can’t find a way to move forward in the investigation, you can use each point (as well as “social-political” and “technology”) to be the lens through which you pivot. This is the practice of saying “I know this fact about the [insert pivot point]. What else can I gather from that fact?” For example, Infrastructure-centered pivoting may start with a known malicious domain. From there, an analyst can look at the DNS/WHOIS data, find related domains, and possibly link them to other malware campaigns.

### MGM Intrusion Mapping

The MGM intrusion made a ton of headlines in 2023. In less than 10 minutes on the phone with an MGM employee, attackers were inside systems. Gleaning from what is publicly known, it seems that the outage was a combination of MGM’s defensive measures to shutdown Okta sync servers, network domains, etc. as well as the ransomware deployed by Scattered Spider. 


![Cyber threat intelligence diamond model of intrusion analysis with labeled sides showing relationships between nodes and MGM TTPs and actors](the-diamond-model-for-mgm.png)

**Adversary**

This is fairly easy to assess with what OSINT is available. ALPHV made a public statement on their site correcting inaccurate reports of the intrusion.

**Infrastructure**

LinkedIn was used during Reconnaissance to gather information about an MGM employee. They used this information, some sources say they were even able to obtain and employee ID number, to credibly impersonate the employee on the phone with MGM IT.

The attackers gained administrator / super-administrator privileges in MGM’s Okta tenant. They apparently used Okta Sync / Okta Agent servers for credential harvesting. For example, sniffing passwords of people whose passwords couldn’t be cracked from domain controller hash dumps.  Once MGM realized this, they defensively took Okta Sync servers and some Okta-related infrastructure offline to try to eradicate the threat. 

The attackers, after obtaining Okta super-admin rights, also gained admin privileges in MGM’s Azure tenant. This allowed further lateral movement, access to cloud identity, possibly access to virtual machines in Azure.

The ransomware was deployed on ~100 ESXi hypervisors in MGM’s network. Those ESXi hosts hosted thousands of virtual machines, which in turn supported many of MGM’s hospitality-systems: slot machines, digital room keys, reservation systems, websites, etc. Encrypting/changing accessibility on those caused those systems to fail or stop working.

The phone system was used to voice phish the MGM service desk employee. As it was successful, we could hypothesize that possibly Scattered Spider knew that MGM’s standard operating procedure for over-the-phone credential assistance was more/more easily exploitable than other initial access vectors.  Or it could have been that they knew vishing was a strong suit as most of the actors were also English speaking. Whatever the reason, using telephones as part of their infrastructure proved a shrewd decision.

**Target**

MGM resorts as well as Caesar’s were targets of this campaign. Caesar’s, however, decided to work with the cyber criminals in a way that did not result in any downtime. MGM’s outage caused $100 million dollars lost during that quarter.

If you use the traditional word for this vertex, “Victim,” there were other proxy victims. The employee that had their identity stolen likely had to rotate credentials, get a new badge and ID number, find out how and where they got the information, and possibly risk further exploitation.

The IT professional that took the phone call may have lost their job or was reprimanded.

### Conclusion

The Diamond Model doesn’t just help us document what happened during an intrusion, it gives us a framework to think critically about how adversaries operate, why they succeed, and where defenders can intervene. Mapping Scattered Spider’s attack on MGM Resorts shows how quickly social engineering, identity infrastructure, and ransomware can converge into a major business outage. By applying structured models like the Diamond, CTI analysts can turn chaos into clarity, identify defensive opportunities, and ultimately make future intrusions less costly and disruptive.

References

    Caltagirone, S., Pendergast, A., & Betz, C. (2013). The Diamond Model of Intrusion Analysis. Center for Cyber Intelligence Analysis and Threat Research.