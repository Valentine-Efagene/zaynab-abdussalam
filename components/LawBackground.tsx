import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LawBackgroundProps {
  image: string;
  mobileImage?: string;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  imagePosition?: string;
  imageSize?: string;
}

export function LawBackground({
  image,
  mobileImage,
  children,
  className,
  overlayClassName,
  overlayStyle,
  imagePosition = "center",
  imageSize = "cover",
}: LawBackgroundProps) {
  const mobile = mobileImage ?? image;

  return (
    <section
      className={cn(
        "relative bg-cover bg-no-repeat",
        className,
        mobileImage &&
          "[background-image:var(--law-bg-mobile)] md:[background-image:var(--law-bg-desktop)]",
      )}
      style={
        mobileImage
          ? ({
              "--law-bg-mobile": `url(${mobile})`,
              "--law-bg-desktop": `url(${image})`,
              backgroundPosition: imagePosition,
              backgroundSize: imageSize,
            } as CSSProperties)
          : {
              backgroundImage: `url(${image})`,
              backgroundPosition: imagePosition,
              backgroundSize: imageSize,
            }
      }
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          overlayClassName ?? "law-overlay-section",
        )}
        style={overlayStyle}
      />
      <div className="relative">{children}</div>
    </section>
  );
}
