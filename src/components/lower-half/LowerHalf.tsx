import { useEffect, useState } from '@lynx-js/react';
import './LowerHalf.css';
import { BinaryInput } from '../binary-input/BinaryInput.tsx';

const binaryLabels = [
  { label: 'Full House', value: 25 },
  { label: 'Short Straight', value: 30 },
  { label: 'Long Straight', value: 40 },
  { label: 'Yahtzee', value: 50 },
];

export function LowerHalf(props: {
  total: number;
  setTotal: (value: number) => void;
}) {
  const [binaryValues, setBinaryValues] = useState([
    ...binaryLabels.map(() => false),
  ]);

  useEffect(() => {
    const totalBinaries = binaryValues.reduce(
      (prev, curr, index) => prev + (curr ? binaryLabels[index].value : 0),
      0,
    );
    props.setTotal(totalBinaries);
  }, [binaryValues]);

  const toggleBinary = (index: number) => {
    const tempBinaryValues = [...binaryValues];
    tempBinaryValues[index] = !binaryValues[index];
    setBinaryValues(tempBinaryValues);
  };

  return (
    <view className="lower-half">
      {binaryLabels.map((binary, index) => {
        return (
          <view className="row">
            <text
              style={{
                color: binaryValues[index] ? 'grey' : 'white',
              }}
            >
              {binary.label}
            </text>
            <BinaryInput
              value={binary.value}
              isEnabled={binaryValues[index]}
              onToggle={() => toggleBinary(index)}
            />
          </view>
        );
      })}
      <view className="divider"></view>
      <view className="row">
        <text>Total Lower</text>
        <view className="total">
          <text>{props.total}</text>
        </view>
      </view>
    </view>
  );
}
