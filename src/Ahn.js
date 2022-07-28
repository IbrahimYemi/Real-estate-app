import React from 'react';
function Books({ arr }) {
  console.log(arr); // 👉️ ['A', 'B', 'C', 'D']
  return (
    <div>
      {arr.map((title) => {
        return <div key={title}>{title.a}</div>;
      })}
    </div>
  );
}

export default function App() {
  const arr = [
    { a: 'aa', b: 'bb' },
    { a: 'aa1', b: 'bb1' },
    { a: 'aa2', b: 'bb2' },
    { a: 'aa3', b: 'bb3' },
  ];

  return (
    <div>
      <Books arr={arr} />
    </div>
  );
}
