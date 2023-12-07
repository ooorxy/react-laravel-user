export default function Darkmode ({iconLight, iconDark}) {
    const light = document.getElementById('light-button');
    const dark = document.getElementById('dark-button');
    const userTheme = localStorage.getItem('theme');
    const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (light && dark) {
        const iconToggle = () => {
            light.classList.toggle('hidden');
            dark.classList.toggle('hidden');
        }
        const themeCheck = () => {
            if (userTheme === 'dark' || (!userTheme && systemDarkTheme)) {
                document.documentElement.classList.add('dark');
                dark.classList.add('hidden');
                return true;
            }
            light.classList.add('hidden');
        }

        const switchTheme = () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                iconToggle();
                return true;
            }

            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            iconToggle();
        }

        light.addEventListener('click', () => { switchTheme() });
        dark.addEventListener('click', () => { switchTheme() });

        themeCheck();
    }

    return <>
        <button type="button" className="ms-6" id="light-button">{iconLight}</button>
        <button type="button" className="ms-6" id="dark-button">{iconDark}</button>
    </>
}
