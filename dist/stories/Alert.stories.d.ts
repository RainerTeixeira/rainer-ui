import type { StoryObj } from '@storybook/react';
declare const meta: Meta<import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("class-variance-authority").VariantProps<(props?: {
    variant?: "success" | "warning" | "info" | "default" | "destructive";
} & import("class-variance-authority/types").ClassProp) => string> & import("react").RefAttributes<HTMLDivElement>>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Destructive: Story;
export declare const WithIcon: Story;
export declare const TitleOnly: Story;
