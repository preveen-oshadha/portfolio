import '../styles/style.css';

export const metadata = {
  title: 'Oshadha Preveen — Web & Mobile Developer',
  description: 'Full Stack Web & Mobile App Developer from Sri Lanka. Building meaningful digital experiences with React, Next.js, Java, and more.',
  keywords: 'Oshadha Preveen, Web Developer, Mobile Developer, React, Next.js, Java, Sri Lanka',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
