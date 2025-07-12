import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SocialLinkButtonProps {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SocialLinkButton = ({
  href,
  icon,
  title,
  subtitle,
  className,
}: SocialLinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between w-full max-w-lg mx-auto",
        "bg-gradient-card border border-border rounded-2xl p-4",
        "shadow-soft hover:shadow-hover",
        "transition-all duration-300 ease-smooth",
        "hover:scale-[1.02] hover:-translate-y-1",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </span>
          {subtitle && (
            <span className="text-sm text-muted-foreground">{subtitle}</span>
          )}
        </div>
      </div>
      <div className="text-primary/60 group-hover:text-primary transition-colors duration-300">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </a>
  );
};