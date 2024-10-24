import React from "react";
import { useNavigate } from 'react-router-dom';
import backicon from "../assets/back.png";

const TermsAndConditions = ({ theme }) => {
  const navigate = useNavigate();

  // Function to handle back button click
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page
  };
  return (
  <div className={`min-h-screen px-6 py-4 ${theme === 'dark' ? 'text-white' : 'text-[#222222]' } `}>
   
       <div className="container  mx-auto p-8 ">
      <div className=" flex flex-col md:flex-row ">
       {/* Back Button */}
       <button 
        className="pr-3 h-[40px] w-[85px] flex font-semibold bg-gray-200 text-gray-800 mt-20 p-2 rounded hover:bg-gray-300" 
        onClick={handleBackClick}
      >
        <img className="w-4 mr-2 mt-1" src={backicon} alt="" />     Back
      </button>
      <h1 className="text-3xl font-bold text-center md:ml-60 pt-20 mb-6">
        Vexaya's Terms and Conditions
      </h1>
      </div>
      <p>
        Welcome to{" "}
        <a href="http://www.vexaya.com" className="text-blue-500">
          www.vexaya.com
        </a>{" "}
        (with its subdomains, Content, Marks, and services, the “Site”). Please
        read the following Terms of Use carefully before using this Site so that
        you are aware of your legal rights and obligations with respect to
        Vexaya Technology Private Limited (“Vexaya“, “we“, “our” or “us“). By
        accessing or using the Site, you expressly acknowledge and agree that
        you are entering a legal agreement with us and have understood and agree
        to comply with, and be legally bound by, these Terms of Use, with the
        Privacy Policy (the “Terms“). You, hereby, waive any applicable rights
        to require an original (non-electronic) signature or delivery or
        retention of non-electronic records, to the extent not prohibited under
        applicable law. If you do not agree to be bound by these Terms, please
        do not access or use the Site.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">1. Changes to the Terms</h2>
      <p>
        We reserve the right, at our discretion, to change these Terms at any
        time. Such change will be effective twelve (12) days following posting
        of the revised Terms on the Site, and your continued use of the Site
        thereafter means that you accept those changes.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        2. Ability to Accept Terms
      </h2>
      <p>
        The Site is only intended for individuals aged thirteen (13) years or
        older. If you are under 13 years, please do not visit or use the Site.
        If you are between 13 and 18 years of age, you must review these Terms
        with your parent or guardian before visiting or using the Site to make
        sure that you and your parent or guardian understand these Terms and
        agree to them.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">3. Site Access</h2>
      <p>
        For such time as these Terms are in effect, we hereby grant you
        permission to visit and use the Site provided that you comply with these
        Terms and applicable law.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">4. Prohibited Actions</h2>
      <p>You shall not:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Copy, distribute or modify any part of the Site without our prior
          written authorization.
        </li>
        <li>
          Use, modify, create derivative works of, transfer, reproduce,
          distribute, display or disclose Content except as expressly authorized
          herein.
        </li>
        <li>Disrupt servers or networks connected to the Site.</li>
        <li>
          Use or launch any automated system (including "robots" or "spiders")
          to access the Site.
        </li>
        <li>
          Circumvent, disable or otherwise interfere with security-related
          features of the Site.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4">5. Account Creation</h2>
      <p>
        In order to use some of the services of the Site, you may have to create
        an account (“Account“). You agree not to create an Account for anyone
        else or use the account of another without their permission. When
        creating your Account, you must provide accurate and complete
        information. You are solely responsible for the activity that occurs in
        your Account, and you must keep your Account password secure. You must
        notify Vexaya immediately of any breach of security or unauthorized use
        of your Account.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">6. Payments to Vexaya</h2>
      <p>
        Except as expressly set forth in the Terms, your general right to access
        and use the Site is currently free, but Vexaya may in the future charge
        a fee for certain access or usage. You will not be charged unless you
        first agree to such charges,but please be aware that any failure to pay
        applicable charges may result in you not having access to some or all of
        the Site.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        7. Intellectual Property Rights
      </h2>
      <p>
        {/* The Content and Marks on the Site are the property of Vexaya and/or its licensors. Content on the Site is provided for your information and
        personal use only and may not be used without our prior written consent. */}
        Content and Marks. The (i) content on the Site, including without
        limitation, the text, documents, articles, brochures, descriptions,
        products, software, graphics, photos, sounds, videos, interactive
        features, and services (collectively, the “Content“), and (ii) the
        trademarks, service marks and logos contained therein (“Marks“), are the
        property of Vexaya and/or its licensors and may be protected by
        applicable copyright or other intellectual property laws and treaties.
        “Vexaya”, the Vexaya’s logo, and other marks are Marks of Vexaya or its
        affiliates. All other trademarks, service marks, and logos used on the
        Site are the trademarks, service marks, or logos of their respective
        owners. We reserve all rights not expressly granted in and to the Site
        and the Content. o Use of Content. Content on the Site is provided to
        you for your information and personal use only and may not be used,
        modified, copied, distributed, transmitted, broadcast, displayed, sold,
        licensed, de-compiled, or otherwise exploited for any other purposes
        whatsoever without our prior written consent. If you download or print a
        copy of the Content you must retain all copyright and other proprietary
        notices contained therein.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">8. Spam</h2>
      <p>
        You agree not to use the communications systems provided by the Site to
        send unauthorized commercial communications and will be responsible for
        any such unauthorized communications.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        9. Information Description
      </h2>
      <p>
        We attempt to be as accurate as possible. However, we cannot and do not
        warrant that the Content available on the Site is accurate, complete,
        reliable, current, or error-free. We reserve the right to make changes
        in or to the Content, or any part thereof, in our sole judgment, without
        the requirement of giving any notice prior to or after making such
        changes to the Content. Your use of the Content, or any part thereof, is
        made solely at your own risk and responsibility.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">10. Third-Party Websites</h2>
      <p>
        The Site may contain links, and may enable you to post content, to third
        party websites that are not owned or controlled by Vexaya. We are not
        affiliated with, have no control over, and assume no responsibility for
        the content, privacy policies, or practices of, any third party
        websites. You: (i) are solely responsible and liable for your use of and
        linking to third party websites and any content that you may send or
        post to a third party website; and (ii) expressly release Vexaya from
        any and all liability arising from your use of any third party website.
        Accordingly, we encourage you to read the terms and conditions and
        privacy policy of each third party website that you may choose to visit.
        o Vexaya permits you to link to the Site provided that: (i) you link to
        but do not replicate any page on this Site; (ii) the hyperlink text
        shall accurately describe the Content as it appears on the Site; (iii)
        you shall not misrepresent your relationship with Vexaya or present any
        false information about Vexaya and shall not imply in any way that we
        are endorsing any services or products, unless we have given you our
        express prior consent; (iv) you shall not link from a website (“Third
        Party Website”) which prohibites linking to third parties; (v) such
        Third party Website does not contain content that (a) is offensive or
        controversial (both at our discretion), or (b) infringes any
        intellectual property, privacy rights, or other rights of any person or
        entity; and/or (vi) you, and your website, comply with these Terms and
        applicable law.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">11. Privacy</h2>
      <p>
        We will use any personal information collected in connection with the
        Site in accordance with our privacy policy available at
        <a href="https://vexaya.com/privacy-policy/" className="text-blue-500">
          {" "}
          Privacy Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">12. Warranty Disclaimers</h2>
      <p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            This section applies whether or not the services provided under the
            Site are for payment. Applicable law may not allow the exclusion of
            certain warranties, so to that extent certain exclusions set forth
            herein may not apply.
          </li>
          <li>
            THE SITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, AND
            WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. Vexaya
            HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT
            NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS
            FOR A PARTICULAR PURPOSE, NON- INFRINGEMENT, AND THOSE ARISING BY
            STATUTE OR FROM A COURSE OF DEALING OR USAGE OF TRADE. Vexaya DOES
            NOT GUARANTEE THAT THE SITE WILL BE FREE OF BUGS, SECURITY BREACHES,
            OR VIRUS ATTACKS. THE SITE MAY OCCASIONALLY BE UNAVAILABLE FOR
            ROUTINE MAINTENANCE, UPGRADING, OR OTHER REASONS. YOU AGREE THAT
            Vexaya WILL NOT BE HELD RESPONSIBLE FOR ANY CONSEQUENCES TO YOU OR
            ANY THIRD PARTY THAT MAY RESULT FROM TECHNICAL PROBLEMS OF THE
            INTERNET, SLOW CONNECTIONS, TRAFFIC CONGESTION OR OVERLOAD OF OUR OR
            OTHER SERVERS. WE DO NOT WARRANT, ENDORSE OR GUARANTEE ANY CONTENT,
            PRODUCT, OR SERVICE THAT IS FEATURED OR ADVERTISED ON THE SITE BY A
            THIRD PARTY.
          </li>
          <li>
            Vexaya DOES NOT MAKE ANY REPRESENTATION OR WARRANTY WITH RESPECT TO,
            AND DISCLAIMS ALL LIABILITY FOR, ANY SUCH CONTENT.
          </li>
          <li>
            YOU SPECIFICALLY ACKNOWLEDGE THAT Vexaya SHALL NOT BE RESPONSIBLE
            FOR THE CONDUCT (INCLUDING DEFAMATORY, OFFENSIVE, ILLEGAL, OR
            NEGLIGENT CONDUCT) OF ANY SITE USER AND THAT THE RISK OF HARM OR
            DAMAGE FROM THE FOREGOING RESTS ENTIRELY WITH YOU.
          </li>
          <li>
            YOUR RELIANCE ON, OR USE OF, ANY CONTENT, OR INTERACTION WITH ANY
            SITE USER, IS AT YOUR SOLE RISK.
          </li>
          <li>
            EXCEPT AS EXPRESSLY STATED IN OUR PRIVACY POLICY, Vexaya DOES NOT
            MAKE ANY REPRESENTATIONS, WARRANTIES OR CONDITIONS OF ANY KIND,
            EXPRESS OR IMPLIED, AS TO THE SECURITY OF ANY INFORMATION YOU MAY
            PROVIDE OR ACTIVITIES YOU ENGAGE IN DURING THE COURSE OF YOUR USE OF
            THE SITE.
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        13. Limitation of Liability
      </h2>
      <p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            TO THE FULLEST EXTENT PERMISSIBLE BY LAW, VEXAYA SHALL NOT BE LIABLE
            FOR ANY DIRECT, INDIRECT, EXEMPLARY, SPECIAL, CONSEQUENTIAL, OR
            INCIDENTAL DAMAGES OF ANY KIND, OR FOR ANY LOSS OF DATA, REVENUE,
            PROFITS OR REPUTATION, ARISING UNDER THESE TERMS OR OUT OF YOUR USE
            OF, OR INABILITY TO USE, THE SITE, EVEN IF Vexaya HAS BEEN ADVISED
            OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES. Some jurisdictions do
            not allow the limitation or exclusion of liability for incidental or
            consequential damages, so the above limitations may not apply to
            you.
          </li>
          <li>
            IN NO EVENT SHALL THE AGGREGATE LIABILITY OF TADETACKS FOR ANY
            DAMAGES ARISING UNDER THESE TERMS OR OUT OF YOUR USE OF, OR
            INABILITY TO USE, THE SITE EXCEED THE TOTAL AMOUNT OF FEES, IF ANY,
            PAID BY YOU TO VEXAYAFOR USING THE SITE DURING THE THREE (3) MONTHS
            BEFORE BRINGING THE CLAIM.
          </li>
        </ul>
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">14. Indemnity</h2>
      <p>
        You agree to defend, indemnify and hold harmless Vexaya and our
        affiliates, and our respective officers, directors, employees and
        agents, from and against any and all claims, damages, obligations,
        losses, liabilities, costs and expenses (including but not limited to
        attorney’s fees) arising from: (i) your use of, or inability to use, the
        Site; (ii) ; or (ii) your violation of these Terms.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">15. Term and Termination</h2>
      <p>
        These Terms are effective until terminated by Vexaya or you. Vexaya, in
        its sole discretion, has the right to terminate these Terms and/or your
        access to the Site, or any part thereof, immediately at any time and
        with or without cause (including, without any limitation, for a breach
        of these Terms). Vexaya shall not be liable to you or any third party
        for termination of the Site, or any part thereof. If you object to any
        term or condition of these Terms, or any subsequent modifications
        thereto, or become dissatisfied with the Site in any way, your only
        recourse is to immediately discontinue use of the Site. Upon termination
        of these Terms, you shall cease all use of the Site. This Section 15and
        Sections 7 (Intellectual Property Rights), 11(Privacy), 12(Warranty
        Disclaimers), 13(Limitation of Liability), 14(Indemnity), and
        16(Independent Contractors) to 18(General) shall survive termination of
        these Terms.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        16. Independent Contractors
      </h2>
      <p>
        You and Vexaya are independent contractors, and these Terms do not
        create any partnership or employment relationship.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">17. Assignment</h2>
      <p>
        You may not transfer or assign these Terms, but Vexaya may assign them
        without restriction or notification.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">
        18. Governing Law and Jurisdiction
      </h2>
      <p>
        Vexaya reserves the right to discontinue or modify any aspect of the
        Site at any time. These Terms and the relationship between you and
        Vexaya shall be governed by and construed in accordance with the laws of
        England, without regard to its principles of conflict of laws. You agree
        to submit to the personal and exclusive jurisdiction of the courts of
        Delaware (United States of America) and waive any jurisdictional, venue,
        or inconvenient forum objections to such courts, provided that Vexaya
        may seek injunctive relief in any court of competent jurisdiction. These
        Terms shall constitute the entire agreement between you and Vexaya
        concerning the Site. If any provision of these Terms is deemed invalid
        by a court of competent jurisdiction, the invalidity of such provision
        shall not affect the validity of the remaining provisions of these
        Terms, which shall remain in full force and effect. No waiver of any
        term of these Terms shall be deemed a further or continuing waiver of
        such term or any other term, and a party’s failure to assert any right
        or provision under these Terms shall not constitute a waiver of such
        right or provision.
          <p className="pt-2">
            YOU AGREE THAT ANY CAUSE OF ACTION THAT YOU MAY HAVE ARISING OUT OF
            OR RELATED TO THE SITE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE
            CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS
            PERMANENTLY BARRED.
          </p>
        {/* <div className=" items-center space-x-2 pt-4">
          <label className="flex">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-700 pl-2">
                 I agree to the terms and conditions.
            </span>
          </label>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div> */}
      </p>
    </div>
  </div>
  );
};

export default TermsAndConditions;
