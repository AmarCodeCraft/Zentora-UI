import React, { useState } from "react";
import { Copy, Search, Check, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import CodeBlock from "../components/CodeBlock";

const DocumentationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("getting-started");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCopyCode = (id: string) => {
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navigationItems = [
    {
      category: "Introduction",
      items: [
        { id: "getting-started", label: "Getting Started" },
        { id: "installation", label: "Installation" },
        { id: "theming", label: "Theming" },
      ],
    },
    {
      category: "Components",
      items: [
        { id: "buttons", label: "Buttons" },
        { id: "cards", label: "Cards" },
        { id: "alerts", label: "Alerts" },
        { id: "forms", label: "Form Elements" },
        { id: "modals", label: "Modals" },
        { id: "dropdowns", label: "Dropdowns" },
        { id: "tables", label: "Tables" },
      ],
    },
    {
      category: "Guides",
      items: [
        { id: "customization", label: "Customization" },
        { id: "accessibility", label: "Accessibility" },
        { id: "best-practices", label: "Best Practices" },
      ],
    },
  ];

  // Filter navigation items based on search query
  const filteredNavItems = searchQuery
    ? navigationItems
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.items.length > 0)
    : navigationItems;

  const renderContent = () => {
    switch (activeTab) {
      case "getting-started":
        return (
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Getting Started with Zentora UI
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Zentora UI is a modern React component library designed to help
                developers build beautiful, accessible, and responsive web
                applications quickly and efficiently.
              </p>

              <div className="mb-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                    1
                  </span>
                  Quick Installation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  To get started with Zentora UI, install the package using npm
                  or yarn:
                </p>

                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <CodeBlock code="npm install @zentora/ui" language="bash" />
                  <button
                    onClick={() => handleCopyCode("install-npm")}
                    className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedCode === "install-npm" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Or with yarn:
                </p>

                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <CodeBlock code="yarn add @zentora/ui" language="bash" />
                  <button
                    onClick={() => handleCopyCode("install-yarn")}
                    className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedCode === "install-yarn" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-12 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">
                    2
                  </span>
                  Basic Usage
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Import and use components in your React application:
                </p>

                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <CodeBlock
                    code={`import { Button, Card, Alert } from '@zentora/ui';

function App() {
  return (
    <div>
      <Card>
        <Card.Title>Welcome to Zentora UI</Card.Title>
        <Card.Content>
          <Alert variant="info">This is a simple example</Alert>
          <Button variant="primary">Get Started</Button>
        </Card.Content>
      </Card>
    </div>
  );
}`}
                    language="jsx"
                  />
                  <button
                    onClick={() => handleCopyCode("basic-usage")}
                    className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedCode === "basic-usage" ? (
                      <Check size={18} />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    30+ Components
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    A wide range of customizable UI components
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    Responsive Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Fully responsive components for all device sizes
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    Accessibility
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    WCAG 2.1 compliant components by default
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    Dark Mode
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Built-in dark mode support for all components
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    TypeScript
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Full TypeScript support with type definitions
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium mb-2 text-gray-900 dark:text-white">
                    Small Bundle Size
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Tree-shaking support for minimal bundle size
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to explore components?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Check out the component documentation to see all available
                components and how to use them.
              </p>
              <Button
                variant="primary"
                onClick={() => setActiveTab("buttons")}
                className="text-base px-6 py-3"
              >
                Explore Components
              </Button>
            </div>
          </div>
        );

      case "buttons":
        return (
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-primary">#</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Button Component
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Buttons are used to trigger actions or events, such as submitting
              a form, opening a dialog, canceling an action, or performing a
              delete operation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Preview
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="text">Text</Button>
                  </div>

                  <h3 className="text-lg font-medium mt-8 mb-4 text-gray-900 dark:text-white">
                    Different sizes
                  </h3>
                  <div className="flex flex-wrap items-center gap-4">
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
              </div>

              <div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                    Import
                  </h2>
                  <div className="relative mb-6">
                    <CodeBlock
                      code={`import { Button } from '@zentora/ui';`}
                      language="jsx"
                    />
                    <button
                      onClick={() => handleCopyCode("button-import")}
                      className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                      aria-label="Copy code"
                    >
                      {copiedCode === "button-import" ? (
                        <Check size={18} />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>

                  <h3 className="text-md font-medium mt-6 mb-2 text-gray-900 dark:text-white">
                    Usage
                  </h3>
                  <div className="relative mb-6">
                    <CodeBlock
                      code={`<Button variant="primary">
  Button Text
</Button>`}
                      language="jsx"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Variants
              </h2>

              <div className="relative mb-6">
                <CodeBlock
                  code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>`}
                  language="jsx"
                />
                <button
                  onClick={() => handleCopyCode("button-variants")}
                  className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                  aria-label="Copy code"
                >
                  {copiedCode === "button-variants" ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Sizes
              </h2>

              <div className="relative mb-6">
                <CodeBlock
                  code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`}
                  language="jsx"
                />
                <button
                  onClick={() => handleCopyCode("button-sizes")}
                  className="absolute top-3 right-3 p-2 rounded bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
                  aria-label="Copy code"
                >
                  {copiedCode === "button-sizes" ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                Props
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                        Prop
                      </th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                        Type
                      </th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                        Default
                      </th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        variant
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-mono text-xs text-gray-700 dark:text-gray-300">
                        'primary' | 'secondary' | 'outline' | 'text'
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        'primary'
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        The visual style of the button
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-900">
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        size
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-mono text-xs text-gray-700 dark:text-gray-300">
                        'sm' | 'md' | 'lg'
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        'md'
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        The size of the button
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        disabled
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-mono text-xs text-gray-700 dark:text-gray-300">
                        boolean
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        false
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Whether the button is disabled
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        className
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-mono text-xs text-gray-700 dark:text-gray-300">
                        string
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        ''
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Additional CSS classes to apply
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        onClick
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm font-mono text-xs text-gray-700 dark:text-gray-300">
                        function
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        undefined
                      </td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                        Function called when the button is clicked
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      // Add more cases for other components/sections

      default:
        return (
          <div className="py-12 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Documentation for this section is currently being developed and
              will be available soon.
            </p>
            <Button
              variant="primary"
              onClick={() => setActiveTab("getting-started")}
            >
              Back to Getting Started
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Header */}
      <div className="md:hidden bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 py-4 px-4 sticky top-16 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Documentation
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block fixed md:relative inset-0 md:inset-auto z-40 md:z-0 md:w-80 flex-shrink-0 bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent pt-20 md:pt-0`}
          >
            <div className="h-full md:sticky md:top-24 overflow-y-auto p-4 md:p-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search docs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <nav>
                  {filteredNavItems.map((category) => (
                    <div key={category.category} className="mb-6">
                      <h3 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2 tracking-wider">
                        {category.category}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item.id}>
                            <button
                              onClick={() => {
                                setActiveTab(item.id);
                                setSidebarOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center transition-colors ${
                                activeTab === item.id
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {activeTab === item.id && (
                                <ChevronRight
                                  size={16}
                                  className="mr-1 flex-shrink-0"
                                />
                              )}
                              <span
                                className={
                                  activeTab === item.id ? "ml-0" : "ml-5"
                                }
                              >
                                {item.label}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="hidden md:block bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 mb-6">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-white">
                  Need help?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  If you can't find what you're looking for, feel free to reach
                  out.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
