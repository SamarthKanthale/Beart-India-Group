import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BlogPostCardProps = {
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  tag: string;
  title: string;
  description: string;
  authorName: string;
  date: string;
  readTime: string;
  link: string;
};

export function BlogPostCard({
  imageSrc,
  imageAlt,
  imageHint,
  tag,
  title,
  description,
  authorName,
  date,
  readTime,
  link,
}: BlogPostCardProps) {
  return (
    <Link href={link} className="block group h-full flex flex-col">
      <Card className="overflow-hidden flex flex-col flex-grow transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl animate-in fade-in zoom-in-95 duration-500">
        <div className="relative w-full aspect-[600/350] bg-muted overflow-hidden">
          <Image
            src={imageSrc}
            alt={`${title} - ${tag} by ${authorName}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            data-ai-hint={imageHint}
            loading="lazy"
          />
        </div>
        <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-2 w-fit bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground text-xs sm:text-sm">
            {tag}
          </Badge>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 flex-grow line-clamp-3 sm:line-clamp-4">
            {description}
          </p>
          <div className="mt-auto pt-3 sm:pt-4 border-t border-border">
            <div>
              <p className="text-xs sm:text-sm font-medium text-foreground">{authorName}</p>
              <p className="text-xs text-muted-foreground">
                {date} &middot; {readTime}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
