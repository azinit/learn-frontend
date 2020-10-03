import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const TasksListPage = lazy(() => import("./tasks-list"));
const TaskDetailsPage = lazy(() => import("./task-details"));

const Routing = () => (
    <BrowserRouter>
        <Suspense fallback="Loading...">
            <Switch>
                <Route exact path="/" component={TasksListPage} />
                <Route exact path="/:id" component={TaskDetailsPage} />
                <Redirect to="/" />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default Routing
