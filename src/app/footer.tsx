import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-950 text-white">
        <p className="text-xs text-blue-300">© 2023 Sapphire Salon. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-300 hover:text-blue-100" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-300 hover:text-blue-100" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    )
}