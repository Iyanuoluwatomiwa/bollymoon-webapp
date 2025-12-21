import { adminSettingsTabHeadList } from '@/assets/data'
import SecuritySettingsForm from '@/components/forms/SecuritySettingsForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import { Tabs, TabsContent } from '@/components/ui/tabs'

export default function AdminSettings() {
  const settingsFormComponents: Record<string, React.ComponentType> = {
    security: SecuritySettingsForm,
  }
  return (
    <>
      <PageTitle title="Account Settings" />
      <Container className="py-10 relative">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Account Settings
          </h1>
          <Tabs defaultValue="security" className="space-y-2">
            <div className=" ">
              <h2 className="bg-secondary text-white text-sm md:text-base h-9 font-medium w-36 flex items-center justify-center w-full max-w-2xl mx-auto text-center">
                Change Password
              </h2>
            </div>

            {adminSettingsTabHeadList.map(({ status }) => {
              const Component = settingsFormComponents[status]
              return (
                <TabsContent
                  key={status}
                  value={status}
                  className="max-w-xl mx-auto w-full px-2 py-4 sm:px-4 sm:py-6 rounded-sm bg-white shadow-sm"
                >
                  <Component />
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </Container>
    </>
  )
}
