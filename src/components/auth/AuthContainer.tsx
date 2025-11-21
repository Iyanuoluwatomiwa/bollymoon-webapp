function AuthContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className=" w-[90%] mx-auto max-w-lg py-10 min-h-screen  ">
      {children}
    </main>
  )
}
export default AuthContainer
