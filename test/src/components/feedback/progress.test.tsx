import { render, screen } from "@testing-library/react";
import { Progress } from "../../../../src/components/feedback/progress";

describe.skip("Progress Component", () => {
  it("renders correctly with default props", () => {
    render(<Progress value={50} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("data-state", "indeterminate");
    expect(progress).toHaveAttribute("data-max", "100");
    expect(progress).toHaveAttribute("data-value", "50");
  });

  it("renders with different values", () => {
    const { rerender } = render(<Progress value={0} />);
    let progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "0");

    rerender(<Progress value={100} />);
    progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "100");

    rerender(<Progress value={75} />);
    progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "75");
  });

  it("applies custom className", () => {
    render(<Progress value={50} className="custom-progress" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveClass("custom-progress");
  });

  it("forwards additional props", () => {
    render(<Progress value={50} data-testid="custom-progress" max={200} />);
    const progress = screen.getByTestId("custom-progress");
    expect(progress).toHaveAttribute("data-max", "200");
  });

  it("has proper accessibility attributes", () => {
    render(<Progress value={30} aria-label="Download progress" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("aria-label", "Download progress");
    expect(progress).toHaveAttribute("aria-valuemin", "0");
    expect(progress).toHaveAttribute("aria-valuemax", "100");
    expect(progress).toHaveAttribute("aria-valuenow", "30");
  });

  it("handles indeterminate state", () => {
    render(<Progress value={null} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-state", "indeterminate");
    expect(progress).not.toHaveAttribute("data-value");
  });

  it("supports custom max value", () => {
    render(<Progress value={25} max={50} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-max", "50");
    expect(progress).toHaveAttribute("aria-valuemax", "50");
  });

  it("has proper styling classes", () => {
    render(<Progress value={60} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toHaveClass(
      "relative",
      "h-4",
      "w-full",
      "overflow-hidden",
      "rounded-full",
      "bg-secondary"
    );
  });

  it("renders progress indicator with correct transform", () => {
    render(<Progress value={40} />);
    const progress = screen.getByRole("progressbar");
    const indicator = progress.querySelector('div[data-state="indeterminate"]');
    expect(indicator).toHaveClass(
      "h-full",
      "w-full",
      "flex-1",
      "transition-all",
      "bg-primary"
    );
  });

  it("handles edge cases", () => {
    const { rerender } = render(<Progress value={-10} />);
    let progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "-10");

    rerender(<Progress value={150} />);
    progress = screen.getByRole("progressbar");
    expect(progress).toHaveAttribute("data-value", "150");
  });
});
