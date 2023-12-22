import React from "react";

export default function Reload() {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        네트워크 에러가 발생했습니다. <br /> 잠시 후 다시 시도해주세요.
      </div>
      <button onClick={reload}>새로 고침</button>
    </div>
  );
}
