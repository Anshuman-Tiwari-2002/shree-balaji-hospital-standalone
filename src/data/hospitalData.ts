export const hospitalInfo = {
  name: "Shree Balaji Life Line Hospital",
  hindiName: "श्री बालाजी लाइफ लाइन हॉस्पिटल",
  type: "Private Multi-Speciality Hospital",
  registration: {
    date: "11 September 2023",
    number: "RMEE2447871",
    certificateNo: "CMEE24109689",
    validTill: "30/04/2026",
    issuedBy: "Office of the Chief Medical Officer, Gautam Buddha Nagar, Govt of UP"
  },
  contact: {
    address: "Plot No-1, Gali No-1, Unnati Vihar Sec 123, Noida, G.B Nagar – 201304",
    phone: "0120-6909583",
    mobile: "9310726962",
    email: "shreebalajilifelinehosptial@gmail.com"
  },
  details: {
    timings: "24×7",
    totalBeds: 18
  },
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.5!2d77.41423!3d28.60072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefbd512cb4a1%3A0xe3da3c96c417f958!2sShri%20Balaji%20Life%20Line%20Hospital!5e0!3m2!1sen!2sin!4v1719852000000!5m2!1sen!2sin",
  mapsLink: "https://maps.app.goo.gl/7xftPcTPqb3NYnJx8"
};

export const doctors = [
  { id: "1", name: "Dr. Rajesh Sharma", qualification: "MBBS", specialization: "General Medicine", schedule: "Available (Part Time)" },
  { id: "2", name: "Dr. Ashok Kumar Verma", qualification: "MBBS, MS", specialization: "General Surgery", schedule: "On Call" },
  { id: "3", name: "Dr. B.P. Gupta", qualification: "MBBS, MS", specialization: "General Surgery", schedule: "On Call" },
  { id: "4", name: "Dr. Sonia Patel", qualification: "MBBS", specialization: "Gynaecology & Obstetrics", schedule: "On Call" },
  { id: "5", name: "Dr. Deepmala Singh", qualification: "BHMS", specialization: "General Medicine", schedule: "8:00 AM – 2:00 PM" },
  { id: "6", name: "Dr. Abhishek", qualification: "MBBS, UPMC (Ex-CRPF Officer)", specialization: "General Medicine", schedule: "2:00 PM – 6:00 PM" },
  { id: "7", name: "Dr. Piyush", qualification: "MBBS, DMC", specialization: "General Medicine", schedule: "6:00 PM – 10:00 PM" }
];

export const departments = [
  { id: "general-medicine", name: "General Medicine & Surgery", description: "Comprehensive care for adult diseases and surgical interventions.", icon: "Stethoscope" },
  { id: "orthopaedics", name: "Orthopaedics & Trauma Care", description: "Expert treatment for bone, joint, and trauma-related conditions.", icon: "Bone" },
  { id: "gynaecology", name: "Gynaecology & Obstetrics", description: "Specialized care for women's health, maternity, and reproductive well-being.", icon: "Baby" },
  { id: "paediatrics", name: "Paediatrics", description: "Dedicated child healthcare services, including an advanced NICU.", icon: "Smile" },
  { id: "cardiology", name: "Cardiology (Non-Invasive)", description: "Heart care, diagnostics, and non-invasive cardiovascular treatments.", icon: "HeartPulse" },
  { id: "nephrology", name: "Nephrology & Dialysis", description: "Advanced kidney care and state-of-the-art dialysis facilities.", icon: "Activity" },
  { id: "critical-care", name: "Critical Care & ICU", description: "24/7 intensive monitoring and life support for critically ill patients.", icon: "MonitorPlay" },
  { id: "ent", name: "ENT", description: "Diagnosis and treatment of ear, nose, and throat disorders.", icon: "Ear" },
  { id: "neurology", name: "Neurology", description: "Specialized treatment for disorders of the nervous system.", icon: "Brain" },
  { id: "emergency", name: "Emergency & Trauma Care", description: "Rapid response and trauma care available round-the-clock.", icon: "Ambulance" },
  { id: "radiology", name: "Radiology", description: "Advanced imaging including Ultrasound and Digital X-Ray.", icon: "Scan" },
  { id: "pathology", name: "Pathology Laboratory", description: "Accurate and timely diagnostic laboratory services.", icon: "TestTube" },
  { id: "pharmacy", name: "Pharmacy", description: "On-site, well-stocked pharmacy for all your medication needs.", icon: "Pill" }
];

export const facilities = [
  { name: "Deluxe & General Wards", description: "A/C rooms, clean & peaceful environment" },
  { name: "NICU", description: "Neonatal Intensive Care Unit" },
  { name: "ICU & HDU", description: "Intensive Care & High Dependency Units" },
  { name: "Operation Theatre (OT)", description: "Multi-specialty capable surgical suites" },
  { name: "OPD Cabin", description: "Comfortable outpatient consultation rooms" },
  { name: "Reception", description: "Welcoming and efficient patient registration" },
  { name: "Pharmacy", description: "On-site 24/7 medicine availability" },
  { name: "Diagnostics", description: "Pathology Lab + Radiology (Ultrasound, Digital X-Ray, ECG)" },
  { name: "24/7 Ambulance", description: "Rapid response emergency transport" },
  { name: "Oxygen Plant", description: "On-site medical oxygen generation" },
  { name: "Fire Safety Plant", description: "Comprehensive safety infrastructure" },
  { name: "Green Garden", description: "Peaceful outdoor area for recovery" },
  { name: "Hospital Software", description: "Marg (medicine billing) + Digit 24 (patient registration)" },
  { name: "Power Backup", description: "24×7 electricity with generator backup" }
];
