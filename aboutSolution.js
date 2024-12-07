```javascript
// pages/about.js

export default function About({myVariable}) {
  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}

// getServerSideProps will handle the environment variable
export async function getServerSideProps() {
    return {
        props: {
            myVariable: process.env.MY_VARIABLE || 'Default Value'
        }
    };
}
```