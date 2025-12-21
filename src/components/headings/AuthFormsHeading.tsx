import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface AuthFormsHeadingProp {
  title: string
  desc?: string
}

function AuthFormsHeading({ title, desc }: AuthFormsHeadingProp) {
  return (
    <CardHeader>
      <CardTitle className="text-base md:text-xl text-center font-semibold uppercase tracking-wider text-secondary">
        {title}
      </CardTitle>
      <CardDescription className="text-center">{desc}</CardDescription>
    </CardHeader>
  )
}
export default AuthFormsHeading
