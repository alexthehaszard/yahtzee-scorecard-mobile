import { useEffect, useState } from '@lynx-js/react';
import { CounterInput } from '../counter-input/CounterInput.tsx';
import './UpperHalf.css';

const counterLabels = ['Aces', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];

export function UpperHalf(props: {
  total: number;
  setTotal: (value: number) => void;
}) {
  const [counters, setCounters] = useState([0, 0, 0, 0, 0, 0]);
  const [hasBonus, setHasBonus] = useState(false);

  useEffect(() => {
    const totalCounters = counters.reduce((prev, curr) => prev + curr, 0);
    if (totalCounters >= 63) {
      setHasBonus(true);
      props.setTotal(totalCounters + 35);
    } else {
      setHasBonus(false);
      props.setTotal(totalCounters);
    }
  }, [counters]);

  const incrementCounter = (index: number) => {
    const tempCounters = [...counters];
    const stepSize = index + 1;
    tempCounters[index] = Math.min(stepSize * 5, counters[index] + stepSize);
    setCounters(tempCounters);
  };

  const decrementCounter = (index: number) => {
    const tempCounters = [...counters];
    const stepSize = index + 1;
    tempCounters[index] = Math.max(0, counters[index] - stepSize);
    setCounters(tempCounters);
  };

  return (
    <view className="upper-half">
      {counterLabels.map((label, index) => {
        return (
          <view className="row">
            <text
              style={{
                color: counters[index] ? 'grey' : 'white',
              }}
            >
              {label}
            </text>
            <CounterInput
              currentValue={counters[index]}
              onIncrement={() => incrementCounter(index)}
              onDecrement={() => decrementCounter(index)}
            />
          </view>
        );
      })}
      <view className="divider"></view>
      <view className="row">
        <text>Bonus</text>
        <view className="total">
          <text>{hasBonus ? 35 : 0}</text>
        </view>
      </view>
      <view className="row">
        <text>Total Upper</text>
        <view className="total">
          <text>{props.total}</text>
        </view>
      </view>
      <view className="divider"></view>
    </view>
  );
}
