import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";
import { business } from "@/lib/site-data";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = "https://shi-foo-chinese-chino-hills.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shi Foo | Chinese Restaurant in Chino Hills, CA",
    template: "%s | Shi Foo",
  },
  description:
    "Shi Foo is a family-run Chinese restaurant in Chino Hills, CA — 80+ dishes made fresh to order, a real gluten-free menu, non-GMO oils, and a peanut-free kitchen. 4.1 stars on Yelp, 559 reviews.",
  openGraph: {
    title: "Shi Foo | Chinese Restaurant in Chino Hills, CA",
    description:
      "Family-run Chinese kitchen in Chino Hills — fresh, made-to-order food with real gluten-free and vegetarian options.",
    url: siteUrl,
    siteName: "Shi Foo",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1800, height: 1510, alt: "Fresh wok-cooked Chinese food at Shi Foo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shi Foo | Chinese Restaurant in Chino Hills, CA",
    description: "Family-run Chinese kitchen in Chino Hills — fresh, made-to-order food.",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  image: `${siteUrl}/images/hero.jpg`,
  url: siteUrl,
  telephone: business.phoneDigits,
  servesCuisine: "Chinese",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: "Chino Hills",
    addressRegion: "CA",
    postalCode: "91709",
    addressCountry: "US",
  },
  openingHoursSpecification: business.hoursByDay.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${h.day}`,
    opens: h.open,
    closes: h.close,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.yelp.score,
    reviewCount: business.rating.yelp.count,
  },
  menu: `${siteUrl}/menu`,
  acceptsReservations: "False",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}
