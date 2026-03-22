import { Button } from "@/components/ui/button";
import { authService } from "@/services/auth.service";

export default async function CommonPage() {
    const data = await authService.getAllMedia();
    return (
        <div>
            <h1>Common Page</h1>
            <Button variant="outline">Hello World</Button>
            <h1>Total Media: {data?.meta.total}</h1>
        </div>
    );
}