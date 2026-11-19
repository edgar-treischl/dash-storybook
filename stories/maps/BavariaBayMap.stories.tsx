import type { Meta, StoryObj } from "@storybook/react";
import { BavariaBayMap } from "@edgar-treischl/dash-ui";
import type { BavariaBayMapProps } from "@edgar-treischl/dash-ui";
import { districtData } from "../../src/data/districtData";

const meta: Meta<typeof BavariaBayMap> = {
  title: "Maps/Bavaria Region Map",
  component: BavariaBayMap,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", background: "var(--bydash-bg, #fff)" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    selectedMetric: {
      description: "Education metric to visualize",
      control: { type: "select" },
      options: [
        "students",
        "avgClassSize",
        "schools",
        "studentTeacherRatio",
        "teachersFTE",
        "migrantPercent",
      ],
    },
    showLegend: {
      description: "Whether to show the color scale legend",
      control: { type: "boolean" },
    },
    width: {
      description: "SVG width in pixels",
      control: { type: "number" },
    },
    height: {
      description: "SVG height in pixels",
      control: { type: "number" },
    },
    onDistrictHover: {
      description: "Callback fired when user hovers over a district",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StudentCount: Story = {
  args: {
    data: districtData,
    selectedMetric: "students",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays the percentage of students in each Bavarian district. Darker blue indicates higher student concentration.",
      },
    },
  },
};

export const AverageClassSize: Story = {
  args: {
    data: districtData,
    selectedMetric: "avgClassSize",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Visualizes average class size across districts. Useful for understanding resource distribution and class management.",
      },
    },
  },
};

export const NumberOfSchools: Story = {
  args: {
    data: districtData,
    selectedMetric: "schools",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the number of schools in each district. Helps identify areas with higher educational infrastructure.",
      },
    },
  },
};

export const StudentTeacherRatio: Story = {
  args: {
    data: districtData,
    selectedMetric: "studentTeacherRatio",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Displays the student-to-teacher ratio by district. Lower ratios indicate better teacher-to-student support.",
      },
    },
  },
};

export const TeachersFTE: Story = {
  args: {
    data: districtData,
    selectedMetric: "teachersFTE",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Visualizes the number of full-time equivalent (FTE) teachers across districts.",
      },
    },
  },
};

export const MigrationBackground: Story = {
  args: {
    data: districtData,
    selectedMetric: "migrantPercent",
    showLegend: true,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the percentage of students with a migration background in each district. Important for understanding demographic diversity.",
      },
    },
  },
};

export const WithoutLegend: Story = {
  args: {
    data: districtData,
    selectedMetric: "students",
    showLegend: false,
    width: 900,
    height: 750,
  },
  parameters: {
    docs: {
      description: {
        story: "Same map without the color scale legend.",
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    data: districtData,
    selectedMetric: "avgClassSize",
    showLegend: true,
    width: 1000,
    height: 850,
  },
  parameters: {
    docs: {
      description: {
        story: "Larger map size for better visibility and interaction.",
      },
    },
  },
};

export const InteractiveHover: Story = {
  args: {
    data: districtData,
    selectedMetric: "schools",
    showLegend: true,
    width: 900,
    height: 750,
    onDistrictHover: (districtKey, value) => {
      if (districtKey) {
        console.log(`Hovered over: ${districtKey}, Value: ${value}`);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive map with hover callbacks. Check the console when hovering over districts to see the callback in action.",
      },
    },
  },
};
