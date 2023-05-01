import { CardsGrid } from "@/components/Card/Card";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-4 md:p-24 `}>
      <h1 className="mb-12"> Let's start </h1>
      <CardsGrid />
    </main>
  )
}
