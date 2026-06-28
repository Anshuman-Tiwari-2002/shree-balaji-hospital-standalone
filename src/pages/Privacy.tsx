import { PageHeader } from "@/components/layout/PageHeader";

export default function Privacy() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Privacy Policy" 
        breadcrumbs={[{ label: "Privacy Policy" }]} 
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-zinc">
          <h2>1. Introduction</h2>
          <p>At Shree Balaji Life Line Hospital, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services.</p>
          
          <h2>2. The Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Health Data:</strong> relevant medical history provided during appointments or queries.</li>
          </ul>

          <h2>3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing medical services).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
        </div>
      </section>
    </div>
  );
}
