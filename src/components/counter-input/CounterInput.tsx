import './CounterInput.css';

export function CounterInput(props: {
  currentValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <view className="counter-input">
      <view className="counter-button-group">
        <view className="counter-button" bindtap={props.onDecrement}>
          <text>-</text>
        </view>
        <view className="counter-value">
          <text>{props.currentValue}</text>
        </view>
        <view className="counter-button" bindtap={props.onIncrement}>
          <text>+</text>
        </view>
      </view>
    </view>
  );
}
