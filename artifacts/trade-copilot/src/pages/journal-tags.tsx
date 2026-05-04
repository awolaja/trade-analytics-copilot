import { useListJournalTags } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function JournalTags() {
  const { data: tags, isLoading } = useListJournalTags();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Tags</h2>
      </header>

      <div className="p-8 max-w-4xl mx-auto w-full space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Journal Tags</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-muted-foreground">Loading tags...</div>
            ) : tags?.length === 0 ? (
              <div className="text-muted-foreground">No tags found.</div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {tags?.map(tag => (
                  <Badge key={tag.name} variant="outline" className="px-3 py-1.5 text-sm bg-card">
                    {tag.name} <span className="ml-2 text-muted-foreground">{tag.count}</span>
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
