import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Helmet } from 'react-helmet-async'

interface AuthFormsHeadingProp {
  title: string
  desc?: string
}

function AuthFormsHeading({ title, desc }: AuthFormsHeadingProp) {
  return (
    <>
      <Helmet>
        <title>{`Bollymoon | ${title}`}</title>
        <meta name="description" content={desc} />
      </Helmet>
      <CardHeader>
        <CardTitle className="text-xl text-center font-semibold uppercase tracking-wider">
          {title}
        </CardTitle>
        <CardDescription className="text-center">{desc}</CardDescription>
      </CardHeader>
    </>
  )
}
export default AuthFormsHeading
