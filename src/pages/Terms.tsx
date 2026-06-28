import { PageHeader } from "@/components/layout/PageHeader";

export default function Terms() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Terms & Conditions" 
        breadcrumbs={[{ label: "Terms & Conditions" }]} 
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-zinc">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <h2>2. Medical Disclaimer</h2>
          <p>The content provided on the Shree Balaji Life Line Hospital website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          
          <h2>3. Emergency Situations</h2>
          <p>If you think you may have a medical emergency, call your doctor, go to the emergency department, or call our emergency number immediately. Reliance on any information provided by this website is solely at your own risk.</p>
          
          <h2>4. Modifications</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check the Terms periodically for changes.</p>
        </div>
      </section>
    </div>
  );
}
