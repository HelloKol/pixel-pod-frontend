"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const useBreadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbs = pathSegments.map((segment, index) => {
    const route = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return {
      text: segment,
      route,
    };
  });

  return breadcrumbs;
};

export default function BreadCrumb() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="flex text-xl items-center gap-2">
      <span className="capitalize">
        <Link
          href={`/`}
          className="flex text-xl hover:text-gray-600 items-center gap-2"
        >
          <span>Home</span>
          <svg
            className="w-6 h-6 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </Link>
      </span>

      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className="capitalize">
          <Link
            href={`/${breadcrumb.route}`}
            className="flex text-xl hover:text-gray-600 items-center gap-2"
          >
            <span>{breadcrumb.text}</span>
            {index < breadcrumbs.length - 1 && (
              <svg
                className="w-6 h-6 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            )}
          </Link>
        </span>
      ))}
    </nav>
  );
}
