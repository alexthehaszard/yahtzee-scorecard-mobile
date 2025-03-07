import './App.css';
import { Header } from './components/header/Header.tsx';
import { Scorecard } from './components/scorecard/Scorecard.tsx';

export function App() {
  return (
    <list
      className="body"
      list-type="single"
      span-count={1}
      scroll-orientation="vertical"
    >
      <list-item item-key="header" key="header">
        <Header />
      </list-item>
      <list-item item-key="scorecard" key="scorecard">
        <Scorecard />
      </list-item>
    </list>
  );
}
