import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import AvatarImages from "../avatar";
import React, { Suspense } from "react";
import Games from "../games";
import GamingInterest from "../gamingInterest";
import OtherInterests from "../otherInterest";
import FavoritePlaforms from "../platforms";
import FavoriteGenres from "../genres";
import VirtualGifts from "../virtualGifts";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const CurrentContent = () => {
  return (
    <>
      <main className="c-main">
        <CContainer fluid>
          <Suspense fallback={loading}>
            <Switch>
              <Route path="/dashboard/avatar">
                <AvatarImages />
              </Route>
              <Route path="/dashboard/games" component={Games}></Route>
              <Route
                path="/dashboard/gaminginterest"
                component={GamingInterest}
              ></Route>
              <Route
                path="/dashboard/otherinterest"
                component={OtherInterests}
              ></Route>
              <Route
                path="/dashboard/platforms"
                component={FavoritePlaforms}
              ></Route>
              <Route
                path="/dashboard/genres"
                component={FavoriteGenres}
              ></Route>
              <Route
                path="/dashboard/virtualgifts"
                component={VirtualGifts}
              ></Route>
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Suspense>
        </CContainer>
      </main>
    </>
  );
};

export default CurrentContent;
