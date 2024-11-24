"use client";

import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { shorten } from "@/app/actions";
import { useEffect } from "react";
import { toast } from "sonner";

const initialState = {
  shortLink: "",
  error: undefined,
};

export default function CardForm() {
  const [state, formAction] = useFormState(shorten, initialState);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
  }, [state.error]);

  return (
    <CardContent className="bg-gray-50 border-t border-gray-200">
      <form className="space-y-4" action={formAction}>
        <div className="space-y-2">
          <Label htmlFor="url">URL</Label>
          <Input
            id="url"
            name="url"
            placeholder="example.com"
            required
            type="text"
          />
        </div>
        <SubmitButton />
      </form>
      {state.shortLink && (
        <div className="mt-4 p-4 border border-gray-200 bg-white dark:border-gray-700 rounded">
          <p className="text-blue-500 dark:text-blue-400 text-center">
            <Link href={state.shortLink} target="_blank">
              {state.shortLink.replace(/^https?:\/\//, "")}
            </Link>
          </p>
        </div>
      )}
    </CardContent>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" aria-disabled={pending}>
      {pending ? <LoadingCircle /> : "Generate Short Link"}
    </Button>
  );
}

function LoadingCircle() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 animate-spin fill-gray-600 text-gray-200"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}
