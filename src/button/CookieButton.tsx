import "./CookieButton.css";
import CookieSvg from "../assets/cookie.svg";
import CookieGoogleSvg from "../assets/cookie-google.svg";

export interface CookieButtonProps {
  addCookie: () => void;
  google: boolean;
}

export default function CookieButton(props: CookieButtonProps) {
  let className = "CookieButton";
  if (props.google) className += " google";
  return (
    <img 
        draggable={false}
        onClick={props.addCookie} 
        className={className} 
        src={props.google ? CookieGoogleSvg : CookieSvg} 
    />
  );
}
