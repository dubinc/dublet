/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ESxmUuVdh7l
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import CardForm from "@/components/form";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Dublet</CardTitle>
          <CardDescription>
            A mini link shortener built with the{" "}
            <a
              href="https://d.to/typescript"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Dub TypeScript SDK
            </a>
            .<br />
            View the source code on{" "}
            <a
              href="https://git.new/dublet"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardForm />
      </Card>
    </div>
  );
}
