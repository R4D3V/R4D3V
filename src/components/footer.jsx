import { Link } from "react-router-dom";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import github from "../icons/github.png";
import up from "../icons/up.png";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="glass-effect px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-sm text-white/90">
            © <i>Copyright</i> {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="font-semibold hover:text-glow transition-all"
            >
              R4D3V
            </Link>
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="http://github.com/r4d3v"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-2 hover:scale-125 transition-transform"
            >
              <img src={github} alt="GitHub" width={20} height={20} />
            </a>
            <a
              href="http://t.me/patrolfx"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-2 hover:scale-125 transition-transform"
            >
              <img src={telegram} alt="Telegram" width={20} height={20} />
            </a>
            <a
              href="http://instagram.com/r4d3v"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button p-2 hover:scale-125 transition-transform"
            >
              <img src={instagram} alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="glass-button p-2 hover:scale-125 transition-transform"
            >
              <img src={up} alt="Scroll to top" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
