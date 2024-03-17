export default function Message() {
  const flag = Math.random() > 0.5;
  const cssClass = flag ? "chat-start" : "chat-end ";
  return (
    <div className={`chat ${cssClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div className="chat-bubble">Hello there beautiful!</div>
      <div className="chat-footer opacity-80">
        <time className="text-xs opacity-80">12:45</time>
      </div>
    </div>
  );
}
