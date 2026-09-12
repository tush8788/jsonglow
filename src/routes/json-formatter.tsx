import { createFileRoute } from "@tanstack/react-router";
import { getToolPageConfig, buildToolPageHead } from "@/config/tool-pages";
import { ToolPage } from "@/components/ToolPage";

const config = getToolPageConfig("/json-formatter");

export const Route = createFileRoute("/json-formatter")({
  head: () => buildToolPageHead(config),
  component: () => <ToolPage config={config} />,
});