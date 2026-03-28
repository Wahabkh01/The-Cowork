import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-white/10">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
          </div>
          
          <p className="mt-4 text-muted-foreground text-sm">
            We couldn't find the page you were looking for. 
          </p>

          <div className="mt-6">
            <Link href="/">
              <button className="w-full bg-primary text-black font-semibold py-2 px-4 rounded hover:bg-white transition-colors">
                Return to Home
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
