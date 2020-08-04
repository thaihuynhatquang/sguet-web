import { Spin } from "antd";
import { enquireScreen } from "enquire-js";
import navigator from "navigator";
import query from "qs";
import React, { Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

var checkMobile;

enquireScreen((b) => {
  checkMobile = b;
});

const PublicLayout = () => {
  const [isMobile, setIsMobile] = useState(checkMobile);

  useEffect(() => {
    enquireScreen((b) => setIsMobile(!!b));
  }, []);

  return (
    <>
      <Header isMobile={isMobile} />
      <main>
        <Suspense fallback={<Spin />}>
          <Switch>
            {navigator.publicRoutes
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
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
