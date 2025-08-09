export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <div className="text-sm text-muted-foreground mb-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>By accessing and using AI Music Studio ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>AI Music Studio is a web-based platform that allows users to generate music from text descriptions using artificial intelligence technology. The service includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Text-to-music generation capabilities</li>
                <li>Music playback and download features</li>
                <li>Music history and management tools</li>
                <li>User interface and related functionalities</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Currently, our service does not require user registration. However, we may implement user accounts in the future. When we do:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>You must notify us immediately of any unauthorized use</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-medium text-foreground">Permitted Uses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate music for personal, educational, or commercial use</li>
                <li>Download and use generated music in your projects</li>
                <li>Share generated music with proper attribution</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground">Prohibited Uses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating content that infringes on third-party rights</li>
                <li>Generating music with harmful, offensive, or illegal content</li>
                <li>Attempting to reverse engineer or copy our technology</li>
                <li>Using the service to spam or harass others</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Attempting to gain unauthorized access to our systems</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-medium text-foreground">Generated Music</h3>
              <p>Music generated through our service is subject to the following terms:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain rights to use the generated music for your intended purposes</li>
                <li>We do not claim ownership of the generated music</li>
                <li>Generated music may be similar to existing works due to the nature of AI</li>
                <li>You are responsible for ensuring your use complies with copyright laws</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground">Service Technology</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our AI models, algorithms, and technology remain our property</li>
                <li>The website design, code, and functionality are protected by copyright</li>
                <li>You may not copy, modify, or distribute our technology</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Content Guidelines</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>When using our service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide appropriate and family-friendly prompts</li>
                <li>Not attempt to generate music that promotes violence or hate</li>
                <li>Respect intellectual property rights in your prompts</li>
                <li>Not use the service for illegal or harmful purposes</li>
                <li>Comply with all applicable content regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Privacy and Data Protection</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding your personal information.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We collect and process data as described in our Privacy Policy</li>
                <li>You consent to our data practices by using the service</li>
                <li>We implement security measures to protect your information</li>
                <li>You have rights regarding your personal data as outlined in our Privacy Policy</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Service Availability and Modifications</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We strive to provide reliable service, but:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service availability is not guaranteed 100% of the time</li>
                <li>We may modify, suspend, or discontinue features at any time</li>
                <li>We may impose usage limits or restrictions</li>
                <li>Maintenance and updates may temporarily affect service</li>
                <li>We will provide reasonable notice of significant changes when possible</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations</h2>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="text-lg font-medium text-foreground">Service Disclaimers</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The service is provided "as is" without warranties of any kind</li>
                <li>We do not guarantee the quality or accuracy of generated music</li>
                <li>AI-generated content may have limitations or unexpected results</li>
                <li>We are not responsible for how you use the generated music</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground">Limitation of Liability</h3>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid for the service</li>
                <li>We are not responsible for third-party content or services</li>
                <li>You use the service at your own risk</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>You agree to indemnify and hold harmless AI Music Studio and its affiliates from any claims, damages, or expenses arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the service</li>
                <li>Your violation of these terms</li>
                <li>Your infringement of third-party rights</li>
                <li>Any content you submit or generate</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We may terminate or suspend your access to the service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For violation of these terms</li>
                <li>For illegal or harmful use of the service</li>
                <li>At our discretion with or without notice</li>
                <li>If required by law or regulation</li>
              </ul>
              <p>Upon termination, your right to use the service ceases immediately.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Disputes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Good faith negotiation first</li>
                <li>Binding arbitration if negotiation fails</li>
                <li>Courts of [Your Jurisdiction] for non-arbitrable matters</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We may update these Terms of Service from time to time. We will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Post updated terms on this page</li>
                <li>Update the "Last updated" date</li>
                <li>Notify users of significant changes when possible</li>
                <li>Consider continued use as acceptance of new terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>If you have questions about these Terms of Service, please contact us:</p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong> legal@aimusicstudio.com</p>
                <p><strong>Address:</strong> [Your Business Address]</p>
                <p><strong>Phone:</strong> [Your Phone Number]</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">15. Miscellaneous</h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Severability:</strong> If any provision is found invalid, the rest remains in effect</li>
                <li><strong>Entire Agreement:</strong> These terms constitute the complete agreement between us</li>
                <li><strong>No Waiver:</strong> Our failure to enforce any right does not waive that right</li>
                <li><strong>Assignment:</strong> We may assign these terms; you may not without our consent</li>
                <li><strong>Force Majeure:</strong> We are not liable for delays due to circumstances beyond our control</li>
              </ul>
            </div>
          </section>

          <div className="bg-primary/10 p-6 rounded-lg mt-8">
            <p className="text-sm">
              <strong>Important:</strong> By using AI Music Studio, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
