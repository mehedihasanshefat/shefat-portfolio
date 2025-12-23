// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  showHeader?: boolean;
  className?: string;
}

export default function ContactForm({
  showHeader = true,
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // EmailJS configuration - Replace with your actual IDs
  const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    templateId:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  };

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onChange", // Validate on change
  });

  // Check if EmailJS is configured
  const isEmailJsConfigured = () => {
    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    return (
      serviceId !== "YOUR_SERVICE_ID" &&
      templateId !== "YOUR_TEMPLATE_ID" &&
      publicKey !== "YOUR_PUBLIC_KEY"
    );
  };

  const onSubmit = async (values: FormValues) => {
    if (!isEmailJsConfigured()) {
      toast.error("Email service not configured", {
        description: "Please configure EmailJS in your environment variables.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: values.name,
          email: values.email,
          message: values.message,
          to_name: "Your Name", // Change to your name
          to_email: "your-email@example.com", // Change to your email
          reply_to: values.email,
          subject: `New Contact Form Submission from ${values.name}`,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
        EMAILJS_CONFIG.publicKey
      );

      if (result.status === 200) {
        // Show success state
        setIsSuccess(true);

        // Reset form
        form.reset();

        // Show success toast
        toast.success("Message sent successfully!", {
          description: "I'll get back to you as soon as possible.",
        });

        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.log("EmailJS error:", error);

      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <div className="text-center py-12 px-4 max-w-md mx-auto">
        <div className="mx-auto w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6 ring-4 ring-green-50 dark:ring-green-900/10">
          <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Message Sent! ✨
        </h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out! I&apos;ve received your message and will
          get back to you within 24-48 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="gap-2"
        >
          <Send className="w-4 h-4" />
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      {showHeader && (
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Send className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-2">
            Send me a message and I&apos;ll respond as soon as possible.
          </p>
        </div>
      )}

      {!isEmailJsConfigured() && (
        <div className="mb-6 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-amber-800 dark:text-amber-300 text-sm flex items-start gap-2">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              Email service not configured. Please add your EmailJS credentials
              to
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1 py-0.5 rounded text-xs font-mono mx-1">
                .env.local
              </code>
              file.
            </span>
          </p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="h-11"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your name as you&apos;d like me to address you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder=""
                    className="h-11"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  I&apos;ll never share your email with anyone else.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    className="min-h-[150px] resize-none"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tell me about your project, question, or just say hello!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full gap-2 h-12 text-base"
            disabled={isSubmitting || !form.formState.isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </Button>

          {/* Form Status */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="h-px w-8 bg-border" />
            <span className="text-xs">
              {form.formState.isValid ? "Ready to send!" : "Fill all fields"}
            </span>
            <div className="h-px w-8 bg-border" />
          </div>
        </form>
      </Form>
    </div>
  );
}
