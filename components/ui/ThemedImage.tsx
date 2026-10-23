import Image from "next/image";

type Props = {
  src: string;
  /** Optional variant shown only in the light theme. */
  lightSrc?: string;
  alt: string;
  /** Intrinsic proportions of the file. Used for layout only; the image is never stretched. */
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** With no lightSrc, show the image on a dark plate in light theme (for logos made for dark backgrounds). */
  plateInLight?: boolean;
};

export default function ThemedImage({
  src,
  lightSrc,
  alt,
  width,
  height,
  className = "",
  priority,
  sizes,
  plateInLight,
}: Props) {
  if (lightSrc) {
    return (
      <>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`theme-dark-only ${className}`}
        />
        <Image
          src={lightSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`theme-light-only ${className}`}
        />
      </>
    );
  }

  const img = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );

  return plateInLight ? <span className="logo-plate">{img}</span> : img;
}