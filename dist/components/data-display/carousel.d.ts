import * as class_variance_authority from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as React from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};
declare const Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLFieldSetElement> & React.RefAttributes<HTMLFieldSetElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & class_variance_authority.VariantProps<(props?: {
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<Omit<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & class_variance_authority.VariantProps<(props?: {
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string> & {
    asChild?: boolean;
}, "ref"> & React.RefAttributes<HTMLButtonElement>>;

export { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };
