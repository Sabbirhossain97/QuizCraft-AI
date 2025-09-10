"use client"
import { useQuery } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import QuizPage from "./components/QuizPage";

const fetchTest = async () => {
  const res = await fetch("http://localhost:5000/");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['testApi'],
    queryFn: fetchTest
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <QuizPage/>
    </div>
  );
}
