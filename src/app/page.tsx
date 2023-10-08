import { Cats } from "@/components/Cats";
import { Presentation } from "@/components/Presentation";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex-1"></div>
      <Presentation />
      <div className="flex-1"></div>
      <Cats />
    </main>
  );
}
