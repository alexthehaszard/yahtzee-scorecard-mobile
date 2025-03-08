import { useState } from '@lynx-js/react';
import './ManualInput.css';

export function ManualInput() {
  const [currentValue, setCurrentValue] = useState('');

  return (
    <view className="manual-input">
      <view className="manual-input-display">
        <input
          className="manual-input-textbox"
          placeholder=""
          bindinput={(event: CustomEvent) => {
            setCurrentValue(event.detail.value);
          }}
        />
        <text>{currentValue}</text>
      </view>
    </view>
  );
}
