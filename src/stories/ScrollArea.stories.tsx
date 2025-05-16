import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '../../components/ui/scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <div key={tag} className="text-sm">
          {tag}
        </div>
      ))}
    </ScrollArea>
  ),
};

export const WithHorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="flex space-x-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-[200px] w-[200px] shrink-0 rounded-md border bg-muted"
          />
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithBothScrolls: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="flex space-x-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="space-y-2">
            {Array.from({ length: 20 }).map((_, j) => (
              <div
                key={j}
                className="h-[100px] w-[200px] shrink-0 rounded-md border bg-muted"
              />
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}; 