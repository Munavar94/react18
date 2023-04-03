// Conditional rendering:
// export const UserGreeting = () => {
//     const isLoggedIn = true;
//     return <div>Welcome { isLoggedIn ? 'Munavar': "Guest"}</div>
// };

// Method 2: short circuit operator &&
export const UserGreeting = () => {
    const isLoggedIn = false;
    return <div>Welcome { isLoggedIn && 'Munavar' }</div>
}