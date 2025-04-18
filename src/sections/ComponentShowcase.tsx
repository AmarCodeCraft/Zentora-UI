import React, { useState } from "react";
import Button from "../components/Button";
import CodeBlock from "../components/CodeBlock";
import { Check, X, ChevronDown, Bell, Code as CodeIcon } from "lucide-react";

const ComponentShowcase: React.FC = () => {
  const [activeTabs, setActiveTabs] = useState<{
    [key: string]: "preview" | "code";
  }>({
    buttons: "preview",
    alerts: "preview",
    dropdowns: "preview",
    cards: "preview",
    badges: "preview",
    notifications: "preview",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleTabChange = (component: string, tab: "preview" | "code") => {
    setActiveTabs((prev) => ({
      ...prev,
      [component]: tab,
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const buttonCode = `import { Button } from '@zentora/ui';

// Primary Button
<Button variant="primary">Primary</Button>

// Secondary Button
<Button variant="secondary">Secondary</Button>

// Outline Button
<Button variant="outline">Outline</Button>

// Different sizes
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`;

  const alertsCode = `import { Alert } from '@zentora/ui';
import { Check, X } from 'lucide-react';

// Success Alert
<Alert variant="success" icon={<Check size={20} />}>
  Success alert message
</Alert>

// Error Alert
<Alert variant="error" icon={<X size={20} />}>
  Error alert message
</Alert>`;

  const dropdownsCode = `import { Dropdown, DropdownItem } from '@zentora/ui';
import { ChevronDown } from 'lucide-react';

<Dropdown 
  trigger={
    <button className="flex items-center justify-between w-full px-4 py-2 border rounded-lg">
      <span>Select option</span>
      <ChevronDown size={20} />
    </button>
  }
>
  <DropdownItem>Option 1</DropdownItem>
  <DropdownItem>Option 2</DropdownItem>
</Dropdown>`;

  const cardsCode = `import { Card } from '@zentora/ui';

// Standard Card
<Card>
  <Card.Title>Card Title</Card.Title>
  <Card.Content>Card content with some example text.</Card.Content>
</Card>

// Filled Card
<Card variant="filled">
  <Card.Title>Filled Card</Card.Title>
  <Card.Content>Alternative card style example.</Card.Content>
</Card>`;

  const badgesCode = `import { Badge } from '@zentora/ui';

// Solid badges
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

// Outline and subtle badges
<Badge variant="outline">Outline</Badge>
<Badge variant="subtle">Subtle</Badge>`;

  const notificationsCode = `import { Notification, Button } from '@zentora/ui';
import { Bell } from 'lucide-react';

<Notification
  icon={<Bell size={20} />}
  title="New Message"
  description="You have a new notification"
  action={<Button variant="text" size="sm">View</Button>}
/>`;

  // Component section template
  const ComponentSection = ({
    title,
    previewContent,
    code,
    componentKey,
  }: {
    title: string;
    previewContent: React.ReactNode;
    code: string;
    componentKey: string;
  }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => handleTabChange(componentKey, "preview")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTabs[componentKey] === "preview"
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => handleTabChange(componentKey, "code")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTabs[componentKey] === "code"
              ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
        >
          <div className="flex items-center justify-center">
            <CodeIcon size={16} className="mr-2" />
            Code
          </div>
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        {activeTabs[componentKey] === "preview" ? (
          previewContent
        ) : (
          <CodeBlock code={code} language="jsx" />
        )}
      </div>
    </div>
  );

  return (
    <section
      id="components"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Beautifully Crafted Components
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our extensive collection of customizable components built
            with React and Tailwind CSS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Buttons Showcase */}
          <ComponentSection
            title="Buttons"
            componentKey="buttons"
            code={buttonCode}
            previewContent={
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </div>
              </div>
            }
          />

          {/* Alerts Showcase */}
          <ComponentSection
            title="Alerts"
            componentKey="alerts"
            code={alertsCode}
            previewContent={
              <div className="space-y-4">
                <div className="p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                  <Check size={20} className="mr-2" />
                  Success alert message
                </div>
                <div className="p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
                  <X size={20} className="mr-2" />
                  Error alert message
                </div>
              </div>
            }
          />

          {/* Dropdowns Showcase */}
          <ComponentSection
            title="Dropdowns"
            componentKey="dropdowns"
            code={dropdownsCode}
            previewContent={
              <div className="space-y-4 relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
                  onClick={toggleDropdown}
                >
                  <span>Select option</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
                    <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
                      Option 1
                    </div>
                    <div className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded cursor-pointer">
                      Option 2
                    </div>
                  </div>
                )}
              </div>
            }
          />

          {/* Cards Showcase */}
          <ComponentSection
            title="Cards"
            componentKey="cards"
            code={cardsCode}
            previewContent={
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h4 className="font-medium mb-2">Card Title</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Card content with some example text.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium mb-2">Filled Card</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Alternative card style example.
                  </p>
                </div>
              </div>
            }
          />

          {/* Badges Showcase */}
          <ComponentSection
            title="Badges"
            componentKey="badges"
            code={badgesCode}
            previewContent={
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary text-white text-sm rounded-full">
                    Primary
                  </span>
                  <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-full">
                    Success
                  </span>
                  <span className="px-2 py-1 bg-yellow-500 text-white text-sm rounded-full">
                    Warning
                  </span>
                  <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-full">
                    Error
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border border-primary text-primary text-sm rounded-full">
                    Outline
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    Subtle
                  </span>
                </div>
              </div>
            }
          />

          {/* Notifications Showcase */}
          <ComponentSection
            title="Notifications"
            componentKey="notifications"
            code={notificationsCode}
            previewContent={
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <Bell size={20} className="mr-2 text-primary" />
                    <div>
                      <h4 className="font-medium">New Message</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        You have a new notification
                      </p>
                    </div>
                  </div>
                  <Button variant="text" size="sm">
                    View
                  </Button>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
