import type { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet';
import { Button } from '../../components/ui/button';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Name</div>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Username</div>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Name</div>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Username</div>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithSize: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent className="w-[540px]">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Name</div>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <div className="text-right">Username</div>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 rounded-md border p-2"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save changes</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}; 