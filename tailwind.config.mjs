  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Enables dark mode using the "class" strategy
    theme: {
      extend: {
        screens: {
          'air': {'max': '1260px'},   // Custom max-width for small devices
        },
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          
          card: 'hsl(var(--card))',
          'card-foreground': 'hsl(var(--card-foreground))',
          primary: 'hsl(var(--primary))',
          'primary-foreground': 'hsl(var(--primary-foreground))',
          secondary: 'hsl(var(--secondary))',
          'secondary-foreground': 'hsl(var(--secondary-foreground))',
          // muted: 'hsl(var(--muted))',
          // 'muted-foreground': 'hsl(var(--muted-foreground))',
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
        },

        typography: (theme) => ({
          dark: {
            css: {
              '--tw-prose-body': theme('colors.gray.200'),
              '--tw-prose-headings': theme('colors.white'),
              '--tw-prose-links': theme('colors.zinc.400'),
              '--tw-prose-links-hover': theme('colors.blue.600'),
              '--tw-prose-bold': theme('colors.white'),
              '--tw-prose-counters': theme('colors.gray.400'),
              '--tw-prose-bullets': theme('colors.gray.400'),
              '--tw-prose-hr': theme('colors.gray.600'),
              '--tw-prose-quotes': theme('colors.gray.300'),
              '--tw-prose-quote-borders': theme('colors.gray.600'),
              '--tw-prose-captions': theme('colors.gray.400'),
              '--tw-prose-code': theme('colors.pink.400'),
              '--tw-prose-pre-code': theme('colors.pink.400'),
              '--tw-prose-pre-bg': theme('colors.gray.800'),
              '--tw-prose-th-borders': theme('colors.gray.600'),
              '--tw-prose-td-borders': theme('colors.gray.700'),
            },
          },
        }),

      }
    },
    plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography"), // Corrected plugin import
    ],
  };