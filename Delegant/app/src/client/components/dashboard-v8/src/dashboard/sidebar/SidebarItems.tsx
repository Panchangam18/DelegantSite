import { Link, useLocation } from "react-router-dom";
import { data } from "./data";
import { Collapse } from "./Collapse";

const style = {
  active: "font-normal mx-4 text-sm text-teal-500",
  inactive: "font-light mx-4 text-sm text-gray-900",
  link: "inline-flex items-center justify-start my-1 p-3 text-black",
};

export function SidebarItems() {
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);

  const isActive = (link) => {
    const decodedLink = decodeURIComponent(link);

    // Direct match for static routes
    if (decodedLink === decodedPathname) {
      console.log(`Direct match: ${decodedLink} === ${decodedPathname}`);
      return true;
    }

    // Partial match for dynamic routes
    const linkSegments = decodedLink.split('/');
    const pathnameSegments = decodedPathname.split('/');

    if (linkSegments.length !== pathnameSegments.length) {
      console.log(`Length mismatch: ${linkSegments.length} !== ${pathnameSegments.length}`);
      return false;
    }

    for (let i = 0; i < linkSegments.length; i++) {
      if (linkSegments[i].startsWith(':')) {
        console.log(`Skipping dynamic segment: ${linkSegments[i]}`);
        continue; // Skip dynamic segments
      }
      if (linkSegments[i] !== pathnameSegments[i]) {
        console.log(`Segment mismatch: ${linkSegments[i]} !== ${pathnameSegments[i]}`);
        return false;
      }
    }

    console.log(`Partial match: ${decodedLink} matches ${decodedPathname}`);
    return true;
  };

  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map(({ section, icon, content }) => (
          <Collapse key={section}>
            <div className="flex">
              <span>{icon}</span>
              <span className="pl-3">{section}</span>
            </div>
            {content.map((item) => (
              <div className="pl-5" key={item.title}>
                <Link to={item.link}>
                  <span className={style.link}>
                    <span
                      className={isActive(item.link) ? style.active : style.inactive}
                    >
                      {item.title}
                    </span>
                  </span>
                </Link>
              </div>
            ))}
          </Collapse>
        ))}
      </li>
    </ul>
  );
}
