import { Spin } from "antd";
import Footer from "components/PublicLayout/Footer";
import Header from "components/PublicLayout/Header";
import { enquireScreen } from "enquire-js";
import navigator from "navigator";
import query from "qs";
import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

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
    <div style={{ position: "relative" }}>
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
                          isMobile={isMobile}
                          params={props.match.params}
                          query={query.parse(props.location.search.slice(1))}
                        />
                      </div>
                    )}
                  />
                );
              })}
          </Switch>
          <Redirect from="/" to="/home" />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
