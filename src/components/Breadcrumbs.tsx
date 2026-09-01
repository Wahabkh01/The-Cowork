import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { getMeta } from "@/data/meta";

/** Visible breadcrumb trail. Mirrors the BreadcrumbList JSON-LD emitted for the same path. */
export function Breadcrumbs({ path }: { path: string }) {
  const trail = getMeta(path).trail;
  if (!trail?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-32 pb-0">
      <ol className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
        <li>
          <Link href="/">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
          </Link>
        </li>
        {trail.map((crumb, i) => (
          <li key={crumb.path} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-white/20" aria-hidden="true" />
            {i === trail.length - 1 ? (
              <span className="text-white/70" aria-current="page">{crumb.name}</span>
            ) : (
              <Link href={crumb.path}>
                <span className="hover:text-primary cursor-pointer transition-colors">{crumb.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
