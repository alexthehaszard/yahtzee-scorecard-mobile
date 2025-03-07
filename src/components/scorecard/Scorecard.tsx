import { useState } from '@lynx-js/react';
import { UpperHalf } from '../upper-half/UpperHalf.tsx';
import { LowerHalf } from '../lower-half/LowerHalf.tsx';
import './Scorecard.css';

export function Scorecard() {
  const [upperTotal, setUpperTotal] = useState(0);
  const [lowerTotal, setLowerTotal] = useState(0);

  return (
    <view>
      <UpperHalf
        total={upperTotal}
        setTotal={(value: number) => setUpperTotal(value)}
      />
      <LowerHalf
        total={lowerTotal}
        setTotal={(value: number) => setLowerTotal(value)}
      />

      <view className="scorecard-total">
        <view className="row">
          <text>Grand Total</text>
          <view className="total">
            <text>{upperTotal + lowerTotal}</text>
          </view>
        </view>
      </view>
    </view>
  );
}
