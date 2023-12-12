import { Button } from '../components/ui/button';

const Playground = () => {
  return (
    //   Button variants
    <div className="space-y-4 my-12">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <div className="space-y-4">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="link" asChild>
          <span>Link as child</span>
        </Button>
        <Button variant="link" asChild>
          <span>Link as child</span>
        </Button>
        <Button variant="link" asChild>
          <span>Link as child</span>
        </Button>
      </div>
    </div>
  );
};

export default Playground;
