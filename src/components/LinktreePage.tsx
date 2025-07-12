import { ProfileHeader } from './ProfileHeader';
import { SocialLinkButton } from './SocialLinkButton';
import { ThemeToggle } from './ThemeToggle';
import {
  Instagram,
  Youtube,
  Mail,
  Calendar,
  Download,
  Music4,
  Heart,
  MessageSquare
} from 'lucide-react';

export const LinktreePage = () => {
  const socialLinks = [
    {
      href: "https://instagram.com/lucia.wellness",
      icon: <Instagram size={24} />,
      title: "Instagram",
      subtitle: "@lucia.wellness - Daily wellness content"
    },
    {
      href: "https://tiktok.com/@lucia.wellness",
      icon: <Music4 size={24} />,
      title: "TikTok",
      subtitle: "Quick wellness tips & lifestyle hacks"
    },
    {
      href: "https://youtube.com/@luciagonzalez",
      icon: <Youtube size={24} />,
      title: "YouTube",
      subtitle: "In-depth wellness & lifestyle videos"
    },
    {
      href: "mailto:miss.nyxx.00@gmail.com",
      icon: <Mail size={24} />,
      title: "Email",
      subtitle: "miss.nyxx.00@gmail.com"
    },
    {
      href: "https://calendly.com/lucia-wellness",
      icon: <Calendar size={24} />,
      title: "Book a Session",
      subtitle: "1:1 wellness consultations"
    },
    {
      href: "https://onlyfans.com/lucia.wellness",
      icon: <Heart size={24} />,
      title: "OnlyFans",
      subtitle: "Exclusive wellness content"
    },
    {
      href: "https://reddit.com/u/lucia_wellness",
      icon: <MessageSquare size={24} />,
      title: "Reddit",
      subtitle: "Join wellness discussions"
    }
  ];

  return (
    <>
      <ThemeToggle />
      <div className="min-h-screen bg-gradient-soft">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          {/* Profile Header */}
          <ProfileHeader />

          {/* Social Links */}
          <div className="mt-12 space-y-4">
            {socialLinks.map((link, index) => (
              <div
                key={link.title}
                style={{
                  animationDelay: `${(index + 1) * 0.1}s`
                }}
              >
                <SocialLinkButton
                  href={link.href}
                  icon={link.icon}
                  title={link.title}
                  subtitle={link.subtitle}
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              ✨ Website created by{' '}
              <span className="font-semibold text-primary">Studio Enki</span>
            </p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle"></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};