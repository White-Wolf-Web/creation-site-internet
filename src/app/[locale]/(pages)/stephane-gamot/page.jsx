

import Skills from '@/components/Skills';
import ContactButton from '@/components/Buttons/ContactButton';
import Citation from '@/components/Citations/Citation';
import StephaneHero from '@/components/Heros/StephaneHero';
import { useTranslations } from 'next-intl';

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";

  return {
    title: {
      fr: "Qui suis-je ? – Stéphane Gamot, ingénieur & développeur web",
      en: "Who am I? – Stéphane Gamot, software engineer & web developer",
      nl: "Wie ben ik? – Stéphane Gamot, software-ingenieur & webontwikkelaar",
    }[currentLocale],

    description: {
      fr: "Développeur full-stack & consultant SEO passionné. Un parcours solide en ingénierie logicielle, SEO, accessibilité et UX pour concevoir des sites durables et humains.",
      en: "Full-stack developer & SEO consultant with a strong background in software engineering, SEO, accessibility, and UX design. I build lasting, human-centered websites.",
      nl: "Full-stack ontwikkelaar & SEO-consultant met een sterke achtergrond in software-engineering, toegankelijkheid en UX. Ik ontwerp duurzame en menselijke websites.",
    }[currentLocale],

    alternates: {
      canonical: `${siteUrl}/${currentLocale === "fr" ? "stephane-gamot" : `${currentLocale}/stephane-gamot`}`,
      languages: {
        fr: `${siteUrl}/fr/stephane-gamot`,
        en: `${siteUrl}/en/stephane-gamot`,
        nl: `${siteUrl}/nl/stephane-gamot`,
        "x-default": `${siteUrl}/fr/stephane-gamot`,
      },
    },

    openGraph: {
      title: {
        fr: "Stéphane Gamot – Créateur de solutions web & SEO",
        en: "Stéphane Gamot – Web & SEO Solutions Creator",
        nl: "Stéphane Gamot – Web- & SEO-oplossingen op maat",
      }[currentLocale],
      description: {
        fr: "Mon parcours, mes valeurs, mes compétences. Un accompagnement humain, technique et esthétique pour votre site.",
        en: "My journey, values, and technical skills. A human, technical and aesthetic approach to your website project.",
        nl: "Mijn parcours, waarden en vaardigheden. Een menselijke, technische en esthetische aanpak voor uw website.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale === "fr" ? "stephane-gamot" : `${currentLocale}/stephane-gamot`}`,
      type: "profile",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-stephane.webp`,
          secureUrl: `${siteUrl}/images/og-stephane.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Portrait professionnel de Stéphane Gamot",
            en: "Professional portrait of Stéphane Gamot",
            nl: "Professioneel portret van Stéphane Gamot",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Qui suis-je ? – Stéphane Gamot",
        en: "Who am I? – Stéphane Gamot",
        nl: "Wie ben ik? – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Ingénieur logiciel et développeur web, je conçois des sites pensés pour la performance, l’esthétique et l’humain.",
        en: "Software engineer and web developer crafting websites focused on performance, design, and human experience.",
        nl: "Software-ingenieur en webontwikkelaar die sites ontwerpt gericht op prestaties, design en gebruikservaring.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-stephane.webp`],
    },
  };
}

export default function QuiSuisJe() {
  const t = useTranslations('aboutStephane');

  const timeline = t.raw('timeline');

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS',
    'Java', 'MySQL', 'WordPress', 'SEO', 'Accessibilité', 'Angular',
    'Git', 'Framer Motion'
  ];

  return (
    <div className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">

      {/* Portrait + Intro */}
      <StephaneHero />

      <Citation id={3} />

      {/* Timeline */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-title font-semibold mb-8 text-center">
          {t('section.timeline')}
        </h2>
        <div className="space-y-6 border-l-2 border-primary pl-6">
          {timeline.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-primary rounded-full"></div>
              <p className="text-sm text-gray-700">
                <strong>{step.year}</strong> — {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Skills />

      {/* Philosophie */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-title font-semibold">
          {t('philosophy.title')}
        </h2>
        <p className="text-gray-700 text-lg">
          {t('philosophy.text1')}
        </p>
        <p className="text-sm text-gray-600">
          {t('philosophy.text2')}
        </p>
      </section>

      {/* CTA final */}
      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {t('cta.text')}
        </p>
        <ContactButton />
      </section>
    </div>
  );
}