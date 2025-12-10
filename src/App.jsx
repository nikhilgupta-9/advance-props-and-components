import "./App.css";
import { Boxes, Pointer, SquareStack, Layers, Palette } from "lucide-react";

import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplesProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: Boxes },
    { id: "ref", label: "Ref Props", icon: Pointer },
    { id: "children", label: "Children Props", icon: SquareStack },
    { id: "complex", label: "Complex Props", icon: Layers },
    { id: "theme", label: "Theme Props", icon: Palette },
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 py-4">

      <div className="flex flex-wrap gap-2 justify-center">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button key={section.id} className="flex px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-800">
              <Icon className="w-5 h-5 mr-2" />
              {section.label}
            </button>
          );
        })}
      </div>
        </div>
    </nav>
  );
}


function AppContent() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <h1 className="text-white">Hello World !</h1>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
