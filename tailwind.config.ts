import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#07182d', gold:'#caa75a' } } }, plugins: [] };
export default config;
