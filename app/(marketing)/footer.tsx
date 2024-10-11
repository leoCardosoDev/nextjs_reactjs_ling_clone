import { Button } from "@/components/ui/button";
import Image from "next/image";

type LanguageButtonProps = {
  src: string;
  alt: string;
  label: string;
};

const languages = [
  { src: "/hr.svg", alt: "Croatian", label: "Croata" },
  { src: "/es.svg", alt: "Spanish", label: "Espanhol" },
  { src: "/fr.svg", alt: "French", label: "Françês" },
  { src: "/it.svg", alt: "Italian", label: "Italiano" },
  { src: "/jp.svg", alt: "Japanese", label: "Japonês" },
];

const LanguageButton: React.FC<LanguageButtonProps> = ({ src, alt, label }) => (
  <Button size="lg" variant="ghost" className="w-full">
    <Image
      src={src}
      alt={alt}
      height={32}
      width={40}
      className="mr-4 rounded-md"
    />
    {label}
  </Button>
);

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {languages.map((lang) => (
          <LanguageButton key={lang.alt} {...lang} />
        ))}
      </div>
    </footer>
  );
};
