import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../../components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  ),
};

export const WithRange: Story = {
  render: () => (
    <Slider
      defaultValue={[20, 80]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  ),
};

export const WithSteps: Story = {
  render: () => (
    <Slider
      defaultValue={[50]}
      max={100}
      step={10}
      className="w-[60%]"
    />
  ),
};

export const WithMarks: Story = {
  render: () => (
    <div className="space-y-4">
      <Slider
        defaultValue={[50]}
        max={100}
        step={10}
        className="w-[60%]"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  ),
}; 