export default function BlogFilters({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="mb-8">

      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="w-full rounded-lg border p-3"
      />

    </div>
  )
}