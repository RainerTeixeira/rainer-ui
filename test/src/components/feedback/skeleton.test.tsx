import { render, screen } from "@testing-library/react";
import { Skeleton } from "../../../../src/components/feedback/skeleton";

describe("Skeleton Component", () => {
  it("renders correctly with default props", () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("animate-pulse");
  });

  it("applies custom className", () => {
    render(<Skeleton className="custom-skeleton" data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("custom-skeleton");
  });

  it("forwards additional props", () => {
    render(<Skeleton data-testid="custom-skeleton" role="status" />);
    const skeleton = screen.getByTestId("custom-skeleton");
    expect(skeleton).toHaveAttribute("role", "status");
  });

  it("has proper default styling classes", () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("animate-pulse", "rounded-md", "bg-accent");
  });

  it("supports accessibility attributes", () => {
    render(<Skeleton aria-label="Loading content" data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveAttribute("aria-label", "Loading content");
  });

  it("can be used with custom dimensions", () => {
    render(<Skeleton className="h-20 w-32" data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-20", "w-32");
  });

  it("can be used for different content types", () => {
    const { rerender } = render(
      <Skeleton className="h-4 w-3/4" data-testid="skeleton" />
    );
    let skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-4", "w-3/4");

    rerender(
      <Skeleton className="h-8 w-full rounded-full" data-testid="skeleton" />
    );
    skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("h-8", "w-full", "rounded-full");
  });

  it("supports custom animation classes", () => {
    render(<Skeleton className="animate-bounce" data-testid="skeleton" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("animate-bounce");
  });

  it("can be used in loading states", () => {
    render(
      <div>
        <Skeleton className="h-6 w-1/3 mb-2" data-testid="skeleton" />
        <Skeleton className="h-4 w-full mb-1" data-testid="skeleton" />
        <Skeleton className="h-4 w-2/3" data-testid="skeleton" />
      </div>
    );

    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons).toHaveLength(3);
    expect(skeletons[0]).toHaveClass("h-6", "w-1/3", "mb-2");
    expect(skeletons[1]).toHaveClass("h-4", "w-full", "mb-1");
    expect(skeletons[2]).toHaveClass("h-4", "w-2/3");
  });

  it("supports different shapes", () => {
    const { rerender } = render(
      <Skeleton className="rounded-lg" data-testid="skeleton" />
    );
    let skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("rounded-lg");

    rerender(<Skeleton className="rounded-full" data-testid="skeleton" />);
    skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("rounded-full");

    rerender(<Skeleton className="rounded-none" data-testid="skeleton" />);
    skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass("rounded-none");
  });

  it("uses data-slot attribute", () => {
    render(<Skeleton />);
    const skeleton = document.querySelector('[data-slot="skeleton"]');
    expect(skeleton).toBeInTheDocument();
  });
});
