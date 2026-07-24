/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial / engineering-drawing inspired palette
        // Blueprint navy base, drafting-paper cream panels, safety-orange accent for actions/alerts
        ink: '#12213A',        // deep blueprint navy — headers, primary text
        steel: '#2E4364',      // panel headers, sidebar
        slate: '#5A6B85',      // secondary text
        paper: '#F3F1EA',      // drafting paper background
        panel: '#FFFFFF',      // card/panel surface
        line: '#D8DCE3',       // hairline borders/grid
        signal: '#E4572E',     // safety-orange accent — primary actions
        signalDark: '#C4451F',
        go: '#3A7D44',         // released / approved state
        wait: '#C98A1B',       // in review state
        hold: '#8A8F98',       // obsolete / archived state
        work: '#2E6FBF',       // in-work / checked out state
      },
      fontFamily: {
        display: ['"IBM Plex Sans Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
