import { Button } from "~~/components/ui/button";

export default function ShadcnPage() {
  return (
    <div className="py-12 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold lg:text-3xl">shadcn/ui</h1>
        <div className="mt-12 lg:mt-16">
          <h2 className="text-xl font-semibold lg:text-2xl">Button</h2>
          <p>
            <Button>Hello World</Button>
          </p>
        </div>
      </div>
    </div>
  );
}
