import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../../components/ui/progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => <Progress value={33} />,
};

export const WithValue: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => <Progress />,
}; 