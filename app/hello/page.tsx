"use client"; 

import { useEffect, useState } from "react";
import { getHello } from '../../api/api';

export default function DemoPage() {

  const [hello, setHello] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHello();
        setHello(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Hello Loading...</div>;
  }

  return (
    <div>
      <h1>Hello 출력</h1>
      <pre>{JSON.stringify(hello, null, 2)}</pre>
      <p>{hello?.message}</p>
    </div>
  );
}
