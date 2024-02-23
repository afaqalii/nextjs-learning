import Link from "next/link"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="flex items-center justify-between px-20 py-5">
        <img className="w-[100px] h-[100px] rounded-full object-cover" src={"https://th.bing.com/th/id/OIP.d-cssZMmcDWJU_yKxt9abQHaFQ?rs=1&pid=ImgDetMain"} alt="tera yaar ho main" />
        <ul className="flex items-center gap-4">
          <Link href={'/dashboard/home'}>
            Home
          </Link>
          <Link href={'/dashboard/projects'}>
            Projects
          </Link>
          <Link href={'/dashboard/about-us'}>
            About me
          </Link>
          <Link href={'/dashboard/contact-us'}>
            Contact
          </Link>
        </ul>
      </nav>
      {children}
    </section>
  )
}