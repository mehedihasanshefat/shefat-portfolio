// app/contact/page.tsx
import Container from "@/components/container";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <Container className="p-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Left Column - Contact Info */}

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
              <ContactForm showHeader={false} />
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Frequently Asked Questions
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <h5 className="font-medium mb-1">
                    What happens after I submit the form?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    I&apos;ll receive your message via email and will respond
                    within 24-48 hours. You&apos;ll also get a confirmation
                    email.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <h5 className="font-medium mb-1">
                    Do you work with international clients?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I work with clients from all over the world.
                    Time zone differences are never a problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
