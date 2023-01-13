function Navmenu() {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        <span className="sr-only">evolx Logo</span>
        evolx
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <a className="rounded-lg px-3 py-2" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2" href="">
            Work
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2" href="">
            Services
          </a>
        </li>
        <li>
          <a className="rounded-lg px-3 py-2" href="">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navmenu;
