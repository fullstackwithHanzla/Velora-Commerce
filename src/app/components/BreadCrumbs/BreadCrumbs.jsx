import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHome9Line } from "react-icons/ri";

const BreadCrumbs = () => {

  const location = useLocation();
  let currentLocation = "";

  const crumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => {

      currentLocation += `/${segment}`;

      return {
        label: segment.replaceAll("-", " "),
        path: currentLocation,
        isLast: index === array.length - 1
      };
    });

  if (crumbs.length === 0) return null;

  return (
    <div className="h-10 flex items-center w-full px-2 md:w-[78%] bg-(--bg-page) ">
      <nav aria-label="Breadcrumb">
        <ol
          className="
          flex items-center text-md
          [&>li:not(:last-child)]:after:content-['>']
          [&>li:not(:last-child)]:after:mx-2
          [&>li:not(:last-child)]:after:text-(--accent-secondary)
        "
        >
          <li className="flex">
            <Link to="/" className="text-[10px] md:text-[14px] text-(--accent-secondary) flex items-center gap-1  hover:text-(--accent-secondary)">
              <RiHome9Line className="size-4 sm:size-5"/>
              Home
            </Link>
          </li>

          {crumbs.map((crumb) => (
            <li key={crumb.path} className="capitalize  text-[10px] md:text-[14px]">
              {crumb.isLast ? (
                <span>{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-(--accent-secondary)">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;