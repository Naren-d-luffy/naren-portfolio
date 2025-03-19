export default function Footer() {
  return (
    <footer className="py-8 bg-violet-600 text-violet-50 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4" data-aos="fade-up">
        <h2 className="text-2xl font-semibold">RamNaren</h2>

        <nav className="flex space-x-6 text-sm">
          {["about", "skills", "projects", "certifications", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative transition-all duration-300 ease-in-out 
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gray-200
                before:transition-all before:duration-300 before:ease-in-out
                hover:before:w-full hover:text-gray-200"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        <p className="text-sm">© 2025 RamNaren. All rights reserved.</p>
      </div>
    </footer>
  );
}
