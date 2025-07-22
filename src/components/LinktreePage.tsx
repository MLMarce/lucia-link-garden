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
  MessageSquare,
  Twitter
  MessageSquare,
  Twitter
} from 'lucide-react';

export const LinktreePage = () => {
  const socialLinks = [
    {
      href: "https://tiktok.com/@missnyxx_00_",
      icon: <Music4 size={24} />,
      title: "TikTok",
      subtitle: "Quick wellness tips & lifestyle hacks"
    },
    {
      href: "https://x.com/MissNyx00",
      icon: <Twitter size={24} />,
      title: "X (Twitter)",
      subtitle: "@MissNyxx00 - Follow my updates"
    },
    {
      href: "mailto:miss.nyxx.00@gmail.com",
      icon: <Mail size={24} />,
      title: "Email",
      subtitle: "miss.nyxx.00@gmail.com"
    },
    {
      href: "https://onlyfans.com/missnyxx00",
      icon: <Heart size={24} />,
      title: "OnlyFans",
      subtitle: "Exclusive wellness content"
    },
    {
      href: "https://reddit.com/u/MissNyxOfficial",
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
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};