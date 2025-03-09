import { useState } from '@lynx-js/react';
import './ManualInput.css';

export function ManualInput(props: { onChange: (newValue: number) => void }) {
  const [currentValue, setCurrentValue] = useState(0);

  const parseInput = (value: string) => {
    const result = Math.max(0, Math.min(30, parseInt(value))) | 0;
    setCurrentValue(result);
    return result;
  };

  return (
    <view className="manual-input">
      <view className="manual-input-display">
        <input
          className="manual-input-textbox"
          placeholder=""
          bindinput={(event: CustomEvent) => {
            props.onChange(parseInput(event.detail.value));
          }}
          value={currentValue}
        />
        <text>{currentValue}</text>
      </view>
    </view>
  );
}
