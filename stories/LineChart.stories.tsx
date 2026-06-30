import type { Meta, StoryObj } from "@storybook/react";
import { LineChart } from "@edgar-treischl/dash-ui";
import type { RetentionDatum } from "@edgar-treischl/dash-ui";

const meta: Meta<typeof LineChart> = {
  title: 'Graphs/LineChart',
  component: LineChart,
  parameters: {
    docs: {
      description: {
        component: 'Multi-series line chart for visualizing retention trends over time by school type',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    minYear: {
      description: 'Minimum year to display on chart',
      control: { type: 'number' },
    },
    maxYear: {
      description: 'Maximum year to display on chart',
      control: { type: 'number' },
    },
    data: {
      description: 'Map of school types to retention data points over time',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Sample data: Retention trends across school types
const createRetentionData = (): Map<string, RetentionDatum[]> => {
  const data = new Map<string, RetentionDatum[]>()
  
  // GS - Grundschule (primary school)
  data.set('GS', [
    { syear: '2020/21', stype: 'GS', group: 'All', number: 120, year: '2020', n_overall: 150, percent: 80 },
    { syear: '2021/22', stype: 'GS', group: 'All', number: 135, year: '2021', n_overall: 160, percent: 84 },
    { syear: '2022/23', stype: 'GS', group: 'All', number: 145, year: '2022', n_overall: 170, percent: 85 },
    { syear: '2023/24', stype: 'GS', group: 'All', number: 155, year: '2023', n_overall: 180, percent: 86 },
    { syear: '2024/25', stype: 'GS', group: 'All', number: 165, year: '2024', n_overall: 190, percent: 87 },
  ])

  // MS - Mittel-/Hauptschule (middle school)
  data.set('MS', [
    { syear: '2020/21', stype: 'MS', group: 'All', number: 45, year: '2020', n_overall: 100, percent: 45 },
    { syear: '2021/22', stype: 'MS', group: 'All', number: 50, year: '2021', n_overall: 110, percent: 45 },
    { syear: '2022/23', stype: 'MS', group: 'All', number: 55, year: '2022', n_overall: 120, percent: 46 },
    { syear: '2023/24', stype: 'MS', group: 'All', number: 60, year: '2023', n_overall: 130, percent: 46 },
    { syear: '2024/25', stype: 'MS', group: 'All', number: 65, year: '2024', n_overall: 140, percent: 46 },
  ])

  // RS - Realschule (secondary school)
  data.set('RS', [
    { syear: '2020/21', stype: 'RS', group: 'All', number: 30, year: '2020', n_overall: 80, percent: 37.5 },
    { syear: '2021/22', stype: 'RS', group: 'All', number: 35, year: '2021', n_overall: 85, percent: 41 },
    { syear: '2022/23', stype: 'RS', group: 'All', number: 40, year: '2022', n_overall: 90, percent: 44 },
    { syear: '2023/24', stype: 'RS', group: 'All', number: 45, year: '2023', n_overall: 95, percent: 47 },
    { syear: '2024/25', stype: 'RS', group: 'All', number: 50, year: '2024', n_overall: 100, percent: 50 },
  ])

  // GY - Gymnasium (grammar school)
  data.set('GY', [
    { syear: '2020/21', stype: 'GY', group: 'All', number: 15, year: '2020', n_overall: 60, percent: 25 },
    { syear: '2021/22', stype: 'GY', group: 'All', number: 16, year: '2021', n_overall: 65, percent: 24.6 },
    { syear: '2022/23', stype: 'GY', group: 'All', number: 18, year: '2022', n_overall: 70, percent: 25.7 },
    { syear: '2023/24', stype: 'GY', group: 'All', number: 20, year: '2023', n_overall: 75, percent: 26.7 },
    { syear: '2024/25', stype: 'GY', group: 'All', number: 22, year: '2024', n_overall: 80, percent: 27.5 },
  ])

  // IGS - Integrierte Gesamtschule (integrated comprehensive school)
  data.set('IGS', [
    { syear: '2020/21', stype: 'IGS', group: 'All', number: 25, year: '2020', n_overall: 70, percent: 35.7 },
    { syear: '2021/22', stype: 'IGS', group: 'All', number: 28, year: '2021', n_overall: 75, percent: 37.3 },
    { syear: '2022/23', stype: 'IGS', group: 'All', number: 32, year: '2022', n_overall: 80, percent: 40 },
    { syear: '2023/24', stype: 'IGS', group: 'All', number: 36, year: '2023', n_overall: 85, percent: 42.4 },
    { syear: '2024/25', stype: 'IGS', group: 'All', number: 40, year: '2024', n_overall: 90, percent: 44.4 },
  ])

  return data
}

export const Default: Story = {
  args: {
    data: createRetentionData(),
    minYear: 2020,
    maxYear: 2024,
  },
}

export const UpwardTrend: Story = {
  args: {
    minYear: 2019,
    maxYear: 2024,
    data: (() => {
      const data = new Map<string, RetentionDatum[]>()
      data.set('GS', [
        { syear: '2019/20', stype: 'GS', group: 'All', number: 100, year: '2019', n_overall: 140, percent: 71 },
        { syear: '2020/21', stype: 'GS', group: 'All', number: 120, year: '2020', n_overall: 150, percent: 80 },
        { syear: '2021/22', stype: 'GS', group: 'All', number: 145, year: '2021', n_overall: 165, percent: 88 },
        { syear: '2022/23', stype: 'GS', group: 'All', number: 175, year: '2022', n_overall: 200, percent: 87 },
        { syear: '2023/24', stype: 'GS', group: 'All', number: 210, year: '2023', n_overall: 235, percent: 89 },
        { syear: '2024/25', stype: 'GS', group: 'All', number: 245, year: '2024', n_overall: 275, percent: 89 },
      ])
      data.set('MS', [
        { syear: '2019/20', stype: 'MS', group: 'All', number: 35, year: '2019', n_overall: 85, percent: 41 },
        { syear: '2020/21', stype: 'MS', group: 'All', number: 45, year: '2020', n_overall: 100, percent: 45 },
        { syear: '2021/22', stype: 'MS', group: 'All', number: 60, year: '2021', n_overall: 125, percent: 48 },
        { syear: '2022/23', stype: 'MS', group: 'All', number: 80, year: '2022', n_overall: 160, percent: 50 },
        { syear: '2023/24', stype: 'MS', group: 'All', number: 105, year: '2023', n_overall: 200, percent: 52 },
        { syear: '2024/25', stype: 'MS', group: 'All', number: 135, year: '2024', n_overall: 250, percent: 54 },
      ])
      data.set('RS', [
        { syear: '2019/20', stype: 'RS', group: 'All', number: 20, year: '2019', n_overall: 70, percent: 28 },
        { syear: '2020/21', stype: 'RS', group: 'All', number: 30, year: '2020', n_overall: 80, percent: 37 },
        { syear: '2021/22', stype: 'RS', group: 'All', number: 45, year: '2021', n_overall: 95, percent: 47 },
        { syear: '2022/23', stype: 'RS', group: 'All', number: 65, year: '2022', n_overall: 120, percent: 54 },
        { syear: '2023/24', stype: 'RS', group: 'All', number: 90, year: '2023', n_overall: 155, percent: 58 },
        { syear: '2024/25', stype: 'RS', group: 'All', number: 120, year: '2024', n_overall: 195, percent: 61 },
      ])
      data.set('GY', [
        { syear: '2019/20', stype: 'GY', group: 'All', number: 10, year: '2019', n_overall: 50, percent: 20 },
        { syear: '2020/21', stype: 'GY', group: 'All', number: 15, year: '2020', n_overall: 60, percent: 25 },
        { syear: '2021/22', stype: 'GY', group: 'All', number: 22, year: '2021', n_overall: 75, percent: 29 },
        { syear: '2022/23', stype: 'GY', group: 'All', number: 32, year: '2022', n_overall: 100, percent: 32 },
        { syear: '2023/24', stype: 'GY', group: 'All', number: 45, year: '2023', n_overall: 135, percent: 33 },
        { syear: '2024/25', stype: 'GY', group: 'All', number: 60, year: '2024', n_overall: 175, percent: 34 },
      ])
      data.set('IGS', [
        { syear: '2019/20', stype: 'IGS', group: 'All', number: 18, year: '2019', n_overall: 60, percent: 30 },
        { syear: '2020/21', stype: 'IGS', group: 'All', number: 25, year: '2020', n_overall: 70, percent: 35 },
        { syear: '2021/22', stype: 'IGS', group: 'All', number: 36, year: '2021', n_overall: 85, percent: 42 },
        { syear: '2022/23', stype: 'IGS', group: 'All', number: 50, year: '2022', n_overall: 110, percent: 45 },
        { syear: '2023/24', stype: 'IGS', group: 'All', number: 68, year: '2023', n_overall: 145, percent: 46 },
        { syear: '2024/25', stype: 'IGS', group: 'All', number: 90, year: '2024', n_overall: 185, percent: 48 },
      ])
      return data
    })(),
  },
}

export const DownwardTrend: Story = {
  args: {
    minYear: 2020,
    maxYear: 2024,
    data: (() => {
      const data = new Map<string, RetentionDatum[]>()
      data.set('GS', [
        { syear: '2020/21', stype: 'GS', group: 'All', number: 200, year: '2020', n_overall: 220, percent: 90 },
        { syear: '2021/22', stype: 'GS', group: 'All', number: 180, year: '2021', n_overall: 215, percent: 83 },
        { syear: '2022/23', stype: 'GS', group: 'All', number: 160, year: '2022', n_overall: 210, percent: 76 },
        { syear: '2023/24', stype: 'GS', group: 'All', number: 140, year: '2023', n_overall: 205, percent: 68 },
        { syear: '2024/25', stype: 'GS', group: 'All', number: 120, year: '2024', n_overall: 200, percent: 60 },
      ])
      data.set('MS', [
        { syear: '2020/21', stype: 'MS', group: 'All', number: 90, year: '2020', n_overall: 120, percent: 75 },
        { syear: '2021/22', stype: 'MS', group: 'All', number: 75, year: '2021', n_overall: 120, percent: 62 },
        { syear: '2022/23', stype: 'MS', group: 'All', number: 60, year: '2022', n_overall: 120, percent: 50 },
        { syear: '2023/24', stype: 'MS', group: 'All', number: 48, year: '2023', n_overall: 120, percent: 40 },
        { syear: '2024/25', stype: 'MS', group: 'All', number: 36, year: '2024', n_overall: 120, percent: 30 },
      ])
      data.set('RS', [
        { syear: '2020/21', stype: 'RS', group: 'All', number: 70, year: '2020', n_overall: 100, percent: 70 },
        { syear: '2021/22', stype: 'RS', group: 'All', number: 60, year: '2021', n_overall: 100, percent: 60 },
        { syear: '2022/23', stype: 'RS', group: 'All', number: 50, year: '2022', n_overall: 100, percent: 50 },
        { syear: '2023/24', stype: 'RS', group: 'All', number: 40, year: '2023', n_overall: 100, percent: 40 },
        { syear: '2024/25', stype: 'RS', group: 'All', number: 30, year: '2024', n_overall: 100, percent: 30 },
      ])
      data.set('GY', [
        { syear: '2020/21', stype: 'GY', group: 'All', number: 50, year: '2020', n_overall: 80, percent: 62 },
        { syear: '2021/22', stype: 'GY', group: 'All', number: 45, year: '2021', n_overall: 80, percent: 56 },
        { syear: '2022/23', stype: 'GY', group: 'All', number: 40, year: '2022', n_overall: 80, percent: 50 },
        { syear: '2023/24', stype: 'GY', group: 'All', number: 35, year: '2023', n_overall: 80, percent: 43 },
        { syear: '2024/25', stype: 'GY', group: 'All', number: 30, year: '2024', n_overall: 80, percent: 37 },
      ])
      data.set('IGS', [
        { syear: '2020/21', stype: 'IGS', group: 'All', number: 55, year: '2020', n_overall: 90, percent: 61 },
        { syear: '2021/22', stype: 'IGS', group: 'All', number: 48, year: '2021', n_overall: 90, percent: 53 },
        { syear: '2022/23', stype: 'IGS', group: 'All', number: 42, year: '2022', n_overall: 90, percent: 46 },
        { syear: '2023/24', stype: 'IGS', group: 'All', number: 36, year: '2023', n_overall: 90, percent: 40 },
        { syear: '2024/25', stype: 'IGS', group: 'All', number: 30, year: '2024', n_overall: 90, percent: 33 },
      ])
      return data
    })(),
  },
}

export const SingleSchoolType: Story = {
  args: {
    minYear: 2020,
    maxYear: 2024,
    data: (() => {
      const data = new Map<string, RetentionDatum[]>()
      data.set('GS', [
        { syear: '2020/21', stype: 'GS', group: 'All', number: 120, year: '2020', n_overall: 150, percent: 80 },
        { syear: '2021/22', stype: 'GS', group: 'All', number: 135, year: '2021', n_overall: 160, percent: 84 },
        { syear: '2022/23', stype: 'GS', group: 'All', number: 145, year: '2022', n_overall: 170, percent: 85 },
        { syear: '2023/24', stype: 'GS', group: 'All', number: 155, year: '2023', n_overall: 180, percent: 86 },
        { syear: '2024/25', stype: 'GS', group: 'All', number: 165, year: '2024', n_overall: 190, percent: 87 },
      ])
      return data
    })(),
  },
}
