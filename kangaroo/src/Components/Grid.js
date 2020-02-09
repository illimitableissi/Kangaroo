import React from 'react';

export const Container = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export const Row = ({children}) => {
    return (
        <div className="row text-center">
            {children}
        </div>
    );
};

export const Column = ({children, props}) => {
    return (
        <div className="col-sm">
            {children}
        </div>
    );
};
