import './App.css'
import { 
  Boxes, 
  Pointer, 
  SquareStack, 
  Layers, 
  Palette 
} from "lucide-react";

import BasicProps from './components/BasicProps.jsx';
import ChildrenProps from './components/ChildrenProps.jsx';
import ComplesProps from './components/ComplexProps.jsx';
import RefProps from './components/RefProps.jsx';
import ThemeToggler from './components/ThemeToggler.jsx';

function Navigation (){
  const isDark = true;

  const sections = [
  { id: "basic", label: "Basic Props", icon: Boxes },
  { id: "ref", label: "Ref Props", icon: Pointer },
  { id: "children", label: "Children Props", icon: SquareStack },
  { id: "complex", label: "Complex Props", icon: Layers },
  { id: "theme", label: "Theme Props", icon: Palette }
];
}

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
