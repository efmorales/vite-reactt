import githubIcon from "./gh-s.png"
import instaIcon from "./insta-s.png"
import twIcon from "./tw-s.png"

export default function Footer () {
    return (
        <div className="footer">

            <a href="https://twitter.com/efmoral">
                <button className="footer-tw">
                    <img src={twIcon} alt="twitter-link" />
                </button>
            </a>

            <a href="https://www.instagram.com/zanalphabetic/">
                <button className="footer-insta">
                    <img src={instaIcon} alt="instagram-link" />
                </button>
            </a>


            <a href="https://github.com/efmorales">
                <button className="footer-gh">
                    <img src={githubIcon} alt="github-link" />
                </button>
            </a>

        </div>
        )
}