import {
  TeachersIcon,
  PupilsIcon,
  SelectIcon,
} from '@edgar-treischl/dash-ui';

const icons = [
  { name: 'TeachersIcon', component: TeachersIcon },
  { name: 'PupilsIcon', component: PupilsIcon },
  { name: 'SelectIcon', component: SelectIcon },
];

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '24px',
    padding: '24px',
    width: '100%',
    boxSizing: 'border-box' as const,
  },
  item: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    minHeight: '160px',
    padding: '24px 16px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
  },
  label: {
    padding: '6px 10px',
    borderRadius: '6px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    fontSize: '13px',
    fontFamily: 'monospace',
  },
};

export const IconsGrid = () => (
  <div style={styles.grid}>
    {icons.map(({ name, component: Icon }) => (
      <div key={name} style={styles.item}>
        <div style={styles.iconContainer}>
          <Icon width={64} height={64} />
        </div>

        <code style={styles.label}>{`<${name} />`}</code>
      </div>
    ))}
  </div>
);