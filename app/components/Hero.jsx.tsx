// @flow
import * as React from 'react';

// type Props = {};
export const Hero = () => {
    return (
        <div className="flex min-h-screen items-center justify-center flex-col p-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold">
                    Your Get Away Driver &nbsp;<span className="animate-pulse">ZIPPIDO</span>
                </h1>
            </div>

            <iframe
                className="airtable-embed rounded-lg shadow-lg"
                src="https://airtable.com/embed/applcBMAClVpE4mhJ/pagGGAsomZ7ghnVsr/form"
                frameBorder="0"
                width="100%"
                height="533"
                style={{
                    background: 'transparent',
                    border: '1px solid #ccc',
                    maxWidth: '800px'
                }}
            />
        </div>
    );
};