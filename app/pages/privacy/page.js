import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      padding: '20px',
      margin: '0 auto',
      maxWidth: '900px',
      lineHeight: '1.6',
      color: '#1c1c1c',
    }}>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy policy for the website." />
      </Head>

      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#222' }}>Privacy Policy</h1>
        <p style={{ fontSize: '1rem', color: '#555', marginTop: '8px' }}>Effective date: September 2025</p>
      </header>

      {[
        {
          title: '1. Information Collection',
          content: 'We collect personal information that you provide when using our website, such as your name, email address, and other contact details. This data is collected to improve user experience and deliver relevant content.',
        },
        {
          title: '2. Use of Information',
          content: 'The information we collect is used to enhance your experience, personalize content, and communicate with you about our services and updates. We may also use this data for research and analysis to improve our offerings.',
        },
        {
          title: '3. Information Sharing',
          content: 'We do not sell or share your personal information with third parties except where required by law or to protect our rights. We may share aggregated data with third parties for analytical purposes, but this data will not include personally identifiable information.',
        },
        {
          title: '4. Cookies',
          content: 'We use cookies to improve site performance and enhance user experience. By using our site, you consent to the use of cookies as outlined in this policy. You can manage your cookie preferences through your browser settings.',
        },
        {
          title: '5. Data Security',
          content: 'We take reasonable steps to protect your personal data from unauthorized access, disclosure, or alteration. However, no method of data transmission over the internet is completely secure, and we cannot guarantee the absolute security of your information.',
        },
        {
          title: '6. Third-Party Links',
          content: 'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies before providing them with personal information.',
        },
        {
          title: '7. Your Rights',
          content: 'You have the right to access, update, or delete your personal information. If you would like to exercise these rights, please contact us using the information provided below.',
        },
        {
          title: '8. Changes to This Policy',
          content: 'We reserve the right to update or modify this privacy policy at any time. All changes will be posted on this page, and the updated date will be indicated at the top of the page. Your continued use of the website after such changes will constitute your acceptance of the revised policy.',
        },
        {
          title: '9. Contact Us',
          content: <>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:hi@aaditya-jha.com.np" style={{ color: '#4169E1', textDecoration: 'underline' }}>hi@aaditya-jha.com.np</a>.</>,
        },
      ].map((section, index) => (
        <section key={index} style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px', color: '#222' }}>
            {section.title}
          </h2>
          <p style={{ fontSize: '1rem', color: '#444', margin: 0 }}>{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default PrivacyPolicy;