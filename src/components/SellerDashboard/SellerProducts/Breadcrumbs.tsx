import { FC } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../Help/help";

interface BreadcrumbsProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, subtitle, subtitle2 }) => (
  <div className="text-black/60 text-base">
    <p>
      <Link
        to={`../${slugify(title)}`}
        className=" transition hover:text-black  hover:underline font-semibold"
      >
        {title}
      </Link>
      <span> &gt; </span>
      {subtitle2 ? (
        <>
          <Link
            to={`../${slugify(subtitle)}`}
            className="  transition hover:text-black  hover:underline font-semibold"
          >
            {subtitle}
          </Link>
          <span> &gt; </span>
          <span className="font-semibold text-black">{subtitle2}</span>
        </>
      ) : (
        <span className="font-semibold text-black">{subtitle}</span>
      )}
    </p>
  </div>
);

export default Breadcrumbs;
