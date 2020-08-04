import query from "qs";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import navigator from "navigator";
import { Spin } from "antd";

const PrivateLayout = () => {
  return (
    <Suspense fallback={<Spin />}>
      <Switch>
        {navigator.privateRoutes
          .filter((item) => item.render)
          .map((route) => {
            const Component = route.render;
            return (
              <Route
                key={route.path}
                {...route}
                render={(props) => (
                  <div className="animated fadeIn">
                    <Component
                      params={props.match.params}
                      query={query.parse(props.location.search.slice(1))}
                    />
                  </div>
                )}
              />
            );
          })}
      </Switch>
    </Suspense>
  );
};

export default PrivateLayout;
