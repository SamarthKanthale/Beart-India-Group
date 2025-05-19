'use client'; 

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from 'react';

export default function DisclaimerPage() {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentDate(new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);


  return (
    <div className="container mx-auto flex-grow py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <Card className="w-full max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-500 border-0 shadow-none">
        <CardHeader className="text-left">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold animate-in fade-in slide-in-from-top-8 duration-700">Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 prose prose-sm sm:prose-base lg:prose-lg max-w-none mx-auto text-muted-foreground p-6 text-left">
          <p className="leading-relaxed mb-4 text-left">
             {isMounted && currentDate ? `Last updated: ${currentDate}` : 'Loading date...'}
          </p>
           <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2 text-foreground">Disclaimer – Beart India Group and Beart India Investment Solutions</h2>
            <p className="leading-relaxed mb-4">
              By accessing any content on BeartIndia.com or any of its associate/group websites, including Beart India Investment Solutions, you confirm that you have read, understood, and agree to be legally bound by the terms of this disclaimer and the associated user agreement.
            </p>
             <p className="leading-relaxed mb-4">
               Beart India Group and its associate companies have taken reasonable care in compiling the information provided on their websites. However, the views, opinions, or investment tips shared by external experts, contributors, or users are solely their own and do not reflect those of Beart India Group or Beart India Investment Solutions. We strongly advise users to consult SEBI-registered financial advisors or certified experts before making any investment decisions.
             </p>
            <p className="leading-relaxed mb-4">
              While we strive for accuracy, Beart India Group and its affiliates make no representations or warranties, express or implied, about the adequacy, completeness, or correctness of any information provided. We shall not be liable for any loss or damage arising from errors, omissions, or outcomes resulting from the use of the information presented.
            </p>
            <p className="leading-relaxed mb-4">
              We do not accept responsibility for the accuracy of content or advertisements placed on our platforms by third parties. All advertisers are responsible for ensuring their material complies with legal requirements. Beart India Group and its associates do not endorse or guarantee any products, services, or claims made in such advertising material.
            </p>
            <p className="leading-relaxed mb-4">
              Content on our websites, including articles and educational resources, may include user-contributed material or third-party inputs. Beart India Group and Beart India Investment Solutions are not responsible for the accuracy or reliability of such content. We do not guarantee that our site is free from viruses or other harmful components and disclaim any liability related to such issues.
            </p>
            <p className="leading-relaxed mb-4">
              BeartIndia.com and its associate platforms may include links to external websites. These are provided for user convenience only. We do not endorse, control, or guarantee the content on such external sites and disclaim all responsibility for them.
            </p>
            <p className="leading-relaxed mb-4">
              There are inherent risks in using internet-based investment information or SMS/email services. Technical failures may occur due to issues beyond our control (e.g., network downtime, device incompatibility), and Beart India Group or Beart India Investment Solutions cannot be held liable for delays or non-delivery of such services.
            </p>
            <p className="leading-relaxed mb-4">
              Stock trading and investment activities are inherently risky. Users are solely responsible for their trading decisions, including the risk of loss of capital. Any information, content, comments, or posts shared on our platforms—whether by Beart India Group, Beart India Investment Solutions, or any of their employees or users—are strictly for educational and informational purposes. They should not be construed as investment advice, offers to buy/sell securities, or recommendations. We do not hold licenses to provide personalized financial advice or portfolio management services.
            </p>
            <p className="leading-relaxed mb-4">
              You are encouraged to seek guidance from licensed professionals and registered investment advisors before making any financial decisions. Hypothetical or back-tested performance results shown are not indicative of actual performance, and no representation is made that any account will achieve profits or similar outcomes.
            </p>
            <p className="leading-relaxed mb-4">
              Beart India Group and its affiliates may feature real-time discussions, blog posts, or forums. We bear no responsibility for the content or consequences of these communications. Users engage at their own risk and discretion.
            </p>
            <p className="leading-relaxed mb-4">
              Beart India Group, Beart India Investment Solutions, their management, and employees disclaim all liabilities for the use of any information presented on our platforms. The information shared is meant to assist users in conducting their own research and forming independent investment opinions. It should not be relied upon solely for making financial or trading decisions.
            </p>
            <p className="leading-relaxed mb-4">
              We expressly disclaim any and all warranties, expressed or implied, with respect to any materials, content, or services on our platforms. Access to our websites is intended primarily for users located in India. We are governed by the laws of India and subject to the exclusive jurisdiction of the courts in Pune, Maharashtra. If you do not agree with any part of this disclaimer, you are advised not to use our website or services.
            </p>
             <p className="leading-relaxed mt-6">
                All materials on our website are protected by copyright laws and remain the property of Beart India Group.
           </p>
        </CardContent>
      </Card>
    </div>
  );
}

