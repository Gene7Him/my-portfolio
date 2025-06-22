export default function Footer() {
  return (
    <footer className="bg-baseDark text-center mt-auto text-gray-700 dark:text-gray-300 leading-relaxed tracking-tight">
      <p className="text-sm">
        © {new Date().getFullYear()} Eugene Faison — All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/Gene7Him" className="hover:underline">
          GitHub
        </a>
        <a href="https://linkedin.com/in/eugenefaison7" className="hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
