import { memo, useState } from 'react'
import type { ReactNode } from 'react'
import './InterpretationBox.css'

type TabKey = string

type TabConfig = {
  label: string
  content: ReactNode
}

export type InterpretationBoxProps = {
  tabs: Record<TabKey, TabConfig>
  defaultTab?: TabKey
  title?: string
}

/**
 * InterpretationBox provides a tabbed interface for displaying
 * interpretations, findings, and explanatory content alongside data visualizations.
 *
 * @example
 * ```tsx
 * <InterpretationBox
 *   tabs={{
 *     findings: { label: 'Findings', content: <div>...</div> },
 *     notes: { label: 'Notes', content: <div>...</div> }
 *   }}
 *   defaultTab="findings"
 *   title="Interpretation"
 * />
 * ```
 */
function InterpretationBoxComponent({
  tabs,
  defaultTab,
  title = 'Interpretation',
}: InterpretationBoxProps) {
  const tabKeys = Object.keys(tabs) as TabKey[]
  const initialTab = defaultTab && tabKeys.includes(defaultTab) ? defaultTab : tabKeys[0]
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab)

  return (
    <div className="interpretation-box">
      <div className="interpretation-box__header">
        <h3 className="interpretation-box__title">{title}</h3>
      </div>

      {/* Tab Navigation */}
      <div className="interpretation-box__tabs">
        {tabKeys.map((tab) => (
          <button
            key={tab}
            className={`interpretation-box__tab ${
              activeTab === tab ? 'interpretation-box__tab--active' : ''
            }`}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tabs[tab].label}
          </button>
        ))}
      </div>

      <div className="interpretation-box__content">{tabs[activeTab].content}</div>
    </div>
  )
}

export const InterpretationBox = memo(InterpretationBoxComponent)
