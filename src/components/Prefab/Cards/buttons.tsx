// BTN_LINK: Use for internal navigation within the Next.js app.
// Example Usage:
// <BTN_LINK href="/about">About Us</BTN_LINK>

// BTN_EXT_LINK: Use for external links, opens in a new tab safely.
// Example Usage:
// <BTN_EXT_LINK href="https://externalwebsite.com">Visit External Website</BTN_EXT_LINK>

// BTN_FUNC: Use for buttons that perform an action, like form submission or opening a modal.
// Example Usage:
// <BTN_FUNC onClick={() => console.log('Button clicked')}>Click Me</BTN_FUNC>

import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";

interface BtnLinkProps {
  href: string;
  className?: string;
  children: any;
  // Include other props as needed
}

export const BTN_LINK: React.FC<BtnLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <Button asChild className={className} {...props}>
      <Link href={href} passHref>
        {children}
      </Link>
    </Button>
  );
};

interface BtnExtLinkProps {
  href: string;
  className?: string;
  children: any;
}

export const BTN_EXT_LINK: React.FC<BtnExtLinkProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <Button asChild className={className} {...props}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};

interface BtnFuncProps {
  onClick: () => void;
  className?: string;
  children: any;
}

export const BTN_FUNC: React.FC<BtnFuncProps> = ({
  onClick,
  className,
  children,
  ...props
}) => {
  if (typeof onClick !== "function") {
    console.error("BTN_FUNC requires an onClick function");
    return null;
  }
  return (
    <Button onClick={onClick} className={className} {...props}>
      {children}
    </Button>
  );
};
