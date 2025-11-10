import React from 'react';
import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';

const APP_EMAIL = 'info@gmmachinery.com';
const APP_PHONE = '+91-22-XXXX-XXXX';
const APP_PHONE_2 = '+91-98XX-XXXXXX';

export default function Contact() {
  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: 'https://linkedin.com/company/gmmachinery',
      label: 'LinkedIn',
    },
    {
      icon: FacebookIcon,
      href: 'https://facebook.com/gmmachinery',
      label: 'Facebook',
    },
    {
      icon: TwitterIcon,
      href: 'https://twitter.com/gmmachinery',
      label: 'Twitter',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-background">
        <div className="mx-auto h-full max-w-6xl lg:border-x border-border">
          <div
            aria-hidden
            className="absolute inset-0 isolate -z-10 opacity-80 contain-strict"
          >
            <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsl(var(--primary)/.06)_0,hsla(0,0%,55%,.02)_50%,hsl(var(--primary)/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
            <div className="bg-[radial-gradient(50%_50%_at_50%_50%,hsl(var(--primary)/.04)_0,hsl(var(--primary)/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
          </div>
          <div className="flex grow flex-col justify-center px-4 md:px-6 pt-32 pb-16">
            <h1 className="text-4xl font-bold md:text-5xl">
              Visit Our Location
            </h1>
            <p className="text-muted-foreground mb-5 text-base">
              Find us at our showroom and technical center in Mumbai. Our precision tooling experts are ready to assist you.
            </p>
          </div>
          <BorderSeparator />
          <div className="grid md:grid-cols-3">
            <Box
              icon={Mail}
              title="Email"
              description="We respond to all inquiries within 24 hours."
            >
              <a
                href={`mailto:${APP_EMAIL}`}
                className="font-mono text-base font-medium tracking-wide hover:underline"
              >
                {APP_EMAIL}
              </a>
              <CopyButton className="size-6" test={APP_EMAIL} />
            </Box>
            <Box
              icon={MapPin}
              title="Location"
              description="Visit our showroom and technical center."
            >
              <span className="font-mono text-base font-medium tracking-wide">
                Industrial Area, Andheri East, Mumbai, Maharashtra 400093, India
              </span>
            </Box>
            <Box
              icon={Phone}
              title="Phone"
              description="Available Mon-Sat, 9:00 AM - 6:00 PM IST."
              className="border-b-0 md:border-r-0"
            >
              <div>
                <div className="flex items-center gap-x-2">
                  <a
                    href={`tel:${APP_PHONE}`}
                    className="block font-mono text-base font-medium tracking-wide hover:underline"
                  >
                    {APP_PHONE}
                  </a>
                  <CopyButton className="size-6" test={APP_PHONE} />
                </div>
                <div className="flex items-center gap-x-2">
                  <a
                    href={`tel:${APP_PHONE_2}`}
                    className="block font-mono text-base font-medium tracking-wide hover:underline"
                  >
                    {APP_PHONE_2}
                  </a>
                  <CopyButton className="size-6" test={APP_PHONE_2} />
                </div>
              </div>
            </Box>
          </div>
          <BorderSeparator />
          <div className="relative w-full h-[500px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71637645!3d19.08219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="G M Machinery Store Location"
              className="w-full h-full"
            />
          </div>
          <BorderSeparator />
          <div className="relative flex h-full min-h-[320px] items-center justify-center">
            <div
              className={cn(
                'z--10 absolute inset-0 size-full',
                'bg-[radial-gradient(color-mix(in_oklab,var(--foreground)30%,transparent)_1px,transparent_1px)]',
                'bg-[size:32px_32px]',
                '[mask-image:radial-gradient(ellipse_at_center,var(--background)_30%,transparent)]',
              )}
            />

            <div className="relative z-1 space-y-6">
              <h2 className="text-center text-3xl font-bold md:text-4xl">
                Connect With Us
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted/50 hover:bg-accent hover:text-accent-foreground flex items-center gap-x-2 rounded-full border border-border px-4 py-2 transition-colors"
                  >
                    <link.icon className="size-4" />
                    <span className="font-mono text-sm font-medium tracking-wide">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BorderSeparator() {
  return <div className="absolute inset-x-0 h-px w-full border-b border-border" />;
}

type ContactBox = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({
  title,
  description,
  className,
  children,
  ...props
}: ContactBox) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between border-b border-border md:border-r md:border-b-0',
        className,
      )}
    >
      <div className="bg-muted/40 flex items-center gap-x-3 border-b border-border p-4">
        <props.icon className="text-muted-foreground size-5" strokeWidth={1} />
        <h2 className="font-heading text-lg font-medium tracking-wider">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-x-2 p-4 py-12">{children}</div>
      <div className="border-t border-border p-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  test: string;
};

function CopyButton({
  className,
  variant = 'ghost',
  size = 'icon',
  test,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('disabled:opacity-100', className)}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      disabled={copied || props.disabled}
      {...props}
    >
      <div
        className={cn(
          'transition-all',
          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )}
      >
        <Check className="size-3.5 stroke-emerald-500" aria-hidden="true" />
      </div>
      <div
        className={cn(
          'absolute transition-all',
          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
        )}
      >
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
