import type { Meta, StoryObj } from '@storybook/react'
import { BarPlot } from '@edgar-treischl/dash-ui'
import { useState } from 'react'
import './RetentionViewExample.css'

// Type definitions for school data
type SchoolType = 'GS' | 'MS' | 'RS' | 'GY' | 'IGS'
type SchoolYear = '2022/23' | '2023/24' | '2024/25'

// Constants for styling
const SCHOOL_TYPE_LABELS: Record<SchoolType, string> = {
  GS: 'Grundschule',
  MS: 'Mittelschule',
  RS: 'Realschule',
  GY: 'Gymnasium',
  IGS: 'Integrierte Gesamtschule',
}

const SCHOOL_TYPE_COLORS: Record<SchoolType, string> = {
  GS: '#FF6B6B',
  MS: '#4ECDC4',
  RS: '#45B7D1',
  GY: '#FFA07A',
  IGS: '#98D8C8',
}

const SCHOOL_TYPES: SchoolType[] = ['GS', 'MS', 'RS', 'GY', 'IGS']

// Sample data by year
const DATA_BY_YEAR: Record<SchoolYear, Array<{ type: SchoolType; count: number; percent: number }>> = {
  '2022/23': [
    { type: 'GS', count: 150, percent: 8.5 },
    { type: 'MS', count: 95, percent: 6.2 },
    { type: 'RS', count: 45, percent: 3.8 },
    { type: 'GY', count: 22, percent: 1.5 },
    { type: 'IGS', count: 18, percent: 2.1 },
  ],
  '2023/24': [
    { type: 'GS', count: 165, percent: 9.2 },
    { type: 'MS', count: 102, percent: 6.8 },
    { type: 'RS', count: 52, percent: 4.1 },
    { type: 'GY', count: 25, percent: 1.8 },
    { type: 'IGS', count: 20, percent: 2.3 },
  ],
  '2024/25': [
    { type: 'GS', count: 172, percent: 9.8 },
    { type: 'MS', count: 108, percent: 7.1 },
    { type: 'RS', count: 58, percent: 4.5 },
    { type: 'GY', count: 28, percent: 2.0 },
    { type: 'IGS', count: 22, percent: 2.6 },
  ],
}

/**
 * RetentionViewExample demonstrates how to build a complete view layout
 * combining the BarPlot component with controls, legend, and statistics.
 *
 * Key features:
 * - Interactive year selection
 * - BarPlot component for data visualization
 * - Color-coded legend for school types
 * - Year-over-year change statistics
 * - Responsive layout with chart and sidebar
 */
function RetentionViewExampleComponent() {
  const [selectedYear, setSelectedYear] = useState<SchoolYear>('2024/25')

  // Get data for selected year
  const yearData = DATA_BY_YEAR[selectedYear]

  // Calculate year-over-year changes
  const getPreviousYear = (year: SchoolYear): SchoolYear | null => {
    const yearMap = { '2022/23': null, '2023/24': '2022/23', '2024/25': '2023/24' }
    return yearMap[year]
  }

  const calculateYoYChange = (schoolType: SchoolType): number | null => {
    const prevYear = getPreviousYear(selectedYear)
    if (!prevYear) return null

    const currentData = DATA_BY_YEAR[selectedYear].find((d) => d.type === schoolType)
    const previousData = DATA_BY_YEAR[prevYear].find((d) => d.type === schoolType)

    if (!currentData || !previousData) return null
    return currentData.percent - previousData.percent
  }

  const yoyChanges = SCHOOL_TYPES.map((schoolType) => ({
    type: schoolType,
    change: calculateYoYChange(schoolType),
  }))

  return (
    <div className="retention-view-example">
      {/* Main layout section */}
      <section className="retention-view-example__layout">
        {/* Left column: Chart and controls */}
        <div className="retention-view-example__left-column">
          <div className="retention-view-example__card">
            {/* Year selector control */}
            <div className="retention-view-example__controls">
              <label htmlFor="year-select" className="retention-view-example__control-label">
                Schuljahr wählen:
              </label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value as SchoolYear)}
                className="retention-view-example__select"
              >
                <option value="2022/23">2022/23</option>
                <option value="2023/24">2023/24</option>
                <option value="2024/25">2024/25</option>
              </select>
            </div>

            {/* Chart */}
            <div className="retention-view-example__chart-container">
              <BarPlot data={yearData} year={selectedYear} />
            </div>

            {/* Legend */}
            <div className="retention-view-example__legend">
              <div className="retention-view-example__legend-title">Schularten</div>
              <ul className="retention-view-example__legend-list">
                {SCHOOL_TYPES.map((schoolType) => (
                  <li key={schoolType} className="retention-view-example__legend-item">
                    <span
                      className="retention-view-example__legend-swatch"
                      style={{ backgroundColor: SCHOOL_TYPE_COLORS[schoolType] }}
                    />
                    <span className="retention-view-example__legend-text">
                      {schoolType} ({SCHOOL_TYPE_LABELS[schoolType]})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right column: Interpretation */}
        <div className="retention-view-example__right-column">
          <div className="retention-view-example__interpretation-box">
            <h3 className="retention-view-example__interpretation-title">Befund</h3>
            <p className="retention-view-example__interpretation-text">
              Wie unterscheiden sich Schularten nach Wiederholungsquoten? Das Balkendiagramm zeigt die Anteile der
              Schülerinnen und Schüler, die in verschiedenen Schultypen in Bayern Klassen wiederholen.
            </p>
            <ul className="retention-view-example__interpretation-list">
              <li>
                <strong>Grundschulen:</strong> Mit {yearData[0]?.percent}% Wiederholungsquote die höchste Quote aller
                Schularten.
              </li>
              <li>
                <strong>Mittelschulen:</strong> Mit {yearData[1]?.percent}% deutlich niedriger als Grundschulen.
              </li>
              <li>
                <strong>Gymnasien:</strong> Mit {yearData[3]?.percent}% die niedrigste Wiederholungsquote.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statistics section */}
      <section className="retention-view-example__stats-section">
        <h3 className="retention-view-example__stats-title">Trend im Vergleich zum Vorjahr</h3>
        <div className="retention-view-example__stats-grid">
          {yoyChanges.map(({ type, change }) => (
            <div key={type} className="retention-view-example__stat-card">
              <span className="retention-view-example__stat-label">{type}</span>
              <strong
                className={`retention-view-example__stat-value ${
                  change === null
                    ? 'neutral'
                    : change > 0
                      ? 'increase'
                      : change < 0
                        ? 'decrease'
                        : 'neutral'
                }`}
              >
                {change === null ? 'N/A' : `${change > 0 ? '+' : ''}${change.toFixed(1)}%`}
              </strong>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const meta: Meta<typeof RetentionViewExampleComponent> = {
  title: 'Views/Retention View Example',
  component: RetentionViewExampleComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Example of building a complete view layout that combines the BarPlot component with controls, legend, statistics, and interpretation. This demonstrates the pattern used in RetentionPage.tsx.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InteractiveExample: Story = {
  render: () => <RetentionViewExampleComponent />,
}
