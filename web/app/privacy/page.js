import Link from "next/link";
import { siteInfo } from "@/lib/content";

export const metadata = {
  title: 'Privacy Policy | SoulCare by Monika Arora',
  description: 'Read the SoulCare privacy policy to understand how personal information is collected, used, protected, and handled during counselling services.',
  alternates: {
    canonical: '/privacy',
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#FAF9F6] font-body text-[#545D52] min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section className="pt-24 pb-12 px-6 md:px-8 max-w-4xl mx-auto text-center">
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4">
          Privacy & Confidentiality
        </h4>
        <h1 className="text-3xl md:text-4xl font-heading text-[#3E4A3D] mb-6">
          Privacy Policy
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-[#6A80A6] max-w-2xl mx-auto">
          Your privacy matters. This page explains how SoulCare handles information shared through our website and counselling services.
        </p>
      </section>

      {/* 2. PRIVACY POLICY CONTENT */}
      <section className="pb-24 px-6 md:px-8">
        <div className="max-w-[800px] mx-auto bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-sm border border-[#EFEFEF]">
          
          <p className="text-sm font-bold text-[#6A80A6] mb-10">
            Effective Date: [DATE]
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6">
            At SoulCare by Monika Arora, your privacy, trust, and confidentiality are important to us. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, contact us, or use our counselling services.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            By using this website, you acknowledge the practices described in this Privacy Policy.
          </p>

          <div className="space-y-16">
            
            {/* SECTION 1 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">01</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  We may collect information that you voluntarily provide when you contact SoulCare, enquire about counselling, request an appointment, or submit information through our website.
                </p>
                <p>This may include:</p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Preferred mode of counselling</li>
                  <li>Information provided in appointment or enquiry forms</li>
                  <li>Information you voluntarily share about your concerns or counselling needs</li>
                </ul>
                <p className="mt-6">
                  We may also automatically collect limited technical information when you visit the website, such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Browser and device information</li>
                  <li>IP address</li>
                  <li>Pages visited</li>
                  <li>Date and time of access</li>
                  <li>Website usage and analytics information</li>
                </ul>
                <p className="mt-6 font-medium">
                  We only collect information that is reasonably necessary for the purposes described in this policy.
                </p>
              </div>
            </div>

            {/* SECTION 2 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">02</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>Information you provide may be used to:</p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Respond to your enquiries</li>
                  <li>Schedule and manage counselling appointments</li>
                  <li>Communicate with you regarding sessions</li>
                  <li>Provide and manage counselling services</li>
                  <li>Improve our website and user experience</li>
                  <li>Understand website usage and performance</li>
                  <li>Maintain appropriate professional and administrative records</li>
                  <li>Meet applicable legal or professional obligations</li>
                  <li>Protect the security of our website and services</li>
                </ul>
                <p className="mt-8 text-lg font-bold text-[#3E4A3D] bg-[#FDFCFB] p-4 rounded-md border border-[#EFEFEF]">
                  We do not sell or rent your personal information to third parties.
                </p>
              </div>
            </div>

            {/* SECTION 3 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">03</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Counselling Confidentiality</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>We understand that counselling involves sharing personal and sensitive information.</p>
                <p>
                  Information shared during counselling is treated with confidentiality and handled in accordance with applicable professional, ethical, and legal requirements.
                </p>
                <p>
                  However, confidentiality may have limits where disclosure is required or permitted by applicable law, including circumstances involving a serious and immediate risk of harm to you or another person, or where disclosure is required by a legal authority.
                </p>
              </div>
            </div>

            {/* SECTION 4 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">04</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Online Counselling</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>SoulCare may provide counselling sessions online.</p>
                <p>
                  When using online counselling services, information may be transmitted through third-party communication or scheduling platforms. While reasonable steps are taken to protect your privacy, no internet-based communication system can guarantee complete security.
                </p>
                <p>
                  Clients are encouraged to participate in online sessions from a private and secure environment.
                </p>
              </div>
            </div>

            {/* SECTION 5 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">05</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Cookies & Analytics</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Our website may use cookies and similar technologies to understand website usage, improve functionality, and enhance your experience.
                </p>
                <p>
                  Analytics tools may collect non-identifying information such as pages visited, approximate usage patterns, device information, and referral sources.
                </p>
                <p>
                  You can control or disable cookies through your browser settings. Some website functionality may be affected if cookies are disabled.
                </p>
              </div>
            </div>

            {/* SECTION 6 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">06</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Third-Party Services</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>SoulCare may use trusted third-party services for purposes such as:</p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Website hosting</li>
                  <li>Appointment scheduling</li>
                  <li>Email communication</li>
                  <li>Online forms</li>
                  <li>Analytics</li>
                  <li>Website security and performance</li>
                </ul>
                <p className="mt-6">
                  These services may process information necessary to provide their respective functions.
                </p>
                <p>
                  Where third-party services are used, their own privacy policies and terms may also apply.
                </p>
              </div>
            </div>

            {/* SECTION 7 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">07</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Data Security</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  We take reasonable administrative and technical measures to protect personal information from unauthorized access, misuse, alteration, disclosure, or loss.
                </p>
                <p>
                  However, no method of electronic storage or transmission over the internet can be guaranteed to be completely secure.
                </p>
              </div>
            </div>

            {/* SECTION 8 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">08</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Data Retention</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  We retain information only for as long as reasonably necessary for the purposes for which it was collected, including:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Providing counselling services</li>
                  <li>Managing appointments and communications</li>
                  <li>Maintaining appropriate professional records</li>
                  <li>Meeting applicable legal, ethical, and professional obligations</li>
                  <li>Resolving disputes or protecting our legitimate interests</li>
                </ul>
                <p className="mt-6">
                  The period for which information is retained may vary depending on the type and purpose of the information.
                </p>
              </div>
            </div>

            {/* SECTION 9 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">09</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Depending on applicable law, you may have rights relating to your personal information, including the ability to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#6A80A6]">
                  <li>Request access to information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion where applicable</li>
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Ask questions about how your information is being handled</li>
                </ul>
                <p className="mt-6 font-medium">
                  To make a privacy-related request, please contact us using the details provided below.
                </p>
              </div>
            </div>

            {/* SECTION 10 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">10</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Children & Adolescents</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  SoulCare may provide counselling support to children and adolescents where appropriate.
                </p>
                <p>
                  For counselling involving a child or adolescent, appropriate consideration is given to the young person's privacy, safety, developmental needs, and the involvement or consent of a parent or legal guardian where required.
                </p>
                <p>
                  Information relating to children and adolescents is handled with appropriate care and in accordance with applicable professional, ethical, and legal requirements.
                </p>
                <p>
                  Where applicable, parents or legal guardians may be involved in the counselling process while respecting the young person's need for an appropriate level of privacy and a safe therapeutic environment.
                </p>
                <p>
                  The exact nature of parent or guardian involvement may depend on the individual's age, circumstances, safety considerations, and applicable requirements.
                </p>
              </div>
            </div>

            {/* SECTION 11 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">11</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">External Links</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Our website may contain links to external websites or services.
                </p>
                <p>
                  SoulCare is not responsible for the privacy practices, security, or content of third-party websites. We encourage you to review the privacy policy of any external website before providing personal information.
                </p>
              </div>
            </div>

            {/* SECTION 12 */}
            <div>
              <div className="mb-6">
                <span className="text-[#D4A373] text-sm font-bold tracking-widest block mb-2">12</span>
                <h2 className="text-2xl font-heading text-[#3E4A3D]">Changes to This Privacy Policy</h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  This Privacy Policy may be updated from time to time to reflect changes in our services, website practices, or applicable requirements.
                </p>
                <p>
                  Any updated version will be published on this page with a revised Effective Date.
                </p>
              </div>
            </div>
            
          </div>
          
          {/* CONTACT SECTION */}
          <div className="mt-20 pt-16 border-t border-[#EFEFEF] text-center">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#6A80A6] mb-4">
              Questions About Privacy?
            </h4>
            <h2 className="text-2xl md:text-3xl font-heading text-[#3E4A3D] mb-6">
              We're here if you have questions.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#6A80A6] max-w-2xl mx-auto mb-10">
              If you have questions about this Privacy Policy or how your information is handled, please contact SoulCare.
            </p>
            
            <div className="bg-[#FAF9F6] p-8 md:p-10 rounded-lg inline-block text-left w-full max-w-lg mx-auto">
              <div className="mb-6">
                <p className="font-heading text-xl text-[#3E4A3D]">SoulCare by Monika Arora</p>
                <p className="text-sm font-bold tracking-widest uppercase text-[#D4A373] mt-1">Counselling Psychologist</p>
              </div>
              
              <div className="space-y-6 text-base text-[#545D52]">
                <div>
                  <p className="font-bold text-[#3E4A3D]">In-person sessions:</p>
                  <p>Race Course, Dehradun</p>
                </div>
                <div>
                  <p className="font-bold text-[#3E4A3D]">Online counselling:</p>
                  <p>Available in India and abroad</p>
                </div>
                <div>
                  <p className="font-bold text-[#3E4A3D]">Email:</p>
                  <p>info@soulcarebymonika.com</p>
                </div>
                <div>
                  <p className="font-bold text-[#3E4A3D]">Phone:</p>
                  <p>+91 70171 78277</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                href="/book-a-session"
                className="inline-block px-10 py-4 bg-[#6A80A6] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-[#3E4A3D] rounded-md shadow-sm hover:shadow-md"
              >
                Contact SoulCare
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
