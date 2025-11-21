import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface AuthFormsHeadingProp {
  title: string
  desc?: string
}

function AuthFormsHeading({ title, desc }: AuthFormsHeadingProp) {
  return (
    <CardHeader>
      <CardTitle className="text-xl text-center font-semibold uppercase tracking-wider">
        {title}
      </CardTitle>
      <CardDescription className="text-center">{desc}</CardDescription>
    </CardHeader>
  )
}
export default AuthFormsHeading
