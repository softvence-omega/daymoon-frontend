import { FC } from "react";
interface BreadcrumbsProps {
  title: string;
  subtitle: string;
  subtitle2?: string;

}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, subtitle, subtitle2 }) => (
  <div>
    <p className="text-base text-black">
      <span className="text-black/80">{title}</span> &gt; {subtitle} &gt;{" "}
      {subtitle2}
    </p>
  </div>
);

export default Breadcrumbs;
