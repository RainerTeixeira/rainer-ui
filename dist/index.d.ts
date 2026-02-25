export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, COMPONENT_CLASSES, Tokens as DesignTokens, MOTION, SECTION_CLASSES, cn, darkTokens as darkTheme, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getContrastColor, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getThemeColors, getTokenColor, isValidHex, lightTokens as lightTheme, motion, motionPresets, motionSemantic, overlayFromToken, tokens } from './lib/tokens.js';
export { ClassValue } from 'clsx';
export { Avatar, AvatarFallback, AvatarImage, AvatarProps } from './components/ui/avatar.js';
export { Input, InputProps } from './components/ui/input.js';
export { Textarea, TextareaProps } from './components/ui/textarea.js';
export { Button, ButtonProps, buttonVariants } from './components/ui/button.js';
export { Slider } from './components/ui/slider.js';
export { Switch } from './components/ui/switch.js';
export { Toggle, toggleVariants } from './components/ui/toggle.js';
export { IconButton, IconButtonProps } from './components/ui/icon-button.js';
export { LinkButton, LinkButtonProps } from './components/ui/link-button.js';
export { FAB, FABGroup, FABGroupProps, FABProps } from './components/ui/fab.js';
export { SegmentedControl, SegmentedControlItem, SegmentedControlItemProps, SegmentedControlProps, SegmentedOption } from './components/ui/segmented-control.js';
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card.js';
export { Badge, BadgeProps, badgeVariants } from './components/ui/badge.js';
export { Progress } from './components/ui/progress.js';
export { InlineLoader } from './components/ui/InlineLoader.js';
export { ThemeToggle } from './components/utilities/ThemeToggle.js';
export { Checkbox } from './components/forms/checkbox.js';
export { Label } from './components/forms/label.js';
export { RadioGroup, RadioGroupItem } from './components/forms/radio-group.js';
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from './components/forms/select.js';
export { FileItem, FileUpload, FileUploadProps } from './components/forms/file-upload.js';
export { DatePicker, DatePickerProps, DateRange } from './components/forms/date-picker.js';
export { TimePicker, TimePickerProps, TimeValue } from './components/forms/time-picker.js';
export { RangeSlider, RangeSliderProps, RangeValue } from './components/forms/range-slider.js';
export { SearchInput, SearchInputProps, SearchSuggestion } from './components/forms/search-input.js';
export { Country, PhoneInput, PhoneInputProps } from './components/forms/phone-input.js';
export { PageHeader } from './components/layout/PageHeader.js';
export { AppLayout, AppLayoutContent, AppLayoutContentProps, AppLayoutProps, AppLayoutSection, AppLayoutSectionProps } from './components/layout/app-layout.js';
export { AspectRatio } from './components/layout/aspect-ratio.js';
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './components/layout/breadcrumb.js';
export { ScrollArea, ScrollBar } from './components/layout/scroll-area.js';
export { Separator } from './components/layout/separator.js';
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './components/layout/sheet.js';
export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './components/layout/table.js';
export { Container, ContainerFluid, ContainerFluidProps, ContainerProps, ContainerSection, ContainerSectionProps } from './components/layout/container.js';
export { Grid, GridItem, GridItemProps, GridProps } from './components/layout/grid.js';
export { Flex, FlexBetween, FlexBetweenProps, FlexCenter, FlexCenterProps, FlexColumn, FlexColumnProps, FlexEnd, FlexEndProps, FlexProps, FlexRow, FlexRowProps, FlexStart, FlexStartProps } from './components/layout/flex.js';
export { HorizontalSpacer, HorizontalSpacerProps, Spacer, SpacerProps, VerticalSpacer, VerticalSpacerProps } from './components/layout/spacer.js';
export { Divider, DividerProps, SectionDivider, SectionDividerProps, TextDivider, TextDividerProps } from './components/layout/divider.js';
export { Panel, PanelContent, PanelContentProps, PanelDescription, PanelDescriptionProps, PanelFooter, PanelFooterProps, PanelGroup, PanelGroupProps, PanelHeader, PanelHeaderProps, PanelProps, PanelTitle, PanelTitleProps } from './components/layout/panel.js';
export { Alert, AlertDescription, AlertTitle } from './components/feedback/alert.js';
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger } from './components/feedback/alert-dialog.js';
export { Skeleton } from './components/feedback/skeleton.js';
export { Toaster } from './components/feedback/sonner.js';
export { DotsSpinner, DotsSpinnerProps, PulseSpinner, PulseSpinnerProps, Spinner, SpinnerOverlay, SpinnerOverlayProps, SpinnerProps } from './components/feedback/spinner.js';
export { KPI, KPIChart, KPIChartProps, KPIGrid, KPIGridProps, KPIProps } from './components/feedback/kpi.js';
export { EmptyState, EmptyStateIllustrated, EmptyStateIllustratedProps, EmptyStatePatterns, EmptyStateProps } from './components/feedback/empty-state.js';
export { Notification, NotificationGroup, NotificationGroupProps, NotificationProps, NotificationProvider, NotificationProviderProps, NotificationToast, NotificationToastProps, UseNotificationOptions, useNotification } from './components/feedback/notification.js';
export { BackToTop, BackToTopButton } from './components/navigation/BackToTop.js';
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/navigation/accordion.js';
export { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/navigation/collapsible.js';
export { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from './components/navigation/command.js';
export { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, navigationMenuTriggerStyle } from './components/navigation/navigation-menu.js';
export { Tabs, TabsContent, TabsList, TabsTrigger } from './components/navigation/tabs.js';
export { Menu, MenuBar, MenuBarProps, MenuItem, MenuProps, NavigationContextMenu, NavigationContextMenuProps } from './components/navigation/menu.js';
export { Pagination, PaginationCompact, PaginationCompactProps, PaginationInfo, PaginationInfoProps, PaginationProps } from './components/navigation/pagination.js';
export { Step, StepItem, StepItemProps, StepStatus, Steps, StepsProps } from './components/navigation/steps.js';
export { Sidebar, SidebarProps, SidebarTrigger, SidebarTriggerProps } from './components/navigation/sidebar.js';
export { TopBar, TopBarActions, TopBarActionsProps, TopBarProps, TopBarTitle, TopBarTitleProps } from './components/navigation/top-bar.js';
export { StatsCards, StatsCardsProps } from './components/dashboard/stats-cards.js';
export { QuickStats } from './components/dashboard/quick-stats.js';
export { QuickActions } from './components/dashboard/quick-actions.js';
export { AnalyticsOverview } from './components/dashboard/analytics-overview.js';
export { StatsOverview } from './components/dashboard/stats-overview.js';
export { RecentPostsList } from './components/dashboard/recent-posts-list.js';
export { HelpCenter } from './components/dashboard/help-center.js';
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from './components/overlays/context-menu.js';
export { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from './components/overlays/dialog.js';
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './components/overlays/dropdown-menu.js';
export { HoverCard, HoverCardContent, HoverCardTrigger } from './components/overlays/hover-card.js';
export { Popover, PopoverContent, PopoverTrigger } from './components/overlays/popover.js';
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/overlays/tooltip.js';
export { Modal, ModalContent, ModalContentProps, ModalFooter, ModalFooterProps, ModalHeader, ModalHeaderProps, ModalProps, ModalTrigger, ModalTriggerProps } from './components/overlays/modal.js';
export { Drawer, DrawerContent, DrawerContentProps, DrawerFooter, DrawerFooterProps, DrawerHeader, DrawerHeaderProps, DrawerProps, DrawerTrigger, DrawerTriggerProps } from './components/overlays/drawer.js';
export { Lightbox, LightboxItem, LightboxProps, MediaType } from './components/overlays/lightbox.js';
export { ConfirmDialog, ConfirmDialogProps, UseConfirmOptions, useConfirm } from './components/overlays/confirm-dialog.js';
export { Calendar, CalendarDayButton, CalendarProps } from './components/data-display/calendar.js';
export { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/data-display/carousel.js';
export { Chip, ChipGroup, ChipGroupProps, ChipProps } from './components/data-display/chip.js';
export { Masonry, MasonryItem, MasonryItemProps, MasonryProps } from './components/data-display/masonry.js';
export { Timeline, TimelineItem, TimelineItemProps, TimelineProps, TimelineSeparator, TimelineSeparatorProps } from './components/data-display/timeline.js';
export { Rating, RatingProgress, RatingProgressProps, RatingProps, RatingSummary, RatingSummaryProps } from './components/data-display/rating.js';
export { CelestialBackground } from './components/effects/CelestialBackground.js';
export { FloatingGrid } from './components/effects/FloatingGrid.js';
export { MatrixBackground } from './components/effects/MatrixBackground.js';
export { StarsBackground } from './components/effects/StarsBackground.js';
export { ParticlesEffect } from './components/effects/ParticlesEffect.js';
export { CookieBanner, useCookieConsent } from './components/compliance/CookieBanner.js';
export { ErrorBoundary } from './components/infrastructure/ErrorBoundary.js';
export { LoadingScreen } from './components/infrastructure/LoadingScreen.js';
export { InstallPrompt } from './components/pwa/InstallPrompt.js';
export { TokensDemo } from './components/development/TokensDemo.js';
export { Kbd, KbdCombo } from './components/content/Kbd.js';
export { Code, CodeBlock, CodeInline } from './components/content/Code.js';
export { Quote, QuoteBlock, QuoteTestimonial } from './components/content/Quote.js';
export { VisuallyHidden } from './components/accessibility/VisuallyHidden.js';
export { UpdateNotification } from './components/utilities/UpdateNotification.js';
export { ASPECT_RATIOS, AspectRatioBox, AspectRatioBoxProps, AspectRatioIframe, AspectRatioIframeProps, AspectRatioImage, AspectRatioImageProps, AspectRatioVideo, AspectRatioVideoProps } from './components/utilities/aspect-ratio-box.js';
export { Center, CenterInline, CenterInlineProps, CenterProps, CenterScreen, CenterScreenProps, CenterText, CenterTextProps } from './components/utilities/center.js';
export { BookmarkButton, LikeButton, ShareButton, SocialAction, SocialBar, SocialBarProps } from './components/social/social-bar.js';
export { ThemeProvider } from './components/providers/theme-provider.js';
export { TokensProvider } from './components/providers/tokens-provider.js';
export { useTheme } from './hooks/use-theme.js';
export { useCarouselKeyboard } from './hooks/use-carousel-keyboard.js';
export { usePWA } from './hooks/use-pwa.js';
export { useTableOfContents } from './hooks/use-table-of-contents.js';
export { Toaster as Sonner, ToasterProps } from 'sonner';
import '@rainersoft/design-tokens/formats/tokens.json';
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
