import missProfile from '@/assets/missperfil.jpg';

export const ProfileHeader = () => {
  return (
    <div className="text-center space-y-6 animate-scale-in">
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto">
        <img
          src={missProfile}
          alt="Lucía González - Content Creator"
          className="w-full h-full object-cover rounded-full shadow-glow border-4 border-primary/20"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse"></div>
      </div>

      {/* Name and Title */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Miss Nyx
        </h1>
        <p className="text-lg text-muted-foreground font-medium">
          Content Creator | Wellness & Lifestyle
        </p>
        <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
          ✨ Dark elegance, cruel intentions.
          I demand obedience and tributes.
          If you’re weak for power… welcome home.
        </p>
      </div>
    </div>
  );
};