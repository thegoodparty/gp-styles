import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/button';
import { Toaster } from '../../components/ui/sonner';
import { toast } from 'sonner';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast('Scheduled: Catch up', {
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked'),
          },
        });
      }}
    >
      Add to calendar
    </Button>
  );
}

export const Default: Story = {
  render: () => (
    <>
      <ToastDemo />
      <Toaster />
    </>
  ),
};

function ToastWithDescription() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.error('Uh oh! Something went wrong.', {
          description: 'There was a problem with your request.',
          action: {
            label: 'Try again',
            onClick: () => console.log('Try again clicked'),
          },
        });
      }}
    >
      Show Toast
    </Button>
  );
}

export const WithDescription: Story = {
  render: () => (
    <>
      <ToastWithDescription />
      <Toaster />
    </>
  ),
};

function ToastWithAction() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast.success('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked'),
          },
        });
      }}
    >
      Show Toast
    </Button>
  );
}

export const WithAction: Story = {
  render: () => (
    <>
      <ToastWithAction />
      <Toaster />
    </>
  ),
}; 