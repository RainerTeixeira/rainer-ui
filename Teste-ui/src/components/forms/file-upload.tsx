import React from 'react'

export default function FileUpload() {
  const [file, setFile] = React.useState<File | null>(null)

  return (
    <div className="space-y-2">
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Arquivo
      </label>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="w-full rounded-md border px-3 py-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-transparent file:text-sm"
        style={{ borderColor: 'var(--color-border-default)', backgroundColor: 'var(--color-background-primary)', color: 'var(--color-text-primary)' }}
      />
      {file && (
        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          Selecionado: {file.name}
        </p>
      )}
    </div>
  )
}
