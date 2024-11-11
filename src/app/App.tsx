import { useState } from "react";
import { Button } from "@/shared/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
