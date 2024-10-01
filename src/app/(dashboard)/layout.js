
import Link from "next/link";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html>
      <body>
        <section className="min-h-screen flex">
          <div className="w-1/4 border-r-2 border-r-purple-800">
            <Link
              className="p-2 text-center w-full block  hover:bg-purple-200"
              href={"/dashboard/settings"}
            >
              Settings
            </Link>

            <Link
              className="p-2 text-center w-full block  hover:bg-purple-200"
              href={"/dashboard/profile"}
            >
              Profile
            </Link>
          </div>
          <div className="w-3/4">{children}</div>
        </section>
      </body>
    </html>
  );
}
