import * as React from 'react';
const HelloComp = React.lazy(() => import('hello/App'));
const RemoteByeComp = React.lazy(() => import('bye/App'));

const Hello = () => {
    return (
        <div>
            <h1>Bazzinga, 🤖🤖🤖</h1>
            <React.Suspense fallback={<h1>Loading Hello!!</h1>}>
                <HelloComp />
            </React.Suspense>

            <React.Suspense fallback={<h1>Loading Bye!!</h1>}>
                <RemoteByeComp />
            </React.Suspense>
        </div>
    );
};

export default Hello;
