interface Ilayout{
  children: React.ReactNode
}
export default function Layout({ children }:Ilayout) {
  return (
    <>
      <div>Header</div>
      <div>{children}</div>
      <div>Footer</div>
    </>
  )
}