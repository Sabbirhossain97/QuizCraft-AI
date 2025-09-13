"use client"
import Sidebar from "./components/Sidebar";
import QuizPage from "./components/QuizPage";

export default function Home() {

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <QuizPage/>
    </div>
  );
}
