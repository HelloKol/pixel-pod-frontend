import { Container } from "@/components";
import Link from "next/link";
import settings from "../../data/settings.json";

export default function SiteFooter({}: {}) {
  const { credit, footerNavigation } = settings;

  const renderNavigation = () => {
    return (
      footerNavigation &&
      footerNavigation.map((navigation) => {
        const { _key, _type, title, email, url } = navigation;
        const isExternalLink = _type === "externalLink";
        const isEmailLink = _type === "emailLink";

        return (
          <li>
            <Link
              href={
                isExternalLink ? url : isEmailLink ? `mailto:${email}` : "/"
              }
              key={_key}
              target={"_blank"}
            >
              {title}
            </Link>
          </li>
        );
      })
    );
  };

  return (
    <footer className="bg-[#131313] z-20 py-5 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <p>{credit}</p>
          <ul className="flex items-center gap-4">{renderNavigation()}</ul>
        </nav>
      </Container>
    </footer>
  );
}
