import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold font-serif text-primary/20 mb-4 select-none">
          404
        </div>
        <h1 className="text-3xl font-bold font-serif text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you are looking for doesn't exist or may have moved. If you are facing a medical emergency, please call us immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" data-testid="link-home">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="destructive" data-testid="link-emergency">
            <a href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}>
              <Phone className="mr-2 h-5 w-5" />
              Emergency: {hospitalInfo.contact.phone}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
