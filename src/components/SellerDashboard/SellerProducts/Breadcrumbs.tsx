import { FC } from "react";
interface BreadcrumbsProps {
  title: string;
  subtitle?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, subtitle }) => (
  <div>
    <p className="text-base text-black">
      <span className="text-black/80">{title}</span> &gt; {subtitle}
    </p>
  </div>
);

export default Breadcrumbs;
