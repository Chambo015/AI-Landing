/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [], //уже настроен nuxt по умолчанию
    theme: {
        extend: {
            fontFamily: {
                Dewi: [
                    'RFDewiExpanded',
                    'Montserrat',
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                TTOctosquares: [
                    'TTOctosquares',
                    'Montserrat',
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
            },
            backgroundImage: {
                'heading-gradient': 'radial-gradient(72.35% 82.18% at 50% 17.82%, #567b5c 0%, #95cb9e 100%)',
                'btn-gradient': 'radial-gradient(72.35% 82.18% at 50% 17.82%, #7DC689 0%, #67B073 100%)',
                'light-btn-gradient': 'radial-gradient(72.35% 82.18% at 50% 17.82%, #A1FAB0 0%, #82D890 100%)'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
    },
    plugins: [],
};
