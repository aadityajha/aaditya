import Head from 'next/head';

const TermsOfUse = () => {
  const sectionStyle = { marginBottom: "30px" };
  const headingStyle = { fontSize: "1.4rem", fontWeight: "600", marginBottom: "10px", };
  const paragraphStyle = { fontSize: "1rem", lineHeight: "1.6", marginBottom: "8px" };
  const listStyle = { listStyleType: "disc", marginLeft: "20px", marginTop: "5px", fontSize: "1rem" };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', padding: '30px', margin: '0 auto', maxWidth: '1000px', color: '#b3b2b2ff', }}>
      <Head>
        <title>Terms of Use</title>
        <meta name="description" content="Terms of use for the website." />
      </Head>
      <main>
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '600' }}>Terms of Use</h1>
        </header>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>1. Ownership</h2>
          <p style={paragraphStyle}>All content and materials on this website are owned and operated by the website owner.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>2. Acceptance of Terms</h2>
          <p style={paragraphStyle}>
            By accessing or using this website, you agree to comply with these Terms of Use and all applicable laws.
            If you do not agree with these terms, please do not use this site.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>3. Intellectual Property</h2>
          <p style={paragraphStyle}>
            All content, including text, graphics, logos, and images, on this site is protected by copyright and other intellectual property laws.
            Unauthorized use, reproduction, or distribution of any content from this website is prohibited.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>4. User Conduct</h2>
          <p style={paragraphStyle}>
            Users agree not to engage in any unlawful activities while using this website, including but not limited to:
          </p>
          <ul style={listStyle}>
            <li>Accessing data without permission</li>
            <li>Introducing harmful software or viruses</li>
            <li>Spamming, phishing, or harassing other users</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>5. Third-Party Links</h2>
          <p style={paragraphStyle}>
            This website may contain links to third-party websites. These links are provided for your convenience.
            We are not responsible for the content or privacy practices of any linked sites.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>6. Limitation of Liability</h2>
          <p style={paragraphStyle}>
            The website owner is not responsible for any damages or losses resulting from your use of this website,
            including but not limited to software or hardware malfunctions, data loss, or any indirect, special, or consequential damages.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>7. Privacy Policy</h2>
          <p style={paragraphStyle}>
            Please refer to our <a href="/privacy" style={{ color: '#4169E1' }}>Privacy Policy</a> for information on how we collect, use, and protect your personal data.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>8. Modifications to Terms</h2>
          <p style={paragraphStyle}>
            We reserve the right to update or modify these Terms of Use at any time. Changes will be posted on this page with the updated date.
            Your continued use of the website after any such changes will constitute your acceptance of the new terms.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>9. Contact Information</h2>
          <p style={paragraphStyle}>
            If you have any questions or concerns about these Terms of Use, please contact us at
            <a href="mailto:hi@aaditya-jha.com.np" style={{ color: '#4169E1' }}> hi@aaditya-jha.com.np</a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfUse;