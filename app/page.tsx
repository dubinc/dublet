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
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Link Shortener</CardTitle>
          <CardDescription>
            Enter your URL below to generate a short link
          </CardDescription>
        </CardHeader>
        <CardForm />
      </Card>
    </div>
  );
}
