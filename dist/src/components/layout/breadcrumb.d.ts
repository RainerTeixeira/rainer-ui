import * as React from 'react';
declare const Breadcrumb: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLOListElement> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbList: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLOListElement> & React.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
    isCurrentPage?: boolean;
} & React.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const BreadcrumbPage: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, };
