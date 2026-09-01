import { Button } from "@adres/design-system";
import { Badge } from "@adres/design-system";
import "./theme.css";

export default function App() {
  return (
    <main style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Demo: simple components via dls-mcp</h1>
      <p>Button and Badge below are real Adres components, generated from
      list_components + get_component_details + get_brand_theme output - not hand-written.</p>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <Button>Primary action</Button>
        <Badge>New</Badge>
      </div>
    </main>
  );
}
