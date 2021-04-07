import {useTheme} from 'next-themes'


export default function DarkButton() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button
                className="js-change-theme focus:outline-none"
                onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            >
                🌙
            </button>
        </div>
    )

}