
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#96F048',
					foreground: '#100F19'
				},
				secondary: {
					DEFAULT: '#73E212',
					foreground: '#100F19'
				},
				accent: {
					DEFAULT: '#2729ee',
					foreground: '#ffffff'
				},
				crypto: {
					dark: '#100F19',
					darker: '#07051e',
					purple: '#13133f',
					green: '#96F048',
					'green-light': '#73E212'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				'general': ['General Sans', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'syne': ['Syne', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(150, 240, 72, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(150, 240, 72, 0.6)'
					}
				},
				'border-glow': {
					'0%': {
						borderImageSource: 'linear-gradient(0deg, #96F048, #73E212, #96F048)'
					},
					'25%': {
						borderImageSource: 'linear-gradient(90deg, #96F048, #73E212, #96F048)'
					},
					'50%': {
						borderImageSource: 'linear-gradient(180deg, #96F048, #73E212, #96F048)'
					},
					'75%': {
						borderImageSource: 'linear-gradient(270deg, #96F048, #73E212, #96F048)'
					},
					'100%': {
						borderImageSource: 'linear-gradient(360deg, #96F048, #73E212, #96F048)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'border-glow': 'border-glow 3s linear infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
