import './BinaryInput.css';

export function BinaryInput(props: {
  value: number;
  isEnabled: boolean;
  onToggle: () => void;
}) {
  return (
    <view className="binary-input">
      <view
        style={{
          backgroundColor: props.isEnabled ? 'white' : 'rgb(50,50,50)',
        }}
        className="binary-button"
        bindtap={props.onToggle}
      >
        <text
          style={{
            color: props.isEnabled ? 'rgb(50,50,50)' : 'white',
          }}
          className={props.isEnabled ? 'binary-text-enabled' : ''}
        >
          {props.value}
        </text>
      </view>
    </view>
  );
}
