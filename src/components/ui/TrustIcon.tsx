import type { WhyUsIcon } from "@/data/site";

type TrustIconProps = {
  name: WhyUsIcon;
};

export function TrustIcon({ name }: TrustIconProps) {
  switch (name) {
    case "groups":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="15.5" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 17.5c.6-2.2 2.4-3.5 4.5-3.5s3.9 1.3 4.5 3.5M13 16.5c.4-1.6 1.7-2.5 3-2.5 1.8 0 3.2 1.2 3.5 2.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "care":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <path
            d="M12 20.5s-6.5-4.2-6.5-9a3.6 3.6 0 0 1 6.3-2.4L12 10l.2-.9a3.6 3.6 0 0 1 6.3 2.4c0 4.8-6.5 9-6.5 9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "patience":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <path
            d="M4 13.5c2.2-1.2 4.5-1.8 8-1.8s5.8.6 8 1.8M5.5 10c2-1 4.2-1.5 6.5-1.5S16.5 9 18.5 10M7 16.5c1.6-.7 3.3-1 5-1s3.4.3 5 1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "method":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <path
            d="m12 5.5 1.3 3.8h4l-3.2 2.4 1.2 3.8L12 13l-3.3 2.5 1.2-3.8-3.2-2.4h4L12 5.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "safety":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <path
            d="M12 4.5 18 7v5.2c0 3.6-2.6 6.2-6 7.3-3.4-1.1-6-3.7-6-7.3V7l6-2.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "transparency":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[1.125rem] w-[1.125rem]">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="m8.2 12.2 2.3 2.3 5.3-5.4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
