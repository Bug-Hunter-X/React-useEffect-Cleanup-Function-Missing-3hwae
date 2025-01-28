```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function: Clears the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```