import { withRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
import classnames from "classnames";

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);

  const className = classnames(props.className, {
    active: router.pathname === props.href
  });

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
