import { settingsTabHeadList } from '@/assets/data'
import ProfileSettingsForm from '@/components/forms/ProfileSettingsForm'
import SecuritySettingsForm from '@/components/forms/SecuritySettingsForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import TabHead from '@/components/global/TabHead'
import { Tabs, TabsContent } from '@/components/ui/tabs'

export default function Settings() {
  const settingsFormComponents: Record<string, React.ComponentType> = {
    profile: ProfileSettingsForm,
    security: SecuritySettingsForm,
  }
  return (
    <>
      <PageTitle title="Account Settings" />
      <Container className="py-10 relative">
        <div className="space-y-7">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Account Settings
          </h1>
          <Tabs defaultValue="profile" className="space-y-2">
            <TabHead tabList={settingsTabHeadList} />

            {settingsTabHeadList.map(({ status }) => {
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
