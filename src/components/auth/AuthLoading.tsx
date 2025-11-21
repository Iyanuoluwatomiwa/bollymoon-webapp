function AuthLoading() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-24">
      <div className="flex items-center gap-2 ">
        <p className="text-lg font-bold">Verifying</p>
        <span className="loading loading-bars loading-sm" />
      </div>
    </main>
  )
}
export default AuthLoading
