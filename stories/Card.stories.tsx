import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../src/components/layout/card';
import { Button } from '../src/components/ui/button';

const meta = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A simpler card without description or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <div className="h-48 bg-gradient-to-r from-primary to-secondary" />
      <CardHeader>
        <CardTitle>Featured Content</CardTitle>
        <CardDescription>
          Cards can include images or any other content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>The gradient above simulates an image placeholder.</p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card className="w-[350px] cursor-pointer transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          This card has hover effects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hover over this card to see the shadow effect.</p>
      </CardContent>
    </Card>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Card {i}</CardTitle>
            <CardDescription>
              Description for card {i}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here...</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Parent Card</CardTitle>
        <CardDescription>This card contains another card</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>Some content before the nested card.</p>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Nested Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This is a card inside another card.</p>
          </CardContent>
        </Card>
        <p>Some content after the nested card.</p>
      </CardContent>
    </Card>
  ),
};

