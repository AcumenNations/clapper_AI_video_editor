import { FormSection } from "@/components/forms/FormSection"
import { useSettings } from "@/services/settings"
import { ComputeProvider } from "@/types"

import { FormSelect } from "../forms/FormSelect"
import { availableComputeProvidersForAssistant, computeProviderShortNames } from "./constants"

export function SettingsSectionAssistant() {
  const assistantProvider = useSettings(s => s.assistantProvider)
  const setAssistantProvider = useSettings(s => s.setAssistantProvider)

  return (
    <div className="flex flex-col space-y-6 justify-between">
      <FormSection label="AI Assistant">

        <FormSelect<ComputeProvider>
          label="Assistant provider"
          selectedItemId={assistantProvider}
          selectedItemLabel={
            computeProviderShortNames[assistantProvider]
            || ComputeProvider.NONE
          }
          items={availableComputeProvidersForAssistant.map(provider => ({
            id: provider,
            label: computeProviderShortNames[provider] || "(missing name)",
            disabled: false,
            value: provider,
          }))}
          onSelect={setAssistantProvider}
          horizontal
        />

      </FormSection>
    </div>
  )
}