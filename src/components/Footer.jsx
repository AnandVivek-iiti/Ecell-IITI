export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} E-Cell IITI. All rights reserved.</p>
        <p className="text-slate-400">Built with React and Vite.</p>
      </div>
    </footer>
  )
}
