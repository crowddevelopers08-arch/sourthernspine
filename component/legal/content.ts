// Shared content for the legal pages of both landing pages ("/" and "/generic").
// Review with the clinic before publishing – these are sensible defaults, not legal advice.

export type LegalSection = { title: string; text: string | string[] };

export const termsSections: LegalSection[] = [
  {
    title: "About these terms",
    text: "These terms apply when you use this website or book a consultation with Southern Spine, Hyderabad, through the website, by phone, or in person. By using the website or booking a visit, you agree to these terms. If you do not agree, please do not use the website.",
  },
  {
    title: "Our services",
    text: "Southern Spine provides chiropractic, physiotherapy, osteopathy and related musculoskeletal care at our clinics in Jubilee Hills and Chikkadpally, Hyderabad, and, where offered, home physiotherapy. Information on this website is general and is not a substitute for a medical consultation, diagnosis or emergency care.",
  },
  {
    title: "Appointments and enquiries",
    text: [
      "Submitting an enquiry or booking form does not confirm an appointment. Our team will contact you to confirm the date and time of your visit.",
      "Please give accurate contact details so we can reach you. We may need to reschedule if we cannot confirm your booking.",
      "Please arrive on time. If you arrive late, your session may be shortened or rescheduled so other patients are not delayed.",
    ],
  },
  {
    title: "Consultation fee and pricing",
    text: [
      "The consultation and spinal assessment is offered at ₹499 unless a different price is communicated to you before your visit.",
      "Treatment plans, session packages and their prices are explained to you after your assessment, before any treatment begins. You decide whether to go ahead.",
      "Where flexible payment plans are offered, their terms will be shared with you in writing before you agree to them.",
      "Prices and offers shown on the website may change. The price confirmed at the time of booking applies to that booking.",
    ],
  },
  {
    title: "Assessment, treatment and consent",
    text: [
      "Treatment is recommended only after a consultation and assessment. Our clinicians will explain the proposed care, its expected benefits and any risks, and will ask for your consent before treating you.",
      "Please tell us about your medical history, medications, recent injuries, surgery, pregnancy or any other condition that may affect your care. You may ask questions or stop a treatment at any time.",
      "If our assessment shows that another type of care or a referral to a medical specialist is more suitable, we will advise you accordingly.",
    ],
  },
  {
    title: "No guarantee of results",
    text: "Every person responds differently to care. Results vary from person to person, and we cannot guarantee a specific outcome or recovery time. Testimonials and examples on this website reflect individual experiences.",
  },
  {
    title: "Your responsibilities",
    text: "Please follow the home-care advice and exercises recommended to you, attend scheduled sessions or let us know in good time if you cannot, and treat our staff and other patients with respect. We may decline or discontinue care where this is not followed or where continuing would not be in your interest.",
  },
  {
    title: "Website use and content",
    text: "The content, images, videos and logos on this website belong to Southern Spine or are used with permission. You may view them for personal use but may not copy, reproduce or use them commercially without our written permission. Do not misuse the website, including by submitting false information or attempting to interfere with its operation.",
  },
  {
    title: "Third-party services and links",
    text: "This website may display or link to third-party services such as YouTube, Google Maps and Google reviews. These services are governed by their own terms and privacy policies, and we are not responsible for their content or availability.",
  },
  {
    title: "Limitation of liability",
    text: "To the extent permitted by law, Southern Spine is not liable for any indirect or consequential loss arising from the use of this website or reliance on its general information. Nothing in these terms limits any rights you have under applicable consumer protection law.",
  },
  {
    title: "Changes and governing law",
    text: "We may update these terms from time to time; the latest version will appear on this page with a revised date. These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts in Hyderabad, Telangana.",
  },
];

export const refundSections: LegalSection[] = [
  {
    title: "Overview",
    text: "This policy explains how you can reschedule or cancel an appointment with Southern Spine, Hyderabad, and when a refund applies. It covers the consultation and spinal assessment, treatment sessions and session packages, and home physiotherapy visits.",
  },
  {
    title: "Rescheduling an appointment",
    text: [
      "You can reschedule an appointment free of charge by calling us at least 24 hours before your scheduled time.",
      "Requests made with less than 24 hours’ notice will be accommodated where a slot is available.",
    ],
  },
  {
    title: "Cancelling an appointment",
    text: [
      "To cancel, please call +91 94641 08108 or email info@southernspine.co.in, ideally at least 24 hours before your appointment.",
      "If you do not attend a booked appointment without letting us know (a no-show), any advance payment for that appointment may not be refundable.",
    ],
  },
  {
    title: "Consultation fee (₹499)",
    text: [
      "If you paid the consultation fee in advance and cancel at least 24 hours before your appointment, you can choose a full refund or move the payment to a new appointment.",
      "Once the consultation and assessment has taken place, the consultation fee is not refundable.",
      "If you pay at the clinic on the day of your visit, no payment is taken for a cancelled appointment.",
    ],
  },
  {
    title: "Treatment sessions and packages",
    text: [
      "Payment for a treatment session that has been delivered is not refundable.",
      "If you purchased a session package and wish to stop, please contact us. Unused, prepaid sessions may be refunded or adjusted based on the package terms shared with you at the time of purchase, after accounting for sessions already used.",
      "Where a payment plan applies, any adjustment will follow the plan terms you agreed to.",
    ],
  },
  {
    title: "If we cancel or reschedule",
    text: "If Southern Spine needs to cancel or reschedule your appointment, for example due to clinician unavailability, we will contact you as early as possible and offer a new time. If you prefer not to rebook, any advance payment for that appointment will be refunded in full.",
  },
  {
    title: "How refunds are processed",
    text: [
      "Approved refunds are made to the original payment method, or by bank transfer or UPI where the original method cannot be used.",
      "Refunds are typically initiated within 7 working days of approval. The time taken to reach your account depends on your bank or payment provider.",
      "Please keep your payment receipt, as we may need it to process your request.",
    ],
  },
  {
    title: "How to request a refund",
    text: "Contact us by phone or email with your name, phone number, appointment date and payment details. We will review your request and confirm the outcome with you.",
  },
];
