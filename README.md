# Next.js 15 - Environment Variable Error in Client Component

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 client components.  The error arises when attempting to access environment variables directly within a component rendered on the client-side.

## Problem

The `about.js` file attempts to access an environment variable (`process.env.MY_VARIABLE`).  However, because client components run in the user's browser where environment variables are not accessible, this causes an error.

## Solution

The solution involves loading environment variables during the build process and passing them as props to the component.  See `aboutSolution.js` for a corrected implementation.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about`. You'll see the error.
5. Replace `about.js` with `aboutSolution.js` and restart the server to see the solution in action. You will need to add a `.env.local` file in the root directory with `MY_VARIABLE=your_value`.
