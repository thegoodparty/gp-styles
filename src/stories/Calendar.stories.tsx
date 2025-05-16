import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../../components/ui/calendar';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const WithRange: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(),
      to: new Date(),
    });
    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [date, setDate] = useState<Date[] | undefined>([new Date()]);
    return (
      <Calendar
        mode="multiple"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
}; 