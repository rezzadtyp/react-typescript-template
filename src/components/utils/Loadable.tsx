import React, { Suspense } from "react";
// import Loading from "../shared/Loading";

const Loadable = <P extends object>(
  Component: React.ComponentType<P>,
  vars?: { loadingClassname: string }
) => {
  const LoadableComponent: React.FC<P> = (props: P) => {
    return (
      <Suspense fallback={<p className={vars?.loadingClassname}>Loading...</p>}>
        <Component {...props} />
      </Suspense>
    );
  };

  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return LoadableComponent;
};

export default Loadable;
