import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button>Secondary</Button>
    </div>
  );
};

export default Buttons;
