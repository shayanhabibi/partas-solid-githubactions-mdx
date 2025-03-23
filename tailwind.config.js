/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./index.html",
        "./**/*.{fs,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--kb-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--kb-accordion-content-height)" },
                    to: { height: "0" },
                },
                shine: {
                    "0%": { backgroundPosition: "200% 0" },
                    "25%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                },
                shineborder: {
                    "0%": { backgroundPosition: "0% 0%" },
                    "50%": { backgroundPosition: "100% 100%" },
                    "to": { backgroundPosition: "0% 0%" },
                },
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
                "content-show": {
                    from: { opacity: 0, transform: "scale(0.96)" },
                    to: { opacity: 1, transform: "scale(1)" }
                },
                "content-hide": {
                    from: { opacity: 1, transform: "scale(1)" },
                    to: { opacity: 0, transform: "scale(0.96)" }
                },
                "shiny-text": {
                    "0%, 90%, 100%": {
                        "backgroundPosition": "calc(-100% - var(--shiny-width)) 0"
                    },
                    "30%, 60%": {
                        "backgroundPosition": "calc(100% + var(--shiny-width)) 0"
                    }
                },
                "border-beam": {
                    "100%": {
                        "offsetDistance": "100%"
                    }
                },
                "ripple": {
                    "0%, 100%": {
                        "transform": "translate(-50%, -50%) scale(1)",
                    },
                    "50%": {
                        "transform": "translate(-50%, -50%) scale(0.9)"
                    }
                },
                "orbit": {
                    "0%": {
                        "transform": "rotate(0deg) translateY(var(--radius)) rotate(0deg)"
                    },
                    "100%": {
                        "transform": "rotate(360deg) translateY(var(--radius)) rotate(-360deg)"
                    }
                },
                "marquee": {
                    "from": {
                        "transform": "translateX(0)"
                    },
                    "to": {
                        "transform": "translateX(calc(-100% - var(--gap)))"
                    }
                },
                "marquee-vertical": {
                    "from": {
                        "transform": "translateY(0)"
                    },
                    "to": {
                        "transform": "translateY(calc(-100% - var(--gap)))"
                    }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shine: "shine 3s ease-out infinite",
                shineborder: "shineborder var(--duration) infinite linear",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
                "content-show": "content-show 0.2s ease-out",
                "content-hide": "content-hide 0.2s ease-out",
                "shiny-text": "shiny-text 8s infinite",
                "border-beam": "border-beam var(--duration) infinite linear",
                "ripple": "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                "orbit": "orbit var(--duration) linear infinite",
                "marquee": "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite"
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                info: {
                    DEFAULT: "hsl(var(--info))",
                    foreground: "hsl(var(--info-foreground))"
                },
                success: {
                    DEFAULT: "hsl(var(--success))",
                    foreground: "hsl(var(--success-foreground))"
                },
                warning: {
                    DEFAULT: "hsl(var(--warning))",
                    foreground: "hsl(var(--warning-foreground))"
                },
                error: {
                    DEFAULT: "hsl(var(--error))",
                    foreground: "hsl(var(--error-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
