import type { StoryObj } from '@storybook/react';
import { Tooltip } from '../src/components/overlays/tooltip';
declare const meta: Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithIcon: Story;
export declare const Multiple: Story;
