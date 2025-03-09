import { useEffect, useState } from '@lynx-js/react';
import './LowerHalf.css';
import { BinaryInput } from '../binary-input/BinaryInput.tsx';
import { ManualInput } from '../manual-input/ManualInput.tsx';

const binaryLabels = [
  { label: 'Full House', value: 25 },
  { label: 'Short Straight', value: 30 },
  { label: 'Long Straight', value: 40 },
  { label: 'Yahtzee', value: 50 },
];

const manualLabels = ['3 of a Kind', '4 of a Kind', 'Chance'];

export function LowerHalf(props: {
  total: number;
  setTotal: (value: number) => void;
}) {
  const [binaryValues, setBinaryValues] = useState([
    ...binaryLabels.map(() => false),
  ]);
  const [manualValues, setManualValues] = useState([
    ...manualLabels.map(() => 0),
  ]);

  useEffect(() => {
    const totalBinaries = binaryValues.reduce(
      (prev, curr, index) => prev + (curr ? binaryLabels[index].value : 0),
      0,
    );
    const totalManuals = manualValues.reduce((prev, curr) => prev + curr, 0);
    props.setTotal(totalBinaries + totalManuals);
  }, [binaryValues, manualValues]);

  const toggleBinary = (index: number) => {
    const tempBinaryValues = [...binaryValues];
    tempBinaryValues[index] = !binaryValues[index];
    setBinaryValues(tempBinaryValues);
  };

  const updateManual = (index: number, value: number) => {
    const tempManualValues = [...manualValues];
    tempManualValues[index] = value;
    setManualValues(tempManualValues);
  };

  return (
    <view className="lower-half">
      {manualLabels.slice(0, -1).map((label, index) => {
        return (
          <view className="row">
            <text
              style={{
                color: manualValues[index] ? 'grey' : 'white',
              }}
            >
              {label}
            </text>
            <ManualInput
              onChange={(newValue) => updateManual(index, newValue)}
            />
          </view>
        );
      })}
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

      <view className="row">
        <text
          style={{
            color: manualValues[2] ? 'grey' : 'white',
          }}
        >
          {manualLabels[2]}
        </text>
        <ManualInput onChange={(newValue) => updateManual(2, newValue)} />
      </view>
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
