import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        "600": "600px",
        "130xl": "130%",
      },
      left: {
        "m15p": "-50px",
      },
      height: {
        "155xl": "155%",
        "144": "36rem",
      },
      minWidth: {
        "800": "800px",
        "600": "600px",
        "200": "200px"
      },
      'flex-basis': {
        "full": "100%"
      },
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]', 
      'animate-[fade-in-down_1s_ease-in-out]'
    ]
  },
} as Options;
