"use client";

import { CodeBlock, DocHeader, Preview, DocFooter } from "@/components/docs-ui";

export default function InputsPage() {
  return (
    <div className="space-y-10">
      <DocHeader 
        title="Inputs & Forms" 
        description="Precision data entry components with focus rings and validation states." 
      />

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Text Inputs</h2>
        <Preview>
          <div className="w-full max-w-xs space-y-4">
            <div>
              <label className="altus-label">Email Address</label>
              <input type="email" className="altus-input" placeholder="name@example.com" />
            </div>
            <div>
              <label className="altus-label">Password</label>
              <input type="password" className="altus-input" placeholder="••••••••" />
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<label className="altus-label">Label</label>
<input className="altus-input" placeholder="..." />`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Select</h2>
        <Preview>
          <div className="w-full max-w-xs">
            <label className="altus-label">Role</label>
            <select className="altus-select">
              <option>Designer</option>
              <option>Developer</option>
              <option>Product Manager</option>
            </select>
          </div>
        </Preview>
        <CodeBlock code={`<select className="altus-select">
  <option>Option 1</option>
</select>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Switches & Checkboxes</h2>
        <Preview>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="altus-checkbox" defaultChecked />
              <span className="text-sm font-medium">I agree to the terms</span>
            </div>
            <div className="flex items-center justify-between w-full max-w-xs border border-altus-border rounded-altus p-3">
              <span className="text-sm font-medium">Notifications</span>
              <input type="checkbox" className="altus-switch" defaultChecked />
            </div>
          </div>
        </Preview>
        <CodeBlock code={`// Checkbox
<input type="checkbox" className="altus-checkbox" />

// Switch
<input type="checkbox" className="altus-switch" />`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Input Groups</h2>
        <p className="opacity-70 text-sm">Enhanced form elements with hints, labels, and validation states.</p>
        <Preview>
          <div className="w-full max-w-sm space-y-6">
            <div className="altus-input-group">
              <label className="altus-label">Username</label>
              <input type="text" className="altus-input" placeholder="johndoe" />
              <span className="altus-input-hint">Your unique identifier on Altus.</span>
            </div>

            <div className="altus-input-group">
              <label className="altus-label">API Key</label>
              <input type="text" className="altus-input altus-input-invalid" value="invalid-key-123" readOnly />
              <span className="altus-input-error-msg">This API key has been revoked.</span>
            </div>
          </div>
        </Preview>
        <CodeBlock code={`<div className="altus-input-group">
  <label className="altus-label">Username</label>
  <input className="altus-input" />
  <span className="altus-input-hint">Hint text here.</span>
</div>

<div className="altus-input-group">
  <label className="altus-label">Error State</label>
  <input className="altus-input altus-input-invalid" />
  <span className="altus-input-error-msg">Validation message.</span>
</div>`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Scaffold via CLI</h2>
        <p className="opacity-70 text-sm">Add form elements and input groups to your codebase.</p>
        <CodeBlock code={`bun x @altus-ui/cli add input`} />
      </section>

      <DocFooter 
        backHref="/docs/buttons" 
        backLabel="Buttons"
        nextHref="/docs/navbar" 
        nextLabel="Sticky Navbar" 
      />
    </div>
  );
}
