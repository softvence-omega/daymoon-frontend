import { FC } from "react";

interface BreadcrumbsProps {
  title: string;
  subtitle: string;
  subtitle2?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, subtitle, subtitle2 }) => (
  <div className="text-black/80 text-base">
    <p>
      <span>{title}</span>
      <span> &gt; {subtitle}</span>
      {subtitle2 && <span> &gt; {subtitle2}</span>}
    </p>
  </div>
);

export default Breadcrumbs;
