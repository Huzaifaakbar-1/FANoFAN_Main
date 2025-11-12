tab = [
    {
        td_1: "1",
        td_2: "Identity and Contact Information",
        td_3_ul_1: "Name",
        td_3_ul_2: "Phone number",
        td_3_ul_3: "Email",
        td_3_ul_4: "Postal address",
        td_3_ul_5: "Date of birth",
        td_4: "Mandatory for service provision",
        td_5_ul_1: "Account creation",
        td_5_ul_2: "Communication",
        td_5_ul_3: "Account creation",
        td_5_ul_4: "Identity verification",
        td_6: "Access to CGCEL services, <br> account management, <br> and personalized suppor",
    },
    {
        td_1: "2",
        td_2: "Transaction and Payment Data",
        td_3_ul_1: "Payment method details",
        td_3_ul_2: "Transaction history",
        td_3_ul_3: "Email",
        td_3_ul_4: "Postal address",
        td_3_ul_5: "Date of birth",
        td_4: "Mandatory for purchases",
        td_5_ul_1: "Order processing",
        td_5_ul_2: "Fraud prevention",
        td_5_ul_3: "Financial reporting",
        td_5_ul_4: "Identity verification",
        td_6: "Product purchase, billing, <br> and order fulfilment",
    },
    {
        td_1: "3",
        td_2: "Device and Technical Data",
        td_3_ul_1: "IP address",
        td_3_ul_2: "Browser type",
        td_3_ul_3: "Device identifiers",
        td_3_ul_4: "Log files",
        td_3_ul_5: "Automatically collected",
        td_4: "Website functionality",
        td_5_ul_1: "Security",
        td_5_ul_2: "Analytics",
        td_5_ul_3: "Ensuring secure platform usage and service optimization",
        td_6: "Platform protection, analytics, and performance improvement",
    },
    {
        td_1: "4",
        td_2: "Usage Data",
        td_3_ul_1: "Interaction with our website/app",
        td_3_ul_2: "Preferences",
        td_3_ul_3: "Feedback",
        td_4: "Optional, user-provided",
        td_5_ul_1: "Service improvement",
        td_5_ul_2: "Personalization",
        td_5_ul_3: "Analytics",
        td_6: "Enhanced user experience and tailored content",
    },
    {
        td_1: "5",
        td_2: "Marketing Preferences",
        td_3_ul_1: "Subscription status",
        td_3_ul_2: "Marketing opt-ins",
        td_4: "Optional, based on consent",
        td_5_ul_1: "Sending promotional content (only with explicit consent)",
        td_5_ul_2: "Providing offers, updates, and promotional content",
        td_6: "Marketing communication and engagement",
    },
    {
        td_1: "6",
        td_2: "Location Data (if applicable)",
        td_3_ul_1: "Approximate location (based on IP or GPS, if enabled)",
        td_4: "Optional, user-controlled",
        td_5_ul_1: "Localization of services",
        td_5_ul_2: "Fraud detection",
        td_5_ul_3: "Regional service customization and fraud monitoring",
        td_6: "Location-based services and protection",
    },
    {
        td_1: "7",
        td_2: "Cookies and Tracking Data",
        td_3_ul_1: "Session cookies",
        td_3_ul_2: "Persistent cookies",
        td_3_ul_3: "Tracking pixels",
        td_3_ul_4: "Analytics data",
        td_4: "Optional, based on preferences",
        td_5_ul_1: "Site performance",
        td_5_ul_2: "User experience enhancement",
        td_5_ul_3: "Marketing optimization",
        td_5_ul_4: "Personalized browsing experience and marketing analytics",
        td_6: "Website optimization, analytics, and marketing insights",
    },
    // IoT Device Specific
    {
        td_1: "IoT 1",
        td_2: "Device Information",
        td_3_ul_1: "Device ID",
        td_3_ul_2: "Model",
        td_3_ul_3: "Software version",
        td_3_ul_4: "IP address",
        td_4: "Mandatory for device functionality",
        td_5_ul_1: "Ensuring functionality",
        td_5_ul_2: "Troubleshooting and updates",
        td_6: "Device management, software updates, and support",
    },
    {
        td_1: "IoT 2",
        td_2: "Usage Data",
        td_3_ul_1: "Interaction logs",
        td_3_ul_2: "Feature usage",
        td_3_ul_3: "Error reports",
        td_4: "Automatically collected",
        td_5_ul_1: "Performance optimization and analytics",
        td_6: "Enhancing device performance and resolving technical issues",
    },
    {
        td_1: "IoT 3",
        td_2: "Location Data (if applicable)",
        td_3_ul_1: "Approximate device location (with user permission)",
        td_4: "Optional, user-controlled",
        td_5_ul_1: "Personalization and security enhancements",
        td_6: "Geolocation-based features and enhanced security measures",
    },
    {
        td_1: "IoT 4",
        td_2: "Children’s Data (if applicable)",
        td_3_ul_1: "Name",
        td_3_ul_2: "Age",
        td_3_ul_3: "Linked device details",
        td_3_ul_4: "Parental contact",
        td_4: "Mandatory for child users, with parental consent",
        td_5_ul_1: "User registration and access to services",
        td_5_ul_2: "Child-friendly features, parental controls, and compliant service access",
        td_6: "Compliance and safe digital participation for children",
    }

]
for (tabl = 0; tabl < tab.length; tabl++) {
    document.getElementById("table_data").innerHTML += `
       <tr class="">
                    <td class="border-2 p-2  border-gray-200 ">${tab[tabl].td_1}</td>
                    <td class="border-2 p-2 border-gray-200">${tab[tabl].td_2}</td>
                    <td class="border-2 p-2 border-gray-200">
                        <ul class="list-disc pl-6">
                            <li>${tab[tabl].td_3_ul_1}</li>
                            <li>${tab[tabl].td_3_ul_2}</li>
                            <li>${tab[tabl].td_3_ul_3}</li>
                            <li>${tab[tabl].td_3_ul_4}</li>
                            <li>${tab[tabl].td_3_ul_5}</li>
                        </ul>
                    </td>
                    <td class="border-2 p-2 border-gray-200">${tab[tabl].td_4}</td>
                    <td class="border-2 p-2 border-gray-200">
                        <ul class="list-disc pl-6">
                            <li>${tab[tabl].td_5_ul_1}</li>
                            <li>${tab[tabl].td_5_ul_2}</li>
                            <li>${tab[tabl].td_5_ul_3}</li>
                        </ul>
                    </td>
                    <td class="border-2 p-2 border-gray-200">${tab[tabl].td_6}</td>
                </tr>
    `
}