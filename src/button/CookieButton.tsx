import "./CookieButton.css"

export interface CookieButtonProps {
    addCookie: () => void
}

export default function CookieButton({addCookie}: CookieButtonProps) {
    return (
        <div onClick={addCookie} className='CookieButton'>🍪</div>
    );
}