export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, Tokens as DesignTokens, MOTION, SECTION_CLASSES, cn, darkTokens as darkTheme, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getContrastColor, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getThemeColors, getTokenColor, isValidHex, lightTokens as lightTheme, motion, motionPresets, motionSemantic, overlayFromToken } from './lib/tokens.mjs';
export { ClassValue } from 'clsx';
export { Avatar, AvatarFallback, AvatarImage, AvatarProps } from './components/ui/avatar.mjs';
export { Input, InputProps } from './components/ui/input.mjs';
export { Textarea, TextareaProps } from './components/ui/textarea.mjs';
export { Button, ButtonProps, buttonVariants } from './components/ui/button.mjs';
export { Slider } from './components/ui/slider.mjs';
export { Switch } from './components/ui/switch.mjs';
export { Toggle, toggleVariants } from './components/ui/toggle.mjs';
export { IconButton, IconButtonProps } from './components/ui/icon-button.mjs';
export { LinkButton, LinkButtonProps } from './components/ui/link-button.mjs';
export { FAB, FABGroup, FABGroupProps, FABProps } from './components/ui/fab.mjs';
export { SegmentedControl, SegmentedControlItem, SegmentedControlItemProps, SegmentedControlProps, SegmentedOption } from './components/ui/segmented-control.mjs';
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card.mjs';
export { Badge, BadgeProps, badgeVariants } from './components/ui/badge.mjs';
export { Progress } from './components/ui/progress.mjs';
export { InlineLoader } from './components/ui/InlineLoader.mjs';
export { ThemeToggle } from './components/utilities/ThemeToggle.mjs';
export { Checkbox } from './components/forms/checkbox.mjs';
export { Label } from './components/forms/label.mjs';
export { RadioGroup, RadioGroupItem } from './components/forms/radio-group.mjs';
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from './components/forms/select.mjs';
export { FileItem, FileUpload, FileUploadProps } from './components/forms/file-upload.mjs';
export { DatePicker, DatePickerProps, DateRange } from './components/forms/date-picker.mjs';
export { TimePicker, TimePickerProps, TimeValue } from './components/forms/time-picker.mjs';
export { RangeSlider, RangeSliderProps, RangeValue } from './components/forms/range-slider.mjs';
export { SearchInput, SearchInputProps, SearchSuggestion } from './components/forms/search-input.mjs';
export { Country, PhoneInput, PhoneInputProps } from './components/forms/phone-input.mjs';
export { PageHeader } from './components/layout/PageHeader.mjs';
export { AspectRatio } from './components/layout/aspect-ratio.mjs';
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './components/layout/breadcrumb.mjs';
export { ScrollArea, ScrollBar } from './components/layout/scroll-area.mjs';
export { Separator } from './components/layout/separator.mjs';
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './components/layout/sheet.mjs';
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './components/layout/table.mjs';
export { Container, ContainerFluid, ContainerFluidProps, ContainerProps, ContainerSection, ContainerSectionProps } from './components/layout/container.mjs';
export { Grid, GridItem, GridItemProps, GridProps } from './components/layout/grid.mjs';
export { Flex, FlexBetween, FlexBetweenProps, FlexCenter, FlexCenterProps, FlexColumn, FlexColumnProps, FlexEnd, FlexEndProps, FlexProps, FlexRow, FlexRowProps, FlexStart, FlexStartProps } from './components/layout/flex.mjs';
export { HorizontalSpacer, HorizontalSpacerProps, Spacer, SpacerProps, VerticalSpacer, VerticalSpacerProps } from './components/layout/spacer.mjs';
export { Divider, DividerProps, SectionDivider, SectionDividerProps, TextDivider, TextDividerProps } from './components/layout/divider.mjs';
export { Panel, PanelContent, PanelContentProps, PanelDescription, PanelDescriptionProps, PanelFooter, PanelFooterProps, PanelGroup, PanelGroupProps, PanelHeader, PanelHeaderProps, PanelProps, PanelTitle, PanelTitleProps } from './components/layout/panel.mjs';
export { Alert, AlertDescription, AlertTitle } from './components/feedback/alert.mjs';
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger } from './components/feedback/alert-dialog.mjs';
export { Skeleton } from './components/feedback/skeleton.mjs';
export { Toaster } from './components/feedback/sonner.mjs';
export { DotsSpinner, DotsSpinnerProps, PulseSpinner, PulseSpinnerProps, Spinner, SpinnerOverlay, SpinnerOverlayProps, SpinnerProps } from './components/feedback/spinner.mjs';
export { KPI, KPIChart, KPIChartProps, KPIGrid, KPIGridProps, KPIProps } from './components/feedback/kpi.mjs';
export { EmptyState, EmptyStateIllustrated, EmptyStateIllustratedProps, EmptyStatePatterns, EmptyStateProps } from './components/feedback/empty-state.mjs';
export { Notification, NotificationGroup, NotificationGroupProps, NotificationProps, NotificationProvider, NotificationProviderProps, NotificationToast, NotificationToastProps, UseNotificationOptions, useNotification } from './components/feedback/notification.mjs';
export { BackToTop, BackToTopButton } from './components/navigation/BackToTop.mjs';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/navigation/accordion.mjs';
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/navigation/collapsible.mjs';
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from './components/navigation/command.mjs';
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from './components/navigation/navigation-menu.mjs';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/navigation/tabs.mjs';
export { Menu, MenuBar, MenuBarProps, MenuItem, MenuProps, NavigationContextMenu, NavigationContextMenuProps } from './components/navigation/menu.mjs';
export { Pagination, PaginationCompact, PaginationCompactProps, PaginationInfo, PaginationInfoProps, PaginationProps } from './components/navigation/pagination.mjs';
export { Step, StepItem, StepItemProps, StepStatus, Steps, StepsProps } from './components/navigation/steps.mjs';
export { Sidebar, SidebarProps, SidebarTrigger, SidebarTriggerProps } from './components/navigation/sidebar.mjs';
export { TopBar, TopBarActions, TopBarActionsProps, TopBarProps, TopBarTitle, TopBarTitleProps } from './components/navigation/top-bar.mjs';
export { StatsCards, StatsCardsProps } from './components/dashboard/stats-cards.mjs';
export { default as QuickStats } from './components/dashboard/quick-stats.mjs';
export { QuickActions } from './components/dashboard/quick-actions.mjs';
export { AnalyticsOverview } from './components/dashboard/analytics-overview.mjs';
export { StatsOverview } from './components/dashboard/stats-overview.mjs';
export { RecentPostsList } from './components/dashboard/recent-posts-list.mjs';
export { HelpCenter } from './components/dashboard/help-center.mjs';
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from './components/overlays/context-menu.mjs';
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from './components/overlays/dialog.mjs';
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './components/overlays/dropdown-menu.mjs';
export { HoverCard, HoverCardContent, HoverCardTrigger } from './components/overlays/hover-card.mjs';
export { Popover, PopoverContent, PopoverTrigger } from './components/overlays/popover.mjs';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/overlays/tooltip.mjs';
export { Modal, ModalContent, ModalContentProps, ModalFooter, ModalFooterProps, ModalHeader, ModalHeaderProps, ModalProps, ModalTrigger, ModalTriggerProps } from './components/overlays/modal.mjs';
export { Drawer, DrawerContent, DrawerContentProps, DrawerFooter, DrawerFooterProps, DrawerHeader, DrawerHeaderProps, DrawerProps, DrawerTrigger, DrawerTriggerProps } from './components/overlays/drawer.mjs';
export { Lightbox, LightboxItem, LightboxProps, MediaType } from './components/overlays/lightbox.mjs';
export { ConfirmDialog, ConfirmDialogProps, UseConfirmOptions, useConfirm } from './components/overlays/confirm-dialog.mjs';
export { Calendar, CalendarDayButton, CalendarProps } from './components/data-display/calendar.mjs';
export { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/data-display/carousel.mjs';
export { Chip, ChipGroup, ChipGroupProps, ChipProps } from './components/data-display/chip.mjs';
export { Masonry, MasonryItem, MasonryItemProps, MasonryProps } from './components/data-display/masonry.mjs';
export { Timeline, TimelineItem, TimelineItemProps, TimelineProps, TimelineSeparator, TimelineSeparatorProps } from './components/data-display/timeline.mjs';
export { Rating, RatingProgress, RatingProgressProps, RatingProps, RatingSummary, RatingSummaryProps } from './components/data-display/rating.mjs';
export { default as CelestialBackground } from './components/effects/CelestialBackground.mjs';
export { default as FloatingGrid } from './components/effects/FloatingGrid.mjs';
export { MatrixBackground } from './components/effects/MatrixBackground.mjs';
export { StarsBackground } from './components/effects/StarsBackground.mjs';
export { ParticlesEffect } from './components/effects/ParticlesEffect.mjs';
export { CookieBanner, useCookieConsent } from './components/compliance/CookieBanner.mjs';
export { ErrorBoundary } from './components/infrastructure/ErrorBoundary.mjs';
export { LoadingScreen } from './components/infrastructure/LoadingScreen.mjs';
export { InstallPrompt } from './components/pwa/InstallPrompt.mjs';
export { TokensDemo } from './components/development/TokensDemo.mjs';
export { Kbd, KbdCombo } from './components/content/Kbd.mjs';
export { Code, CodeBlock, CodeInline } from './components/content/Code.mjs';
export { Quote, QuoteBlock, QuoteTestimonial } from './components/content/Quote.mjs';
export { VisuallyHidden } from './components/accessibility/VisuallyHidden.mjs';
export { UpdateNotification } from './components/utilities/UpdateNotification.mjs';
export { ASPECT_RATIOS, AspectRatioBox, AspectRatioBoxProps, AspectRatioIframe, AspectRatioIframeProps, AspectRatioImage, AspectRatioImageProps, AspectRatioVideo, AspectRatioVideoProps } from './components/utilities/aspect-ratio-box.mjs';
export { Center, CenterInline, CenterInlineProps, CenterProps, CenterScreen, CenterScreenProps, CenterText, CenterTextProps } from './components/utilities/center.mjs';
export { BookmarkButton, LikeButton, ShareButton, SocialAction, default as SocialBar, SocialBarProps } from './components/social/social-bar.mjs';
export { ThemeProvider } from './components/providers/theme-provider.mjs';
export { TokensProvider } from './components/providers/tokens-provider.mjs';
export { useTheme } from './hooks/use-theme.mjs';
export { useCarouselKeyboard } from './hooks/use-carousel-keyboard.mjs';
export { usePWA } from './hooks/use-pwa.mjs';
export { useTableOfContents } from './hooks/use-table-of-contents.mjs';
export { default as tokens } from '@rainersoft/design-tokens';
export { Toaster as Sonner, ToasterProps } from 'sonner';
import 'react';
import 'class-variance-authority/types';
import 'class-variance-authority';
import '@radix-ui/react-slider';
import '@radix-ui/react-switch';
import '@radix-ui/react-toggle';
import 'react/jsx-runtime';
import '@radix-ui/react-progress';
import '@radix-ui/react-checkbox';
import '@radix-ui/react-label';
import '@radix-ui/react-radio-group';
import '@radix-ui/react-select';
import 'lucide-react/dist/esm/icons/file';
import '@radix-ui/react-aspect-ratio';
import '@radix-ui/react-scroll-area';
import '@radix-ui/react-separator';
import '@radix-ui/react-dialog';
import '@radix-ui/react-alert-dialog';
import '@radix-ui/react-accordion';
import '@radix-ui/react-collapsible';
import '@radix-ui/react-navigation-menu';
import '@radix-ui/react-tabs';
import '@radix-ui/react-context-menu';
import '@radix-ui/react-dropdown-menu';
import '@radix-ui/react-hover-card';
import '@radix-ui/react-popover';
import '@radix-ui/react-tooltip';
import 'embla-carousel-react';
import 'lucide-react';
import 'next-themes';

/**
 * @rainersoft/ui - Biblioteca de Componentes UI Agnóstica
 *
 * 📦 ESTRUTURA SIMPLIFICADA - 5 CATEGORIAS PRINCIPAIS:
 *
 * 🎨 UI - Componentes Básicos
 *    Avatar, Button, Input, Badge, Slider, Toggle, Progress, Skeleton
 *
 * 📝 FORMS - Formulários
 *    Form, Input, Textarea, Select, Checkbox, Radio, Switch, Label
 *
 * 🏗️ LAYOUT - Layout
 *    Card, Sheet, Table, ScrollArea, Separator, AspectRatio
 *
 * 💬 FEEDBACK - Feedback
 *    Alert, AlertDialog, Toast, Badge, Progress, Skeleton
 *
 * 🧭 NAVIGATION - Navegação
 *    Accordion, Tabs, NavigationMenu, Collapsible, Command
 *
 * Extras: Overlays, Data Display, Effects, Utilities, Providers
 *
 * @module @rainersoft/ui
 * @author Rainer Teixeira
 * @version 2.3.0
 */

interface ThemeColors {
    primary?: string;
    primaryForeground?: string;
    secondary?: string;
    secondaryForeground?: string;
    background?: string;
    foreground?: string;
    muted?: string;
    mutedForeground?: string;
    border?: string;
    input?: string;
    ring?: string;
}
type ThemeMode = 'light' | 'dark' | 'system';

export type { ThemeColors, ThemeMode };
