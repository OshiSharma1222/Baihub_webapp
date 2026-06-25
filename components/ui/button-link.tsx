import Link from "next/link";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type ButtonStyleProps = VariantProps<typeof buttonVariants>;

type ButtonLinkProps = React.ComponentProps<typeof Link> & ButtonStyleProps;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

type ButtonAnchorProps = React.ComponentProps<"a"> & ButtonStyleProps;

export function ButtonAnchor({
  className,
  variant,
  size,
  ...props
}: ButtonAnchorProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
